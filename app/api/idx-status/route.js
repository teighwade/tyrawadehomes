// Diagnostic: shows whether the IDX Broker connection works and which fields come back (no key, no personal data).
export const dynamic = 'force-dynamic';

async function probe(endpoint) {
  const key = process.env.IDX_BROKER_API_KEY;
  if (!key) return { error: 'no key' };
  try {
    const res = await fetch(`https://api.idxbroker.com/${endpoint}`, { headers: { accesskey: key, outputtype: 'json', 'Content-Type': 'application/x-www-form-urlencoded', apiversion: '1.8.0' }, cache: 'no-store' });
    const text = await res.text();
    let data; try { data = JSON.parse(text); } catch { data = null; }
    const flat = (d, depth = 0) => (!d || typeof d !== 'object' || depth > 3) ? [] : Object.values(d).flatMap((v) => (v && typeof v === 'object' && ('listingID' in v || 'listingPrice' in v || 'address' in v || 'name' in v)) ? [v] : flat(v, depth + 1));
    const items = !data ? [] : flat(data);
    const firstItem = items[0] || {};
    return {
      status: res.status,
      count: items.length,
      fields: Object.keys(firstItem),
      statuses: [...new Set(items.map((i) => i.propStatus || i.status).filter(Boolean))],
      sample: endpoint === 'clients/systemlinks' ? items.length : items.map((i) => ({ city: i.cityName, price: i.listingPrice, sold: i.soldPrice, status: i.propStatus, statusDetail: i.idxStatus || i.status, soldDate: i.soldDate, image: i.image && typeof i.image === 'object' ? Object.keys(i.image).slice(0, 3) : i.image, details: i.fullDetailsURL })),
      raw: data ? undefined : text.slice(0, 200),
    };
  } catch (e) { return { error: e.message }; }
}

export async function GET() {
  const eps = ['clients/featured', 'clients/soldpending', 'clients/supplemental', 'clients/systemlinks', 'clients/accountinfo'];
  const out = {};
  for (const e of eps) out[e] = await probe(e);
  return Response.json(out);
}
