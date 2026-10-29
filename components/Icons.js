const P = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, className: 'icon' };
export const Phone = () => <svg {...P}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>;
export const Chat = () => <svg {...P}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
export const Mail = () => <svg {...P}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
export const Check = () => <svg {...P}><path d="M20 6 9 17l-5-5" /></svg>;
export const Home = () => <svg {...P}><path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z" /></svg>;
export const Key = () => <svg {...P}><circle cx="7.5" cy="15.5" r="4.5" /><path d="m10.7 12.3 9.3-9.3M17 6l3 3M15 8l2 2" /></svg>;
export const Search = () => <svg {...P}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>;
export const Tag = () => <svg {...P}><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z" /><circle cx="7.5" cy="7.5" r="1.5" /></svg>;
export const Pen = () => <svg {...P}><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></svg>;
export const Pin = () => <svg {...P}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>;
export const Clock = () => <svg {...P}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>;
export const Heart = () => <svg {...P}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" /></svg>;
export const Rings = () => <svg {...P}><circle cx="9" cy="14" r="6" /><circle cx="15" cy="14" r="6" /><path d="m9 4 3-2 3 2" /></svg>;
export const Book = () => <svg {...P}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z" /><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5" /></svg>;
export const Sparkle = () => <svg {...P}><path d="M12 3l1.8 4.9L19 9.7l-5.2 1.8L12 16.5l-1.8-5L5 9.7l5.2-1.8z" /><path d="M19 15l.7 1.8 1.8.7-1.8.7L19 20l-.7-1.8-1.8-.7 1.8-.7z" /></svg>;
export const Arrow = () => <svg {...P}><path d="M5 12h14M13 5l7 7-7 7" /></svg>;

// Equal Housing Opportunity mark (house with equals sign)
export const EqualHousing = () => (
  <svg viewBox="0 0 48 48" fill="currentColor" aria-label="Equal Housing Opportunity" role="img">
    <path d="M24 4 3 18v4h4v20h34V22h4v-4zm11 34H13V20.5L24 12l11 8.5z" />
    <rect x="17" y="24" width="14" height="3.4" /><rect x="17" y="30" width="14" height="3.4" />
  </svg>
);

// Monogram mark: a T inside an arch (the brand's "Real T")
export const Mark = ({ className = 'brand__mark' }) => (
  <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
    <path d="M6 44V22a18 18 0 0 1 36 0v22z" fill="#a8192e" />
    <path d="M15 20h18M24 20v18" stroke="#fffdf9" strokeWidth="3.6" strokeLinecap="round" />
    <path d="M12 44h24" stroke="#c4a062" strokeWidth="2" />
  </svg>
);
