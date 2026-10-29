import { money } from '../lib/idx';
import { PHONE, TEL, SMS, BROKERAGE, TOURS } from '../lib/site';
import { Phone, Chat, Arrow, Pin } from './Icons';

// Big home-page feature for Teigh's newest listing (pulled from IDX Broker, updates automatically).
export default function FeaturedProperty({ l }) {
  if (!l) return null;
  const pics = l.photos?.length ? l.photos : l.photo ? [l.photo] : [];
  const stats = [
    l.beds && { v: l.beds, k: 'Beds' },
    l.baths && { v: l.baths, k: 'Baths' },
    l.sqft && l.sqft < 20000 && { v: l.sqft.toLocaleString('en-US'), k: 'Sq ft' },
    l.acres && (!l.sqft || l.sqft >= 20000) && { v: l.acres, k: 'Acres' },
    l.yearBuilt && { v: l.yearBuilt, k: 'Built' },
  ].filter(Boolean).slice(0, 4);
  const remarks = l.remarks ? (l.remarks.length > 300 ? l.remarks.slice(0, 300).replace(/\s+\S*$/, '') + '…' : l.remarks) : null;
  const label = l.status === 'pending' ? 'Pending' : 'Just listed';
  const tour = TOURS[l.id] || (l.tour && /matterport|iguide|kuula|cloudpano|youtube|vimeo/i.test(l.tour) ? l.tour : null);
  const tourSrc = tour ? tour + (tour.includes('matterport') ? (tour.includes('?') ? '&' : '?') + 'play=0&qs=1&brand=0' : '') : null;
  return (
    <section className="feature" aria-labelledby="feature-title">
      <div className="wrap">
        <div className="feature__head">
          <p className="eyebrow">Featured property</p>
          <span className={`feature__badge feature__badge--${l.status}`}>{label}</span>
        </div>
        <div className="feature__grid">
          <div className="feature__media">
            {pics[0] && <img className="feature__main" src={pics[0]} alt={`${l.street}, ${l.city}, AZ`} fetchPriority="high" />}
            {pics.length > 1 && (
              <div className="feature__thumbs">
                {pics.slice(1, 4).map((p, i) => <img key={p} src={p} alt={`${l.street} photo ${i + 2}`} loading="lazy" />)}
              </div>
            )}
          </div>
          <div className="feature__info">
            {money(l.listPrice || l.price) && <p className="feature__price">{money(l.listPrice || l.price)}</p>}
            <h2 id="feature-title" className="feature__addr">{l.street}</h2>
            <p className="feature__city"><Pin />{[l.city, 'AZ'].join(', ')} {l.zip}{l.subdivision ? ` · ${l.subdivision}` : ''}</p>
            {stats.length > 0 && (
              <dl className="feature__stats">
                {stats.map((s) => <div key={s.k}><dt>{s.k}</dt><dd>{s.v}</dd></div>)}
              </dl>
            )}
            {remarks && <p className="feature__remarks">{remarks}</p>}
            <div className="btn-row">
              {tour && <a className="btn btn--clay" href="#tour">Take the 360° tour</a>}
              {l.url && <a className={`btn ${tour ? 'btn--ghost' : 'btn--clay'}`} href={l.url} rel="noopener">Photos &amp; details <Arrow /></a>}
              <a className="btn btn--ghost" href={SMS}><Chat />Text to tour</a>
            </div>
            <p className="feature__call">Questions? Call or text Teigh at <a href={TEL}>{PHONE}</a>. <a href="/my-listings/">All my listings →</a></p>
            <p className="feature__courtesy">Listed by Teigh Wade, REALTOR®, HomeSmart Elite Group · Brokerage: {BROKERAGE}. Information from ARMLS via IDX, deemed reliable but not guaranteed.</p>
          </div>
        </div>
        {tourSrc && (
          <div className="feature__tour" id="tour">
            <p className="eyebrow">360° virtual tour</p>
            <div className="feature__tour-frame">
              <iframe src={tourSrc} title={`360° virtual tour of ${l.street}, ${l.city}`} loading="lazy" allow="fullscreen; xr-spatial-tracking" allowFullScreen />
            </div>
            <p className="feature__tour-note">Walk through the home from anywhere. Tap the screen to start, and use the dollhouse and floor plan views to see the full layout. <a href={tour} target="_blank" rel="noopener">Open the tour full screen →</a></p>
            <p className="feature__courtesy">3D tour provided by Homes.com, powered by Matterport.</p>
          </div>
        )}
      </div>
    </section>
  );
}
