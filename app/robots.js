import { SITE_URL } from '../lib/site';

export default function robots() {
  if (process.env.SITE_LIVE !== 'true') return { rules: [{ userAgent: '*', disallow: '/' }] };
  return { rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }], sitemap: `${SITE_URL}/sitemap.xml`, host: SITE_URL };
}
