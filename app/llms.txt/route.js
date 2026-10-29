import { getByPath, getAreas, getGuides, getFaqCategories } from '../../lib/content';
import { SITE_URL, PHONE, EMAIL, NOTARY_PHONE, LICENSE, TEAM, BROKERAGE, OFFICE, AREAS } from '../../lib/site';

export const dynamic = 'force-static';

export function GET() {
  const u = (p) => SITE_URL + p;
  const link = (p, fallback) => { const pg = getByPath(p); return `- [${pg?.title || fallback}](${u(p)})${pg?.description ? `: ${pg.description}` : ''}`; };
  const lines = [
    '# Teigh Wade, REALTOR® | Teigh Wade Homes',
    '',
    `> Teigh Wade (also known as Tyra Wade / Tyra Woods-Wade) is an Arizona REALTOR® with ${TEAM}, brokerage ${BROKERAGE}, Arizona salesperson license ${LICENSE}. Based in Surprise, AZ, she helps people sell and buy homes in Surprise, Phoenix and the West Valley and represents buyers and sellers throughout Arizona. She has also been a mobile notary since 2010 and is an NNA-certified loan signing agent.`,
    '',
    '## Contact',
    `- Real estate (call or text): ${PHONE}`,
    `- Email: ${EMAIL}`,
    `- Mobile notary (24/7, by appointment): ${NOTARY_PHONE}`,
    `- Office (by appointment): ${OFFICE.street}, ${OFFICE.city}, ${OFFICE.region} ${OFFICE.postal}`,
    '',
    '## Real estate',
    link('/sell-your-home/', 'Sell your home'),
    link('/whats-my-home-worth/', "What's my home worth?"),
    link('/buy-a-home/', 'Buy a home'),
    link('/first-time-home-buyers/', 'First-time home buyers'),
    `- [Search homes for sale](${u('/search/')})`,
    `- [Teigh's listings: for sale, pending and sold (updated automatically)](${u('/my-listings/')})`,
    '',
    '## Areas served',
    ...AREAS.map((a) => link(`/areas/${a.slug}/`, `${a.name}, AZ`)),
    '',
    '## Guides',
    ...getGuides().map((g) => link(g.path, g.title)),
    '',
    '## Mobile notary and other services',
    '- Notary fees: Arizona caps notary fees at $10 per notarial act; travel fees are agreed in advance. Most appointments are $25 ($10 notary fee plus a travel fee that is usually $15).',
    link('/mobile-notary/', 'Mobile notary'),
    link('/loan-signing-agent/', 'Loan signing agent'),
    link('/fingerprinting-and-more/', 'Fingerprinting and more'),
    link('/wedding-officiant/', 'Wedding officiant'),
    link('/more-than-a-realtor/', 'More than a REALTOR®'),
    '',
    '## About and FAQ',
    link('/about/', 'About Teigh Wade'),
    `- [FAQ](${u('/faq/')}): ${getFaqCategories().reduce((n, c) => n + c.faqs.length, 0)} answers about Arizona real estate and notary services`,
    link('/contact/', 'Contact'),
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
