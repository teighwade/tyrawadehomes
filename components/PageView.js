import { getByPath, titleFor } from '../lib/content';
import { graph, crumbs, faqNode, PERSON_ID, AGENT_ID } from '../lib/schema';
import { SITE_URL, PHONE, TEL, SMS, NOTARY_PHONE, NOTARY_TEL, OG_IMAGE } from '../lib/site';
import { KeyCharm } from './Brand';
import JsonLd from './JsonLd';
import { Phone, Chat, Arrow } from './Icons';

const slugify = (s) => s.toLowerCase().replace(/&amp;|&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export function metaFor(page, fallbackTitle) {
  const title = page?.seoTitle || `${page?.title || fallbackTitle} | Teigh Wade REALTOR®`;
  return {
    title: { absolute: title },
    description: page?.description,
    alternates: { canonical: SITE_URL + page?.path },
    openGraph: { title, description: page?.description, url: SITE_URL + page?.path, type: page?.kind === 'guides' ? 'article' : 'website', siteName: 'Teigh Wade Homes', images: [OG_IMAGE] },
  };
}

export function Crumbs({ items }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      {items.map((c, i) => (
        <span key={c.href} style={{ margin: 0 }}>
          {i > 0 && <span aria-hidden="true">/</span>}
          {i < items.length - 1 ? <a href={c.href}>{c.name}</a> : <span style={{ margin: 0 }} aria-current="page">{c.name}</span>}
        </span>
      ))}
    </nav>
  );
}

export function Faqs({ faqs, title = 'Frequently asked questions', id = 'faq' }) {
  if (!faqs?.length) return null;
  return (
    <section id={id} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>{title}</h2>
      <div className="faq">
        {faqs.map((f, i) => (
          <details key={i} open={i === 0}>
            <summary>{f.q}</summary>
            <div><p>{f.a}</p></div>
          </details>
        ))}
      </div>
    </section>
  );
}

export function Cta({ notary = false }) {
  return (
    <div className="cta">
      <div>
        {!notary && <p className="cta__script"><KeyCharm className="cta__key" />Buying · Selling · Building Dreams</p>}
        <h2>{notary ? 'Need a notary?' : "Let's talk about your move."}</h2>
        <p>{notary ? 'Short notice is fine. Call and tell me what you are signing, how many signers there are and where you are.' : 'Selling, buying or just curious what your home is worth? Call or text me. No pressure, just straight answers.'}</p>
      </div>
      <div className="btn-row">
        {notary
          ? <a className="btn btn--ink" href={NOTARY_TEL}><Phone />{NOTARY_PHONE}</a>
          : <><a className="btn btn--ink" href={TEL}><Phone />Call {PHONE}</a><a className="btn btn--light" href={SMS}><Chat />Text me</a></>}
      </div>
    </div>
  );
}

export default function PageView({ path, crumbsTrail, before = null, after = null, notary = false, extraSchema = [] }) {
  const page = getByPath(path);
  if (!page) return null;
  const trail = crumbsTrail || [{ name: 'Home', href: '/' }, { name: page.title, href: path }];
  const toc = (page.sections || []).map((s) => ({ id: slugify(s.h2), h2: s.h2 }));
  const article = page.kind === 'guides' ? {
    '@type': 'Article', '@id': `${SITE_URL}${path}#article`, headline: page.title, description: page.description,
    author: { '@id': PERSON_ID }, publisher: { '@id': AGENT_ID }, mainEntityOfPage: SITE_URL + path,
    dateModified: page.modified || undefined,
  } : { '@type': 'WebPage', '@id': `${SITE_URL}${path}#page`, url: SITE_URL + path, name: page.title, description: page.description, about: { '@id': AGENT_ID } };
  return (
    <>
      <JsonLd data={graph(article, crumbs(trail), faqNode(page.faqs, path), extraSchema)} />
      <section className="page-hero">
        <div className="wrap">
          <Crumbs items={trail} />
          {page.eyebrow && <p className="eyebrow">{page.eyebrow}</p>}
          <h1>{page.title}</h1>
          {page.summary && <div className="answer"><b>The short answer</b>{page.summary}</div>}
        </div>
      </section>
      <div className="wrap body">
        <article className="prose">
          {before}
          {page.sections?.map((s) => (
            <section key={s.h2} id={slugify(s.h2)}>
              <h2>{s.h2}</h2>
              <div dangerouslySetInnerHTML={{ __html: s.html }} />
            </section>
          ))}
          {after}
          <div style={{ marginTop: 48 }}><Faqs faqs={page.faqs} /></div>
          {page.related?.length > 0 && (
            <section style={{ marginTop: 48 }}>
              <h2>Keep reading</h2>
              <div className="grid grid--2">
                {page.related.filter((r) => titleFor(r) || r === '/contact/').map((r) => (
                  <a key={r} className="card" href={r}><h3 style={{ fontSize: 22 }}>{titleFor(r) || 'Contact Teigh'}</h3><span className="card__go">Read more <Arrow /></span></a>
                ))}
              </div>
            </section>
          )}
        </article>
        <aside className="aside">
          {toc.length > 2 && (
            <nav className="toc" aria-label="On this page">
              <b>On this page</b>
              <ol>{toc.map((t) => <li key={t.id}><a href={`#${t.id}`}>{t.h2}</a></li>)}{page.faqs?.length ? <li><a href="#faq">FAQ</a></li> : null}</ol>
            </nav>
          )}
          <div className="aside__card">
            <h3>{notary ? 'Book a notary' : 'Talk with Teigh'}</h3>
            <p>{notary ? 'Mobile notary 24/7, by appointment. I come to you.' : 'Call or text for a no-obligation conversation about buying or selling.'}</p>
            {notary
              ? <a className="btn btn--clay" href={NOTARY_TEL}><Phone />{NOTARY_PHONE}</a>
              : <><a className="btn btn--clay" href={TEL}><Phone />{PHONE}</a><a className="btn btn--light" href={SMS}><Chat />Text Teigh</a></>}
          </div>
        </aside>
      </div>
      <div className="wrap" style={{ paddingBottom: 80 }}><Cta notary={notary} /></div>
    </>
  );
}
