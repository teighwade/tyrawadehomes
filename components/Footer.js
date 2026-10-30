import { NAME, PHONE, TEL, SMS, EMAIL, NOTARY_PHONE, NOTARY_TEL, LICENSE, TEAM, BROKERAGE, BROKERAGE_LICENSE, AREAS } from '../lib/site';
import { EqualHousing, Phone, Chat } from './Icons';
import Social from './Social';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="/" className="brand brand--footer" aria-label="Teigh Wade, REALTOR®: home"><img className="brand__logo" src="/images/teigh-wade-logo.webp" alt="Teigh Wade, REALTOR®" width="900" height="368" loading="lazy" /></a>
            <p className="footer__team">{TEAM}</p>
            <p>Listing and buyer representation across Surprise, Phoenix and the West Valley, plus mobile notary and loan signing services statewide.</p>
            <ul>
              <li><a href={TEL}>Call {PHONE}</a> · <a href={SMS}>Text</a></li>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            </ul>
            <Social variant="icons" />
          </div>
          <div>
            <h3>Real estate</h3>
            <ul>
              <li><a href="/sell-your-home/">Sell your home</a></li>
              <li><a href="/whats-my-home-worth/">What's my home worth?</a></li>
              <li><a href="/home-staging/">Home staging</a></li>
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
            <p className="footer__credit">© {year} Teigh Wade Homes. All rights reserved. This custom <a href="https://viwebmedia.com/" rel="noopener" target="_blank">website</a> was built and is managed by <a href="https://checkoutoursite.com/" rel="noopener" target="_blank">Teigh</a>. <a href="tel:+14805502871">480-550-2871</a></p>
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
