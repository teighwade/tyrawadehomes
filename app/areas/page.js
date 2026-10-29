import { getAreas } from '../../lib/content';
import { AREAS, SITE_URL } from '../../lib/site';
import { graph, crumbs } from '../../lib/schema';
import JsonLd from '../../components/JsonLd';
import { Crumbs, Cta } from '../../components/PageView';
import { Arrow, Pin } from '../../components/Icons';

export const metadata = {
  title: { absolute: 'West Valley Areas: Surprise, Peoria, Glendale & More | Teigh Wade' },
  description: 'Real estate guides to Surprise, Waddell, Wickenburg, Glendale, Peoria, Sun City, Sun City West, El Mirage, Goodyear, Buckeye, Litchfield Park and Phoenix.',
  alternates: { canonical: SITE_URL + '/areas/' },
};

export default function AreasIndex() {
  const pages = new Map(getAreas().map((a) => [a.path, a]));
  const trail = [{ name: 'Home', href: '/' }, { name: 'Areas', href: '/areas/' }];
  return (
    <>
      <JsonLd data={graph(crumbs(trail), { '@type': 'CollectionPage', '@id': `${SITE_URL}/areas/#page`, url: `${SITE_URL}/areas/`, name: 'Areas Teigh Wade serves' })} />
      <section className="page-hero">
        <div className="wrap">
          <Crumbs items={trail} />
          <p className="eyebrow">Areas I serve</p>
          <h1>Surprise, Phoenix and the West Valley</h1>
          <div className="answer"><b>The short answer</b>I'm based in Surprise and help buyers and sellers across the West Valley and Phoenix, with representation anywhere in Arizona. Each guide covers home styles, well-known communities, HOAs and what to check before you buy or sell.</div>
        </div>
      </section>
      <div className="wrap" style={{ padding: '56px var(--gutter)' }}>
        <div className="grid grid--3">
          {AREAS.map((a) => {
            const p = pages.get(`/areas/${a.slug}/`);
            return (
              <a key={a.slug} className="card" href={`/areas/${a.slug}/`}>
                <span className="card__icon"><Pin /></span>
                <h3>{a.name}</h3>
                <p>{p?.description || `Homes and real estate in ${a.name}, AZ.`}</p>
                <span className="card__go">{a.name} guide <Arrow /></span>
              </a>
            );
          })}
        </div>
      </div>
      <div className="wrap" style={{ paddingBottom: 80 }}><Cta /></div>
    </>
  );
}
