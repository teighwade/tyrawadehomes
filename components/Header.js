import { NAV, PHONE, TEL, SMS, NOTARY_PHONE, NOTARY_TEL, TEAM, EMAIL } from '../lib/site';
import { Mark, Phone, Chat } from './Icons';

export default function Header() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <div className="topbar">
        <div className="wrap">
          <span>REALTOR® · {TEAM} · <span className="topbar__hide">Surprise &amp; the West Valley</span></span>
          <span>Call or text <a href={TEL}>{PHONE}</a> <span className="topbar__hide">· <span className="topbar__note">Mobile notary 24/7</span> <a href={NOTARY_TEL}>{NOTARY_PHONE}</a></span></span>
        </div>
      </div>
      <header className="header">
        <div className="wrap">
          <a href="/" className="brand" aria-label="Teigh Wade, REALTOR®: home">
            <Mark />
            <span>
              <span className="brand__name">Teigh Wade</span>
              <span className="brand__sub">REALTOR® · Mobile Notary</span>
            </span>
          </a>
          <nav aria-label="Main">
            <ul className="nav">
              {NAV.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                  {item.children && (
                    <ul className="sub">
                      {item.children.map((c) => <li key={c.href + c.label}><a href={c.href}>{c.label}</a></li>)}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <a href={TEL} className="btn btn--clay header__cta"><Phone />{PHONE}</a>
          <details className="mnav">
            <summary aria-label="Open menu">Menu</summary>
            <div className="mnav__panel">
              {NAV.map((item) => (
                <div className="mnav__group" key={item.label}>
                  <a className="mnav__top" href={item.href}>{item.label}</a>
                  {item.children?.filter((c) => c.href !== item.href).map((c) => <a key={c.href + c.label} href={c.href}>{c.label}</a>)}
                </div>
              ))}
              <div className="mnav__cta">
                <a className="btn btn--clay" href={TEL}><Phone />Call {PHONE}</a>
                <a className="btn btn--ghost" href={SMS}><Chat />Text Teigh</a>
                <a className="btn btn--ghost" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
            </div>
          </details>
        </div>
      </header>
    </>
  );
}
