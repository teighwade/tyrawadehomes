import { getFaqCategories, getByPath, allContentPaths } from '../../lib/content';
import { SITE_URL } from '../../lib/site';
import { graph, crumbs } from '../../lib/schema';
import JsonLd from '../../components/JsonLd';
import { Crumbs, Cta, Faqs } from '../../components/PageView';

export const metadata = {
  title: { absolute: 'Real Estate & Notary FAQ | Teigh Wade REALTOR®, Surprise AZ' },
  description: 'Answers to common questions about buying and selling a home in Arizona and about mobile notary services, from Teigh Wade, REALTOR® and notary.',
  alternates: { canonical: SITE_URL + '/faq/' },
};

export default function FaqPage() {
  const cats = getFaqCategories();
  const trail = [{ name: 'Home', href: '/' }, { name: 'FAQ', href: '/faq/' }];
  const all = cats.flatMap((c) => c.faqs);
  return (
    <>
      <JsonLd data={graph(crumbs(trail), all.length ? { '@type': 'FAQPage', '@id': `${SITE_URL}/faq/#faq`, mainEntity: all.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) } : null)} />
      <section className="page-hero">
        <div className="wrap">
          <Crumbs items={trail} />
          <p className="eyebrow">FAQ</p>
          <h1>Questions people ask me</h1>
          <div className="answer"><b>Quick answers</b>Straight answers about buying and selling a home in Arizona and about mobile notary services. Don't see yours? Call or text me.</div>
          {cats.length > 1 && <div className="btn-row" style={{ marginTop: 22 }}>{cats.map((c) => <a key={c.slug} className="btn btn--ghost" href={`#${c.slug}`}>{c.title}</a>)}</div>}
        </div>
      </section>
      <div className="wrap" style={{ padding: '56px var(--gutter)', maxWidth: 940 }}>
        {cats.map((c) => (
          <div className="faq-cat" key={c.slug}>
            {c.intro && <p className="eyebrow">{c.title}</p>}
            <Faqs faqs={c.faqs} title={c.title} id={c.slug} />
            {c.intro && <p style={{ marginTop: 14, color: 'var(--muted)' }}>{c.intro}</p>}
          </div>
        ))}
      </div>
      <div className="wrap" style={{ paddingBottom: 80 }}><Cta /></div>
    </>
  );
}
