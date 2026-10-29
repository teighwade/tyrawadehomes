import { getListings } from '../../lib/idx';
import { SITE_URL, PHONE, TEL } from '../../lib/site';
import { graph, crumbs } from '../../lib/schema';
import JsonLd from '../../components/JsonLd';
import { ListingGrid, IdxDisclaimer } from '../../components/Listings';
import { Crumbs, Cta } from '../../components/PageView';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: "Teigh Wade's Listings: For Sale, Pending & Sold | REALTOR®" },
  description: "Homes listed and sold by Teigh Wade, REALTOR® with HomeSmart Elite Group: active listings, pending sales and recently sold homes in the West Valley.",
  alternates: { canonical: SITE_URL + '/my-listings/' },
};

export default async function MyListings() {
  const { active, pending, sold } = await getListings();
  const trail = [{ name: 'Home', href: '/' }, { name: 'My listings', href: '/my-listings/' }];
  const groups = [
    { id: 'for-sale', title: 'For sale', items: active, empty: 'No active listings right now. New listings show up here automatically.' },
    { id: 'pending', title: 'Pending', items: pending, empty: 'No pending sales at the moment.' },
    { id: 'sold', title: 'Recently sold', items: sold, empty: 'Sold homes show up here automatically.' },
  ];
  return (
    <>
      <JsonLd data={graph({ '@type': 'CollectionPage', '@id': `${SITE_URL}/my-listings/#page`, url: `${SITE_URL}/my-listings/`, name: "Teigh Wade's listings" }, crumbs(trail))} />
      <section className="page-hero">
        <div className="wrap">
          <Crumbs items={trail} />
          <p className="eyebrow">My listings</p>
          <h1>For sale, pending and sold</h1>
          <div className="answer"><b>Updated automatically</b>These are homes I've listed or sold, pulled from the MLS and refreshed every hour. Thinking about selling? Call or text <a href={TEL}>{PHONE}</a> for a no-obligation pricing consultation.</div>
        </div>
      </section>
      <div className="wrap" style={{ padding: '48px var(--gutter) 24px' }}>
        <nav className="tabs" aria-label="Listing status">
          {groups.map((g) => <a key={g.id} href={`#${g.id}`}>{g.title} ({g.items.length})</a>)}
          <a href="/search/">Search all homes →</a>
        </nav>
        {groups.map((g) => (
          <section key={g.id} id={g.id} style={{ marginBottom: 56 }}>
            <h2>{g.title}</h2>
            <ListingGrid items={g.items} empty={g.empty} />
          </section>
        ))}
        <IdxDisclaimer />
      </div>
      <div className="wrap" style={{ paddingBottom: 80 }}><Cta /></div>
    </>
  );
}
