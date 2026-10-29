import { PHONE, TEL, SMS, NOTARY_PHONE, NOTARY_TEL, AREAS, TEAM, SITE_URL } from '../lib/site';
import { getListings } from '../lib/idx';
import { getGuides } from '../lib/content';
import { graph, notaryNode } from '../lib/schema';
import JsonLd from '../components/JsonLd';
import { ListingCard } from '../components/Listings';
import FeaturedProperty from '../components/FeaturedProperty';
import { Cta } from '../components/PageView';
import Social from '../components/Social';
import { Phone, Chat, Home as HomeIcon, Key, Search, Tag, Pen, Check, Pin, Clock, Rings, Heart, Arrow, Sparkle } from '../components/Icons';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Teigh Wade, REALTOR® | Surprise & West Valley Real Estate' },
  description: 'Sell or buy a home in Surprise, Phoenix and the West Valley with Teigh Wade, REALTOR® at HomeSmart Elite Group. Plus mobile notary and loan signings 24/7.',
  alternates: { canonical: SITE_URL + '/' },
};

const HOME_FAQ = [
  { q: 'Who is Teigh Wade?', a: 'Teigh Wade is an Arizona REALTOR® with HomeSmart Elite Group (brokerage: HomeSmart), license SA709148000. She is a Phoenix native based in Surprise who helps people sell and buy homes across the West Valley, and she has also been a mobile notary since 2010.' },
  { q: 'What areas does Teigh serve?', a: 'Teigh works across Surprise, Waddell, Wickenburg, Glendale, Peoria, Sun City, Sun City West, El Mirage, Goodyear, Buckeye, Litchfield Park and Phoenix, and represents buyers and sellers throughout Arizona.' },
  { q: 'How do I find out what my home is worth?', a: `Call or text Teigh at ${PHONE} for a comparative market analysis (CMA). She looks at recent nearby sales, your home's condition and updates, and current competition, then walks you through a pricing range in person or by phone, with no obligation to list.` },
  { q: 'Does Teigh offer mobile notary services?', a: `Yes. Teigh is a mobile notary and NNA-certified signing agent who travels to you 24 hours a day, 7 days a week by appointment. Most appointments are $25 (the $10 Arizona notary fee plus a travel fee that's usually $15). Call ${NOTARY_PHONE}.` },
];

export default async function HomePage() {
  const { active, pending, sold, featured } = await getListings();
  const showcase = [...active, ...pending, ...sold].filter((l) => l.id !== featured?.id).slice(0, 6);
  const guides = getGuides();
  return (
    <>
      <JsonLd data={graph(notaryNode(), { '@type': 'FAQPage', '@id': `${SITE_URL}/#faq`, mainEntity: HOME_FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) })} />
      <section className="hero">
        <div className="wrap">
          <div>
            <p className="eyebrow">REALTOR® · {TEAM}</p>
            <h1>West Valley real estate, with <em>THE Real T</em>.</h1>
            <p className="hero__lead">I'm Teigh Wade, a Phoenix native and Surprise-based REALTOR® who helps people sell and buy homes across the West Valley. “Getting the sale” isn't my mission. Helping you through every step of real estate is.</p>
            <div className="btn-row">
              <a className="btn btn--clay" href="/whats-my-home-worth/"><Tag />What's my home worth?</a>
              <a className="btn btn--ghost" href="/search/"><Search />Search homes</a>
            </div>
            <div className="hero__meta">
              <span><Phone /><a href={TEL}>{PHONE}</a> call or text</span>
              <span><Pin />Surprise, Phoenix &amp; the West Valley</span>
              <span><Check />AZ license SA709148000</span>
            </div>
          </div>
          <div>
            <div className="portrait">
              <img src="/images/teigh-wade-headshot.jpg" alt="Teigh Wade, REALTOR® with HomeSmart Elite Group" width="584" height="730" fetchPriority="high" />
              <div className="portrait__badge"><strong>Teigh Wade, REALTOR®</strong>HomeSmart Elite Group · Mobile notary since 2010</div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProperty l={featured} />

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">How I can help</p>
            <h2>Selling, buying, or somewhere in between</h2>
            <p>Mobile consultations at your kitchen table, honest pricing, and someone who answers the phone. That's the job.</p>
          </div>
          <div className="grid grid--3">
            <a className="card" href="/sell-your-home/"><span className="card__icon"><HomeIcon /></span><h3>Sell your home</h3><p>Pricing strategy, prep and staging tips, marketing, showings and negotiation through closing.</p><span className="card__go">Selling with Teigh <Arrow /></span></a>
            <a className="card" href="/buy-a-home/"><span className="card__icon"><Key /></span><h3>Buy a home</h3><p>Pre-approval referrals, tours, strong offers, inspections and a calm path to the closing table.</p><span className="card__go">Buying with Teigh <Arrow /></span></a>
            <a className="card" href="/whats-my-home-worth/"><span className="card__icon"><Tag /></span><h3>Home value</h3><p>A real comparative market analysis, not an algorithm guess, for your specific home.</p><span className="card__go">Get your number <Arrow /></span></a>
            <a className="card" href="/first-time-home-buyers/"><span className="card__icon"><Check /></span><h3>First-time buyers</h3><p>Step-by-step help, Arizona down payment assistance basics and no question too small.</p><span className="card__go">Start here <Arrow /></span></a>
            <a className="card" href="/home-staging/"><span className="card__icon"><Sparkle /></span><h3>Home staging</h3><p>Consultations, hands-on styling or full staging with my own furniture and decor. Included when you list with me.</p><span className="card__go">Staging services <Arrow /></span></a>
            <a className="card" href="/mobile-notary/"><span className="card__icon"><Pen /></span><h3>Mobile notary</h3><p>Loan signings and everyday notarizations at your home, office or care facility, 24/7 by appointment.</p><span className="card__go">Notary services <Arrow /></span></a>
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="wrap">
          <div className="section-head" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'end', gap: 16, maxWidth: 'none' }}>
            <div style={{ maxWidth: 680 }}>
              <p className="eyebrow">My listings</p>
              <h2>For sale, pending and recently sold</h2>
              <p>Pulled straight from the MLS and updated automatically.</p>
            </div>
            <a className="btn btn--ink" href="/my-listings/">See all my listings</a>
          </div>
          {showcase.length
            ? <div className="grid grid--3">{showcase.map((l) => <ListingCard key={l.id} l={l} />)}</div>
            : <div className="empty"><p style={{ margin: 0 }}>My current, pending and sold listings appear here automatically. In the meantime, <a href="/search/">search all homes for sale</a> or call <a href={TEL}>{PHONE}</a>.</p></div>}
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Meet Teigh</p>
            <blockquote className="quote">“Getting the sale” is NOT my mission. Helping people navigate through every process of real estate is.</blockquote>
            <p>I was born in Phoenix, have lived most of my life in the West Valley, and now call Surprise home. I wanted to work in real estate since the early 2000s, and I still feel privileged to help people make a move that matters.</p>
            <ul className="ticks">
              <li><Check />Licensed REALTOR® with {TEAM}, brokerage HomeSmart</li>
              <li><Check />Mobile notary since 2010 and NNA-certified signing agent</li>
              <li><Check />A trusted network for lenders, title, inspectors and more</li>
            </ul>
            <div className="btn-row"><a className="btn btn--ghost" href="/about/">More about me</a><a className="btn btn--clay" href={SMS}><Chat />Text Teigh</a></div>
          </div>
          <div style={{ display: 'grid', placeItems: 'center' }}>
            <img src="/images/homesmart-elite-group.png" alt="HomeSmart Elite Group" width="560" height="360" style={{ width: 'min(100%, 460px)', height: 'auto' }} loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Areas I serve</p>
            <h2>Home turf: Surprise and the West Valley</h2>
            <p>Local guides to each city: home styles, well-known communities, HOAs and what to check before you buy or sell.</p>
          </div>
          <ul className="chips">
            {AREAS.map((a) => <li key={a.slug}><a href={`/areas/${a.slug}/`}>{a.name}</a></li>)}
            <li><a href="/areas/">All areas →</a></li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="notary-band">
            <div>
              <p className="eyebrow" style={{ color: 'var(--gold)' }}>Mobile notary · 24/7</p>
              <h2>Need something notarized? I'll come to you.</h2>
              <p>Homes, offices, hospitals, care facilities or a convenient meeting spot, anywhere in the West Valley and statewide. Loan signings, real estate, medical, family and business documents. Short notice welcome.</p>
              <div className="btn-row" style={{ marginTop: 22 }}>
                <a className="btn btn--clay" href={NOTARY_TEL}><Phone />{NOTARY_PHONE}</a>
                <a className="btn btn--light" href="/mobile-notary/">Notary services</a>
              </div>
            </div>
            <div>
              <div className="price">$25<small>Most services: $10 Arizona notary fee + travel (usually $15)</small></div>
              <ul className="ticks" style={{ marginTop: 22 }}>
                <li><Clock />24 hours a day, 7 days a week</li>
                <li><Pen />NNA-certified loan signing agent</li>
                <li><Rings />Certified wedding officiant</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {guides.length > 0 && (
        <section className="section section--sand">
          <div className="wrap">
            <div className="section-head"><p className="eyebrow">Guides</p><h2>Straight answers for Arizona buyers and sellers</h2></div>
            <div className="grid grid--4">
              {guides.map((g) => <a key={g.path} className="card" href={g.path}><h3 style={{ fontSize: 23 }}>{g.title}</h3><p>{g.description}</p><span className="card__go">Read the guide <Arrow /></span></a>)}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="wrap split" style={{ alignItems: 'start' }}>
          <div>
            <p className="eyebrow">More than a REALTOR®</p>
            <h2>The care I bring comes from everything I do</h2>
            <p>Besides real estate and notary work, I'm a licensed massage therapist, licensed insurance producer, Reiki Master/Teacher and hypnotherapist, and I build websites too. It all comes down to the same thing: taking care of people.</p>
            <a className="btn btn--ghost" href="/more-than-a-realtor/"><Heart />More than a REALTOR®</a>
          </div>
          <div>
            <h2 style={{ fontSize: 32 }}>Quick answers</h2>
            <div className="faq">
              {HOME_FAQ.map((f, i) => <details key={i} open={i === 0}><summary>{f.q}</summary><div><p>{f.a}</p></div></details>)}
            </div>
            <p style={{ marginTop: 18 }}><a href="/faq/">See all FAQs →</a></p>
          </div>
        </div>
      </section>

      <div className="wrap" style={{ paddingTop: 8 }}>
        <div className="social-strip">
          <p><b>Follow along</b> Find me on social media</p>
          <Social variant="round" />
        </div>
      </div>

      <div className="wrap" style={{ padding: '40px var(--gutter) 80px' }}><Cta /></div>
    </>
  );
}
