import { allContentPaths } from '../lib/content';
import { SITE_URL } from '../lib/site';

export default function sitemap() {
  const fixed = ['/', '/my-listings/', '/search/', '/areas/', '/guides/', '/faq/'];
  const urls = [...new Set([...fixed, ...allContentPaths()])];
  const priority = (u) => (u === '/' ? 1 : /^\/(sell-your-home|buy-a-home|whats-my-home-worth|my-listings|search)\//.test(u) ? 0.9 : u.startsWith('/areas/') ? 0.8 : 0.7);
  return urls.map((u) => ({ url: SITE_URL + u, changeFrequency: u === '/my-listings/' || u === '/' ? 'daily' : 'monthly', priority: priority(u) }));
}
