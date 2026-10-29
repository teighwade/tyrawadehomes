import { NAME, PHONE, TEL, SMS, EMAIL, NOTARY_PHONE, NOTARY_TEL, LICENSE, TEAM, BROKERAGE, BROKERAGE_LICENSE, OFFICE, SOCIAL, GOOGLE_REVIEW, AREAS } from '../lib/site';
import { Mark, EqualHousing, Phone, Chat } from './Icons';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="/" className="brand" style={{ marginBottom: 16 }}><Mark /><span><span className="brand__name">Teigh Wade</span><span className="brand__sub" style={{ color: '#aab0bc' }}>REALTOR® · {TEAM}</span></span></a>
            <p>Listing and buyer representation across Surprise, Phoenix and the West Valley, plus mobile notary and loan signing services statewide.</p>
            <ul>
              <li><a href={TEL}>Call {PHONE}</a> · <a href={SMS}>Text</a></li>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li>Notary line: <a href={NOTARY_TEL}>{NOTARY_PHONE}</a> (24/7)</li>
              <li>{OFFICE.street}, {OFFICE.city}, {OFFICE.region} {OFFICE.postal} ({OFFICE.note.toLowerCase()})</li>
            </ul>
            <div className="social">
              {SOCIAL.map((s) => <a key={s.label} href={s.href} rel="noopener" target="_blank">{s.label}</a>)}
              <a href={GOOGLE_REVIEW} rel="noopener" target="_blank">Leave a Google review</a>
            </div>
          </div>
          <div>
            <h3>Real estate</h3>
            <ul>
              <li><a href="/sell-your-home/">Sell your home</a></li>
              <li><a href="/whats-my-home-worth/">What's my home worth?</a></li>
              <li><a href="/buy-a-home/">Buy a home</a></li>
              <li><a href="/first-time-home-buyers/">First-time buyers</a></li>
              <li><a href="/search/">Search homes</a></li>
              <li><a href="/my-listings/">My listings &amp; sold homes</a></li>
              <li><a href="/guides/">Guides</a></li>
              <li><a href="/faq/">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3>Areas</h3>
            <ul>
              {AREAS.map((a) => <li key={a.slug}><a href={`/areas/${a.slug}/`}>{a.name}</a></li>)}
            </ul>
          </div>
          <div>
            <h3>Notary &amp; more</h3>
            <ul>
              <li><a href="/mobile-notary/">Mobile notary</a></li>
              <li><a href="/loan-signing-agent/">Loan signing agent</a></li>
              <li><a href="/fingerprinting-and-more/">Fingerprinting &amp; more</a></li>
              <li><a href="/wedding-officiant/">Wedding officiant</a></li>
              <li><a href="/more-than-a-realtor/">More than a REALTOR®</a></li>
              <li><a href="/about/">About Teigh</a></li>
              <li><a href="/contact/">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__legal">
          <EqualHousing />
          <div>
            <p><strong style={{ color: '#e8e9ec' }}>{NAME}, REALTOR®</strong>, Arizona real estate salesperson license {LICENSE}. {TEAM}. Brokerage: <strong style={{ color: '#e8e9ec' }}>{BROKERAGE}</strong> (Arizona license {BROKERAGE_LICENSE}).</p>
            <p>Equal Housing Opportunity. Teigh is committed to the Fair Housing Act and serves all clients without regard to race, color, religion, sex, disability, familial status or national origin. REALTOR® is a federally registered collective membership mark identifying real estate professionals who are members of the National Association of REALTORS®.</p>
            <p>Information on this site is general and isn't legal, tax or lending advice. Listing information is deemed reliable but not guaranteed. Notary services are separate from real estate brokerage services.</p>
            <p className="footer__credit">© {year} Teigh Wade Homes. All rights reserved. Website created by Visibly Online.</p>
          </div>
        </div>
      </div>
      <div className="mobile-bar">
        <a href={TEL}><Phone />Call</a>
        <a href={SMS}><Chat />Text Teigh</a>
      </div>
    </footer>
  );
}
