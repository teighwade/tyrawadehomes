import { SOCIAL, GOOGLE_REVIEW } from '../lib/site';

const PATHS = {
  facebook: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8z" />,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></>,
  youtube: <><rect x="2" y="5" width="20" height="14" rx="4" /><path d="m10 9 5 3-5 3z" fill="currentColor" /></>,
  x: <path d="M4 4l16 16M20 4 4 20" />,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" /></>,
  homesmart: <path d="m3 11 9-7 9 7M5 10v10h14V10" />,
  google: <><path d="M20 12a8 8 0 1 1-2.3-5.7" /><path d="M20 12h-8" /></>,
};

export function SocialIcon({ k }) {
  return <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{PATHS[k] || PATHS.homesmart}</svg>;
}

// variant: 'pills' (labels) or 'icons'
export default function Social({ variant = 'pills', review = true }) {
  const items = [...SOCIAL, ...(review ? [{ key: 'google', label: 'Leave a Google review', short: 'Google reviews', href: GOOGLE_REVIEW }] : [])];
  return (
    <ul className={`social social--${variant}`}>
      {items.map((s) => (
        <li key={s.href}>
          <a href={s.href} target="_blank" rel="noopener" aria-label={s.label} title={s.label}>
            <SocialIcon k={s.key} />{variant === 'pills' && <span>{s.label}</span>}{variant === 'round' && <span className="sr-only">{s.label}</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
