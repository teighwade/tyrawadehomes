// Business facts for Teigh Wade, REALTOR®. Verified against ADRE (license SA709148000, employing broker HomeSmart)
// and her existing websites. Change details here and they update everywhere.
export const SITE_URL = 'https://tyrawadehomes.com';
export const NAME = 'Teigh Wade';
export const TITLE = 'REALTOR®';
export const ALSO_KNOWN_AS = ['Tyra Wade', 'Tyra Woods-Wade', 'The Real T'];
export const PHONE = '480-550-2871';
export const TEL = 'tel:+14805502871';
export const SMS = 'sms:+14805502871';
export const EMAIL = 'tyrawadehomes@gmail.com';
export const NOTARY_PHONE = '833-363-7244';
export const NOTARY_TEL = 'tel:+18333637244';
export const LICENSE = 'SA709148000';
export const TEAM = 'HomeSmart Elite Group';
export const BROKERAGE = 'HomeSmart';
export const BROKERAGE_LICENSE = 'LC506032000';
export const OFFICE = { street: '17505 N 79th Ave, Suite 206', city: 'Glendale', region: 'AZ', postal: '85308', note: 'By appointment' };
export const HOME_BASE = 'Surprise, AZ';

// Home search: IDX Broker. IDX_SEARCH_URL can be set in Vercel once the IDX Broker search page address is confirmed;
// until then the site falls back to the account's own IDX Broker search link (read from the API) or the HomeSmart profile.
export const HOMESMART_PROFILE = 'https://homesmart.com/real-estate-agent/arizona/phoenix/81977-tyra-woods-wade/';

export const SOCIAL = [
  { label: 'Facebook', href: 'https://www.facebook.com/RealtywithRrealT/' },
  { label: 'Instagram', href: 'https://www.instagram.com/2023realt/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@TheRealTRealty' },
  { label: 'X', href: 'https://twitter.com/TheRealTRealty' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tyra-woods-wade-realtor%C2%AE-02839944/' },
];
export const GOOGLE_REVIEW = 'https://g.page/r/CfMESgO6c2n4EAI/review';
export const ENERCHI = 'https://enerchi.me/';

export const AREAS = [
  { slug: 'surprise', name: 'Surprise' },
  { slug: 'waddell', name: 'Waddell' },
  { slug: 'wickenburg', name: 'Wickenburg' },
  { slug: 'glendale', name: 'Glendale' },
  { slug: 'peoria', name: 'Peoria' },
  { slug: 'sun-city', name: 'Sun City' },
  { slug: 'sun-city-west', name: 'Sun City West' },
  { slug: 'el-mirage', name: 'El Mirage' },
  { slug: 'goodyear', name: 'Goodyear' },
  { slug: 'buckeye', name: 'Buckeye' },
  { slug: 'litchfield-park', name: 'Litchfield Park' },
  { slug: 'phoenix', name: 'Phoenix' },
];

export const NAV = [
  { label: 'Sell', href: '/sell-your-home/', children: [
    { label: 'Sell your home', href: '/sell-your-home/' },
    { label: "What's my home worth?", href: '/whats-my-home-worth/' },
    { label: 'Home staging', href: '/home-staging/' },
    { label: 'Home selling checklist', href: '/guides/home-selling-checklist/' },
  ] },
  { label: 'Buy', href: '/buy-a-home/', children: [
    { label: 'Buy a home', href: '/buy-a-home/' },
    { label: 'First-time home buyers', href: '/first-time-home-buyers/' },
    { label: 'Arizona home buying process', href: '/guides/arizona-home-buying-process/' },
    { label: 'Buying in a 55+ community', href: '/guides/buying-in-a-55-plus-community/' },
  ] },
  { label: 'Search homes', href: '/search/' },
  { label: 'My listings', href: '/my-listings/' },
  { label: 'Areas', href: '/areas/', children: [{ label: 'All areas', href: '/areas/' }, ...AREAS.map((a) => ({ label: a.name, href: `/areas/${a.slug}/` }))] },
  { label: 'Notary', href: '/mobile-notary/', children: [
    { label: 'Mobile notary', href: '/mobile-notary/' },
    { label: 'Loan signing agent', href: '/loan-signing-agent/' },
    { label: 'Fingerprinting & more', href: '/fingerprinting-and-more/' },
    { label: 'Wedding officiant', href: '/wedding-officiant/' },
  ] },
  { label: 'About', href: '/about/', children: [
    { label: 'About Teigh', href: '/about/' },
    { label: 'More than a REALTOR®', href: '/more-than-a-realtor/' },
    { label: 'Guides', href: '/guides/' },
    { label: 'FAQ', href: '/faq/' },
    { label: 'Contact', href: '/contact/' },
  ] },
];
