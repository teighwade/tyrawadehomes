// IDX Broker listings for Teigh Wade. The API key lives only in the Vercel environment variable IDX_BROKER_API_KEY
// (never in the code). Data is fetched on the server and cached for an hour, so active, pending and sold listings
// update automatically without anyone touching the site.
const API = 'https://api.idxbroker.com';
export const REVALIDATE = 3600;

async function call(endpoint) {
  const key = process.env.IDX_BROKER_API_KEY;
  if (!key) return null;
  try {
    const res = await fetch(`${API}/${endpoint}`, {
      headers: { accesskey: key, outputtype: 'json', 'Content-Type': 'application/x-www-form-urlencoded', apiversion: '1.8.0' },
      next: { revalidate: REVALIDATE },
    });
    if (res.status === 204) return [];
    if (!res.ok) { console.error(`IDX Broker ${endpoint}: HTTP ${res.status}`); return null; }
    return await res.json();
  } catch (e) {
    console.error(`IDX Broker ${endpoint}: ${e.message}`);
    return null;
  }
}

// IDX Broker nests results by MLS ID, e.g. { b012: { 'b012!%123': {...listing}, ... } }; flatten until we reach listings.
const looksLikeListing = (o) => o && typeof o === 'object' && ('listingID' in o || 'listingPrice' in o || 'address' in o || 'propStatus' in o);
function list(data, depth = 0) {
  if (!data || typeof data !== 'object' || depth > 3) return [];
  const vals = Array.isArray(data) ? data : Object.values(data);
  return vals.flatMap((v) => (looksLikeListing(v) ? [v] : v && typeof v === 'object' ? list(v, depth + 1) : []));
}
const flatList = (data) => (!data ? [] : Array.isArray(data) ? data : Object.values(data).filter((v) => v && typeof v === 'object'));
const num = (v) => { const n = Number(String(v ?? '').replace(/[^0-9.]/g, '')); return Number.isFinite(n) && n > 0 ? n : null; };
const first = (...vals) => vals.find((v) => v !== undefined && v !== null && String(v).trim() !== '');

function photo(l) {
  const img = l.image;
  if (img && typeof img === 'object') {
    const pics = Object.values(img).filter((x) => x && typeof x === 'object' && x.url);
    if (pics.length) return pics[0].url;
  }
  return first(l.imageURL, l.photoURL, l.mainPhoto, l.image?.url) || null;
}

function photos(l) {
  const img = l.image;
  if (!img || typeof img !== 'object') return photo(l) ? [photo(l)] : [];
  return Object.keys(img).filter((k) => /^\d+$/.test(k)).sort((a, b) => a - b).map((k) => img[k]?.url).filter(Boolean).slice(0, 6);
}

function statusOf(l, fallback) {
  const s = String(first(l.propStatus, l.status, l.listingStatus, '')).toLowerCase();
  if (/sold|closed/.test(s)) return 'sold';
  if (/pend|contract|escrow|contingent|ucb/.test(s)) return 'pending';
  if (/active|coming/.test(s)) return 'active';
  return fallback;
}

function normalize(l, fallback) {
  const street = first(l.address, [l.streetNumber, l.streetDirection, l.streetName, l.unitNumber].filter(Boolean).join(' '));
  return {
    id: String(first(l.listingID, l.listingId, l.id, street)),
    status: statusOf(l, fallback),
    rawStatus: first(l.propStatus, l.status, null),
    street: street || 'Address on request',
    city: first(l.cityName, l.city, ''),
    state: first(l.state, 'AZ'),
    zip: first(l.zipcode, l.zip, ''),
    price: num(first(l.soldPrice, l.closePrice, l.listingPrice, l.price)),
    listPrice: num(l.listingPrice),
    beds: num(first(l.bedrooms, l.beds)),
    baths: num(first(l.totalBaths, l.baths, l.fullBaths)),
    sqft: num(first(l.sqFt, l.sqft, l.livingArea)),
    photo: photo(l),
    url: first(l.fullDetailsURL, l.detailsURL, null),
    date: first(l.soldDate, l.closeDate, l.dateModified, l.listingDate, null),
    side: first(l.agentRole, null),
    added: first(l.dateAdded, l.listingDate, l.dateModified, null),
    photos: photos(l),
    acres: num(l.acres),
    yearBuilt: num(l.yearBuilt),
    subdivision: first(l.subdivision, null),
    propType: first(l.idxPropType, l.propType, l.propSubType, null),
    remarks: first(l.remarksConcat, l.remarks, null),
  };
}

export async function getListings() {
  const [featured, soldPending, supplemental] = await Promise.all([call('clients/featured'), call('clients/soldpending'), call('clients/supplemental')]);
  const all = [
    ...list(featured).map((l) => normalize(l, 'active')),
    ...list(soldPending).map((l) => normalize(l, 'sold')),
    ...list(supplemental).map((l) => normalize(l, 'active')),
  ];
  const seen = new Set();
  const listings = all.filter((l) => (seen.has(l.id) ? false : seen.add(l.id)));
  const by = (s) => listings.filter((l) => l.status === s).sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
  const newest = (arr) => [...arr].sort((a, b) => String(b.added || '').localeCompare(String(a.added || '')) || Number(b.id) - Number(a.id))[0] || null;
  const featuredListing = newest(by('active')) || newest(by('pending'));
  return { featured: featuredListing, connected: Boolean(process.env.IDX_BROKER_API_KEY) && (featured !== null || soldPending !== null), active: by('active'), pending: by('pending'), sold: by('sold') };
}

// The IDX Broker account's own search pages (used by /search/ when IDX_SEARCH_URL isn't set).
export async function getSearchUrl() {
  if (process.env.IDX_SEARCH_URL) return process.env.IDX_SEARCH_URL;
  const links = flatList(await call('clients/systemlinks'));
  const pick = ['Map Search', 'Basic Search', 'Advanced Search'].map((n) => links.find((l) => l.name === n)).find(Boolean);
  return pick?.url || null;
}

// Other IDX Broker pages by name (e.g. 'Home Valuation', 'Email Update Signup').
export async function getIdxLink(name) {
  const links = flatList(await call('clients/systemlinks'));
  return links.find((l) => l.name === name)?.url || null;
}

export const money = (n) => (n ? '$' + Math.round(n).toLocaleString('en-US') : null);
