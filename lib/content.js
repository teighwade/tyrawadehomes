import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.join(process.cwd(), 'content');

function readDir(dir) {
  const full = path.join(ROOT, dir);
  if (!fs.existsSync(full)) return [];
  return fs.readdirSync(full).filter((f) => f.endsWith('.json')).map((f) => {
    const data = JSON.parse(fs.readFileSync(path.join(full, f), 'utf8'));
    return { ...data, key: f.replace(/\.json$/, ''), kind: dir };
  });
}

let cache;
function all() {
  if (cache) return cache;
  const pages = readDir('pages');
  const areas = readDir('areas');
  const guides = readDir('guides');
  const faq = readDir('faq');
  const byPath = new Map();
  for (const p of [...pages, ...areas, ...guides]) byPath.set(p.path, p);
  cache = { pages, areas, guides, faq, byPath };
  return cache;
}

export const getByPath = (p) => all().byPath.get(p);
export const allContentPaths = () => [...all().byPath.keys()];
export const getAreas = () => all().areas;
export const getGuides = () => all().guides;
export const getFaqCategories = () => {
  const order = ['real-estate', 'notary'];
  return all().faq.sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));
};
export const titleFor = (p) => getByPath(p)?.title;

export function wordCount(page) {
  const strip = (s) => (s || '').replace(/<[^>]+>/g, ' ');
  const text = [page.summary, ...(page.sections || []).map((s) => s.h2 + ' ' + strip(s.html)), ...(page.faqs || []).map((f) => f.q + ' ' + f.a)].join(' ');
  return text.split(/\s+/).filter(Boolean).length;
}
