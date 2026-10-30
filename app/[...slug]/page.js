import { notFound } from 'next/navigation';
import { getByPath, allContentPaths } from '../../lib/content';
import PageView, { metaFor } from '../../components/PageView';
import { BrandBand } from '../../components/Brand';
import { notaryNode } from '../../lib/schema';
import Social from '../../components/Social';

const NOTARY = ['/mobile-notary/', '/loan-signing-agent/', '/wedding-officiant/'];
const pathOf = (slug) => '/' + slug.join('/') + '/';

export const dynamicParams = false;
export function generateStaticParams() {
  return allContentPaths().map((p) => ({ slug: p.split('/').filter(Boolean) }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getByPath(pathOf(slug));
  return page ? metaFor(page) : {};
}

function AreaFacts({ page }) {
  const f = page.facts || {};
  const rows = [['County', f.county], ['Getting around', f.freeways], ['Well-known communities', f.communities], ['HOAs', f.hoa], ['Age-restricted', f.ageRestricted]].filter(([, v]) => v);
  if (!rows.length) return null;
  return <dl className="facts">{rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>;
}

export default async function ContentPage({ params }) {
  const { slug } = await params;
  const path = pathOf(slug);
  const page = getByPath(path);
  if (!page) notFound();
  const isNotary = NOTARY.includes(path);
  let trail;
  if (page.kind === 'areas') trail = [{ name: 'Home', href: '/' }, { name: 'Areas', href: '/areas/' }, { name: page.name || page.title, href: path }];
  if (page.kind === 'guides') trail = [{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides/' }, { name: page.title, href: path }];
  return (
    <PageView
      path={path}
      crumbsTrail={trail}
      notary={isNotary}
      before={page.kind === 'areas' ? <AreaFacts page={page} /> : path === '/about/' ? <img src="/images/teigh-wade-full-body.jpg" alt="Teigh Wade, REALTOR®" width="1600" height="1600" style={{ width: 'min(100%, 420px)', borderRadius: 24, margin: '0 0 32px', background: '#fff' }} /> : null}
      after={path === '/about/' || path === '/contact/' ? (
        <>
          {path === '/about/' && (
            <section className="fun-fact">
              <img src="/images/teigh-wade-tesla.jpg" alt="Teigh Wade with her Frost Blue Tesla Model S Plaid" width="1440" height="1910" loading="lazy" />
              <div>
                <p className="eyebrow">Fun fact</p>
                <h2>The blue on this website? That's my car.</h2>
                <p>Meet my Tesla Model S Plaid in Frost Blue Metallic. I loved the color so much that it became the color of this website. It's calm, it's classy, and it gets me to showings and notary appointments all over the Valley.</p>
                <p>If you see a Frost Blue Model S parked outside an open house in Surprise, come say hi.</p>
              </div>
            </section>
          )}
          <div style={{ marginTop: 48 }}><BrandBand card /></div>
          <div className="social-strip" style={{ marginTop: 40 }}><p><b>Follow along</b> Find me on social media</p><Social variant="round" /></div>
        </>
      ) : null}
      extraSchema={isNotary ? [notaryNode()] : []}
    />
  );
}
