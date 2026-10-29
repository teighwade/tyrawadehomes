// Diagnostic: shows whether the IDX Broker connection works and which fields come back (no key, no personal data).
export const dynamic = 'force-dynamic';

async function probe(endpoint) {
  const key = process.env.IDX_BROKER_API_KEY;
  if (!key) return { error: 'no key' };
  try {
    const res = await fetch(`https://api.idxbroker.com/${endpoint}`, { headers: { accesskey: key, outputtype: 'json', 'Content-Type': 'application/x-www-form-urlencoded', apiversion: '1.8.0' }, cache: 'no-store' });
    const text = await res.text();
    let data; try { data = JSON.parse(text); } catch { data = null; }
    const items = !data ? [] : Array.isArray(data) ? data : Object.values(data).filter((v) => v && typeof v === 'object');
    const firstItem = items[0] || {};
    return {
      status: res.status,
      count: items.length,
      fields: Object.keys(firstItem),
      statuses: [...new Set(items.map((i) => i.propStatus || i.status).filter(Boolean))],
      sample: endpoint === 'clients/systemlinks' ? items.map((i) => ({ name: i.name, url: i.url })) : { city: firstItem.cityName, price: firstItem.listingPrice, status: firstItem.propStatus, hasImage: Boolean(firstItem.image), details: firstItem.fullDetailsURL },
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
