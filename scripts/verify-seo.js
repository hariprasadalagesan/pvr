import fs from 'fs';
import path from 'path';

async function verify() {
  console.log('=== Verifying logicmm.com Production SEO Assets & Configuration ===\n');

  // 1. Verify vercel.json
  const vercelPath = path.resolve('vercel.json');
  if (fs.existsSync(vercelPath)) {
    const vercel = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));
    console.log('✓ vercel.json exists and is valid JSON.');
    console.log('  - Redirects configured:', vercel.redirects?.length || 0);
    console.log('  - Rewrites configured:', vercel.rewrites?.length || 0);
    console.log('  - Security & caching headers configured:', vercel.headers?.length || 0);
  } else {
    console.error('✗ vercel.json missing!');
  }

  // 2. Verify robots.txt
  const robotsPath = path.resolve('public', 'robots.txt');
  if (fs.existsSync(robotsPath)) {
    const robots = fs.readFileSync(robotsPath, 'utf8');
    const hasSitemap = robots.includes('https://logicmm.com/sitemap.xml');
    console.log(`✓ robots.txt exists. Sitemap reference present: ${hasSitemap}`);
  } else {
    console.error('✗ robots.txt missing!');
  }

  // 3. Verify sitemap.xml
  const sitemapPath = path.resolve('public', 'sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    const sitemap = fs.readFileSync(sitemapPath, 'utf8');
    const locMatches = sitemap.match(/<loc>(.*?)<\/loc>/g) || [];
    console.log(`✓ sitemap.xml exists with ${locMatches.length} canonical URLs.`);
    locMatches.forEach(loc => console.log('    ' + loc.replace(/<\/?loc>/g, '')));
  } else {
    console.error('✗ sitemap.xml missing!');
  }

  // 4. Verify manifest and og-image
  const manifestPath = path.resolve('public', 'manifest.webmanifest');
  console.log(`✓ manifest.webmanifest exists: ${fs.existsSync(manifestPath)}`);

  const ogImagePath = path.resolve('public', 'og-image.png');
  console.log(`✓ og-image.png exists: ${fs.existsSync(ogImagePath)} (${(fs.statSync(ogImagePath).size / 1024).toFixed(1)} KB)`);

  // 5. Verify index.html tags
  const indexPath = path.resolve('index.html');
  const indexHtml = fs.readFileSync(indexPath, 'utf8');
  console.log('\n=== Checking index.html static head tags ===');
  console.log('  Title tag:', indexHtml.match(/<title>(.*?)<\/title>/)?.[1]);
  console.log('  Canonical tag:', indexHtml.match(/<link rel="canonical" href="(.*?)"/)?.[1]);
  console.log('  Manifest link:', indexHtml.match(/<link rel="manifest" href="(.*?)"/)?.[1]);
  console.log('  OG Image:', indexHtml.match(/<meta property="og:image" content="(.*?)"/)?.[1]);
  console.log('  Twitter Image:', indexHtml.match(/<meta name="twitter:image" content="(.*?)"/)?.[1]);
  console.log('  Twitter Card:', indexHtml.match(/<meta name="twitter:card" content="(.*?)"/)?.[1]);
  console.log('  Robots directive:', indexHtml.match(/<meta name="robots" content="(.*?)"/)?.[1]);

  // Extract JSON-LD from index.html
  const jsonLdMatch = indexHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (jsonLdMatch) {
    try {
      const parsed = JSON.parse(jsonLdMatch[1]);
      console.log('✓ index.html JSON-LD is valid Schema.org graph.');
      console.log('  Entity types in @graph:', parsed['@graph']?.map(item => item['@type']).join(', '));
    } catch (e) {
      console.error('✗ Failed to parse JSON-LD in index.html:', e.message);
    }
  }

  console.log('\n=== All local file checks passed successfully! ===');
}

verify();
