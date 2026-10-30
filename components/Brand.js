import { PHONE, TEL, TEAM, TAGLINE, BRAND_DOMAIN } from '../lib/site';
import { Phone, Globe } from './Icons';

// Teigh Wade rose-gold logo on a transparent background.
// `dark` = the version with full sparkle glints, made for dark backgrounds.
export function Logo({ dark = false, className = '', sizes = '160px', priority = false, alt = 'Teigh Wade, REALTOR®' }) {
  const base = dark ? '/brand/teigh-wade-logo-dark' : '/brand/teigh-wade-logo';
  const widths = dark ? [640, 1000] : [320, 640, 1000];
  return (
    <img
      className={`logo ${className}`.trim()}
      src={`${base}-640.webp`}
      srcSet={widths.map((w) => `${base}-${w}.webp ${w}w`).join(', ')}
      sizes={sizes}
      width="1347"
      height="778"
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
    />
  );
}

export function KeyCharm({ className = '' }) {
  return <img className={`key-charm ${className}`.trim()} src="/brand/key-charm-201.webp" width="201" height="245" alt="" aria-hidden="true" loading="lazy" decoding="async" />;
}

const HeartMark = () => (
  <svg className="brandband__heart" viewBox="0 0 32 28" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="roseHeart" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#f6dccb" /><stop offset=".55" stopColor="#d39a7c" /><stop offset="1" stopColor="#a96c50" />
      </linearGradient>
    </defs>
    <path fill="url(#roseHeart)" d="M16 27.2 13.7 25C5.6 17.7.3 12.9.3 7.3.3 3.4 3.4.3 7.3.3c2.2 0 4.4 1 5.8 2.6L16 6l2.9-3.1C20.3 1.3 22.5.3 24.7.3c3.9 0 7 3.1 7 7 0 5.6-5.3 10.4-13.4 17.7z" />
  </svg>
);

// The back of Teigh's T-shirt, rebuilt for the web: script tagline and desert
// scene on top, then name, REALTOR®, phone, web address and brokerage.
// `card` renders it as a rounded panel for use inside a page's text column.
export function BrandBand({ card = false, headingLevel = 2 }) {
  const H = `h${headingLevel}`;
  const inner = (
    <>
      <div className="brandband__top">
        <H className="brandband__script">
          {TAGLINE.map((w, i) => <span key={w}>{w}{i < TAGLINE.length - 1 ? ' ' : ''}</span>)}
        </H>
        <img className="brandband__scene" src="/brand/desert-scene-740.webp" width="740" height="813" alt="Rose-gold drawing of a house, a saguaro cactus and desert mountains" loading="lazy" decoding="async" />
      </div>
      <div className="brandband__id">
        <div className="brandband__rule"><HeartMark /></div>
        <p className="brandband__name">Teigh Wade</p>
        <p className="brandband__title"><span>REALTOR®</span></p>
        <ul className="brandband__contact">
          <li><a href={TEL}><span className="brandband__ico"><Phone /></span>{PHONE}</a></li>
          <li><a href="/"><span className="brandband__ico"><Globe /></span>{BRAND_DOMAIN}</a></li>
        </ul>
        <img className="brandband__broker" src="/images/homesmart-elite-group-light.png" width="560" height="360" alt={`${TEAM}, HomeSmart`} loading="lazy" decoding="async" />
      </div>
    </>
  );
  if (card) return <div className="brandband brandband--card">{inner}</div>;
  return (
    <section className="brandband">
      <div className="wrap">{inner}</div>
    </section>
  );
}
