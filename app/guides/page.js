import { getGuides } from '../../lib/content';
import { SITE_URL } from '../../lib/site';
import { graph, crumbs } from '../../lib/schema';
import JsonLd from '../../components/JsonLd';
import { Crumbs, Cta } from '../../components/PageView';
import { Arrow, Book } from '../../components/Icons';

export const metadata = {
  title: { absolute: 'Arizona Home Buying & Selling Guides | Teigh Wade REALTOR®' },
  description: 'Plain-English guides for Arizona buyers and sellers: the home buying process, a selling checklist, 55+ communities and moving to the West Valley.',
  alternates: { canonical: SITE_URL + '/guides/' },
};

export default function GuidesIndex() {
  const guides = getGuides();
  const trail = [{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides/' }];
  return (
    <>
      <JsonLd data={graph(crumbs(trail), { '@type': 'CollectionPage', '@id': `${SITE_URL}/guides/#page`, url: `${SITE_URL}/guides/`, name: 'Guides', hasPart: guides.map((g) => ({ '@type': 'Article', headline: g.title, url: SITE_URL + g.path })) })} />
      <section className="page-hero">
        <div className="wrap">
          <Crumbs items={trail} />
          <p className="eyebrow">Guides</p>
          <h1>Straight answers for Arizona buyers and sellers</h1>
          <div className="answer"><b>What's here</b>Step-by-step guides written for the West Valley: how buying works in Arizona, a selling checklist, what to know about 55+ communities, and moving here from out of state.</div>
        </div>
      </section>
      <div className="wrap" style={{ padding: '56px var(--gutter)' }}>
        <div className="grid grid--2">
          {guides.map((g) => (
            <a key={g.path} className="card" href={g.path}>
              <span className="card__icon"><Book /></span>
              <h3>{g.title}</h3>
              <p>{g.description}</p>
              <span className="card__go">{g.readMinutes ? `${g.readMinutes} min read` : 'Read the guide'} <Arrow /></span>
            </a>
          ))}
        </div>
      </div>
      <div className="wrap" style={{ paddingBottom: 80 }}><Cta /></div>
    </>
  );
}
