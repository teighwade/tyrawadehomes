import { getSearchUrl } from '../../lib/idx';
import { SITE_URL, PHONE, TEL, HOMESMART_PROFILE, AREAS } from '../../lib/site';
import { graph, crumbs } from '../../lib/schema';
import JsonLd from '../../components/JsonLd';
import { Crumbs, Cta } from '../../components/PageView';
import { Search, Check } from '../../components/Icons';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Search Homes for Sale in Surprise & the West Valley | Teigh Wade' },
  description: 'Search every home for sale on the Arizona MLS in Surprise, Phoenix and the West Valley, then call or text Teigh Wade, REALTOR®, to tour any of them.',
  alternates: { canonical: SITE_URL + '/search/' },
};

export default async function SearchPage() {
  const searchUrl = (await getSearchUrl()) || HOMESMART_PROFILE;
  const trail = [{ name: 'Home', href: '/' }, { name: 'Search homes', href: '/search/' }];
  return (
    <>
      <JsonLd data={graph({ '@type': 'WebPage', '@id': `${SITE_URL}/search/#page`, url: `${SITE_URL}/search/`, name: 'Search homes for sale' }, crumbs(trail))} />
      <section className="page-hero">
        <div className="wrap">
          <Crumbs items={trail} />
          <p className="eyebrow">Home search</p>
          <h1>Search homes for sale</h1>
          <div className="answer"><b>Live MLS listings</b>Search every home for sale on the Arizona MLS by city, price, beds, baths and more. When you find something you like, call or text me at <a href={TEL}>{PHONE}</a> and I'll set up a tour.</div>
          <div className="btn-row" style={{ marginTop: 26 }}>
            <a className="btn btn--clay" href={searchUrl} rel="noopener"><Search />Open the home search</a>
            <a className="btn btn--ghost" href="/my-listings/">See my listings</a>
          </div>
        </div>
      </section>
      <div className="wrap" style={{ padding: '56px var(--gutter)' }}>
        <div className="split" style={{ alignItems: 'start' }}>
          <div>
            <h2>Before you start searching</h2>
            <ul className="ticks">
              <li><Check />Get pre-approved first so you know your real budget and can move fast on the right home. I can refer you to trusted lenders.</li>
              <li><Check />Check HOA rules and fees, solar (leased or owned), and pool equipment on any home you like.</li>
              <li><Check />In Arizona, many buyers now sign a written buyer-broker agreement before touring. I'll walk you through it.</li>
            </ul>
            <p>New to the process? Read the <a href="/guides/arizona-home-buying-process/">Arizona home buying process</a> guide or the <a href="/first-time-home-buyers/">first-time buyer</a> page.</p>
          </div>
          <div>
            <h2>Browse by area</h2>
            <ul className="chips">{AREAS.map((a) => <li key={a.slug}><a href={`/areas/${a.slug}/`}>{a.name}</a></li>)}</ul>
          </div>
        </div>
      </div>
      <div className="wrap" style={{ paddingBottom: 80 }}><Cta /></div>
    </>
  );
}
