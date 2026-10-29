import { money } from '../lib/idx';

const LABEL = { active: 'For sale', pending: 'Pending', sold: 'Sold' };

export function ListingCard({ l }) {
  const meta = [l.beds && `${l.beds} bd`, l.baths && `${l.baths} ba`, l.sqft && `${l.sqft.toLocaleString('en-US')} sq ft`].filter(Boolean).join(' · ');
  const Tag = l.url ? 'a' : 'div';
  return (
    <Tag className="listing" {...(l.url ? { href: l.url, rel: 'noopener' } : {})}>
      <div className="listing__img">
        {l.photo && <img src={l.photo} alt={`${l.street}, ${l.city}`} loading="lazy" />}
        <span className={`listing__badge listing__badge--${l.status}`}>{LABEL[l.status]}</span>
      </div>
      <div className="listing__body">
        {money(l.price) && <div className="listing__price">{l.status === 'sold' ? 'Sold ' : ''}{money(l.price)}</div>}
        <div className="listing__addr">{l.street}</div>
        <div className="listing__meta">{[l.city, l.state].filter(Boolean).join(', ')} {l.zip}</div>
        {meta && <div className="listing__meta">{meta}</div>}
      </div>
    </Tag>
  );
}

export function ListingGrid({ items, empty }) {
  if (!items?.length) return <div className="empty">{empty}</div>;
  return <div className="grid grid--3">{items.map((l) => <ListingCard key={l.id} l={l} />)}</div>;
}

export const IdxDisclaimer = () => (
  <p className="disclaimer">Listing information is provided through IDX Broker from the Arizona Regional Multiple Listing Service (ARMLS) and is deemed reliable but not guaranteed. Listings shown may include homes where Teigh represented the seller or the buyer. Listings updated automatically.</p>
);
