// Runs automatically before every build (see "prebuild" in package.json).
// Builds public/sitemap.xml from the blog JSON files, so new blogs are included without manual work.
import { readFileSync, writeFileSync } from 'node:fs';

const SITE = 'https://framedbyabard.com'; // <- change if your domain differs
const read = (f) => JSON.parse(readFileSync(new URL(`../src/data/${f}`, import.meta.url), 'utf8'));

const groups = [
  ['/travel',          'travel_blogs.json'],
  ['/unesco',          'unesco_blogs.json'],
  ['/wildlife',        'wildlife_blogs.json'],
  ['/wildlife-travel', 'wildlife_travel_blogs.json'],
  ['/iucn',            'iucn_blogs.json'],
];

const today = new Date().toISOString().slice(0, 10);
const urls = [
  { loc: '/',         priority: '1.0' },
  { loc: '/heritage', priority: '0.8' },
  { loc: '/wildlife', priority: '0.8' },
];
for (const [prefix, file] of groups) {
  for (const id of Object.keys(read(file))) urls.push({ loc: `${prefix}/${id}`, priority: '0.6' });
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${SITE}${u.loc}</loc><lastmod>${today}</lastmod><priority>${u.priority}</priority></url>`).join('\n')}
</urlset>
`;
writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml);
console.log(`sitemap.xml written with ${urls.length} URLs`);
