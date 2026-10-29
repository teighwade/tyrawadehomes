import { notFound } from 'next/navigation';
import { getByPath, allContentPaths } from '../../lib/content';
import PageView, { metaFor } from '../../components/PageView';
import { notaryNode } from '../../lib/schema';
import Social from '../../components/Social';

const NOTARY = ['/mobile-notary/', '/loan-signing-agent/', '/fingerprinting-and-more/', '/wedding-officiant/'];
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
      after={path === '/about/' || path === '/contact/' ? <section><h2>Follow me on social media</h2><Social /></section> : null}
      extraSchema={isNotary ? [notaryNode()] : []}
    />
  );
}
