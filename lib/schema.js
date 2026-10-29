import { SITE_URL, NAME, PHONE, EMAIL, LICENSE, TEAM, BROKERAGE, NOTARY_PHONE, SOCIAL, AREAS, ALSO_KNOWN_AS } from './site';

export const AGENT_ID = `${SITE_URL}/#agent`;
export const PERSON_ID = `${SITE_URL}/#person`;
export const NOTARY_ID = `${SITE_URL}/#notary`;
const tel = (p) => '+1-' + p;

const areaServed = [
  ...AREAS.map((a) => ({ '@type': 'City', name: `${a.name}, AZ` })),
  { '@type': 'State', name: 'Arizona' },
];

export function baseGraph() {
  return [
    {
      '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: SITE_URL + '/', name: 'Teigh Wade Homes',
      alternateName: ['Tyra Wade Homes', 'Teigh Wade REALTOR®'], publisher: { '@id': AGENT_ID }, inLanguage: 'en-US',
    },
    {
      '@type': 'Person', '@id': PERSON_ID, name: NAME, alternateName: ALSO_KNOWN_AS, jobTitle: 'REALTOR® and Mobile Notary',
      url: SITE_URL + '/about/', telephone: tel(PHONE), email: EMAIL, sameAs: SOCIAL.map((s) => s.href),
      worksFor: { '@id': AGENT_ID },
      hasCredential: [{ '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'Arizona Real Estate Salesperson License', identifier: LICENSE, recognizedBy: { '@type': 'GovernmentOrganization', name: 'Arizona Department of Real Estate' } }],
      knowsAbout: ['Arizona residential real estate', 'Home selling', 'Home buying', 'West Valley real estate', 'Mobile notary', 'Loan signing'],
    },
    {
      '@type': 'RealEstateAgent', '@id': AGENT_ID, name: `${NAME}, REALTOR® | ${TEAM}`, url: SITE_URL + '/',
      telephone: tel(PHONE), email: EMAIL, priceRange: 'Varies',
      founder: { '@id': PERSON_ID }, employee: { '@id': PERSON_ID },
      parentOrganization: { '@type': 'RealEstateAgent', name: BROKERAGE, url: 'https://homesmart.com/' },
      address: { '@type': 'PostalAddress', addressLocality: 'Surprise', addressRegion: 'AZ', addressCountry: 'US' },
      areaServed, sameAs: SOCIAL.map((s) => s.href),
      knowsLanguage: 'en',
    },
  ];
}

export function notaryNode() {
  return {
    '@type': ['ProfessionalService', 'LocalBusiness'], '@id': NOTARY_ID, name: `${NAME} Mobile Notary`, url: SITE_URL + '/mobile-notary/',
    telephone: tel(NOTARY_PHONE), email: EMAIL, priceRange: '$$',
    founder: { '@id': PERSON_ID },
    address: { '@type': 'PostalAddress', addressLocality: 'Surprise', addressRegion: 'AZ', addressCountry: 'US' },
    openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' }],
    areaServed, serviceType: ['Mobile notary', 'Loan signing agent', 'Mobile fingerprinting', 'Wedding officiant'],
  };
}

export const crumbs = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: SITE_URL + c.href })),
});

export const faqNode = (faqs, path) => faqs?.length ? ({
  '@type': 'FAQPage', '@id': `${SITE_URL}${path}#faq`,
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}) : null;

export const graph = (...nodes) => ({ '@context': 'https://schema.org', '@graph': [...baseGraph(), ...nodes.flat().filter(Boolean)] });
