const { dentalSchools } = require('../lib/data/schools.ts');
const fs = require('fs');
const path = require('path');

async function checkWebsite(school) {
  const timestamp = new Date().toISOString();
  
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    
    const response = await fetch(school.website, {
      method: 'HEAD',
      redirect: 'manual',
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; DentalGuideBot/1.0; +https://guerilladentalguide.com)',
      },
    });
    
    clearTimeout(timeoutId);
    
    const status = response.status;
    let statusText = 'active';
    let redirectUrl = undefined;
    
    if (status >= 300 && status < 400) {
      statusText = 'redirect';
      redirectUrl = response.headers.get('location') || undefined;
    } else if (status === 404) {
      statusText = 'not_found';
    } else if (status >= 400) {
      statusText = 'error';
    }
    
    return {
      name: school.name,
      website: school.website,
      status,
      statusText,
      redirectUrl,
      timestamp,
    };
  } catch (error) {
    return {
      name: school.name,
      website: school.website,
      status: null,
      statusText: 'error',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp,
    };
  }
}

async function runVerification() {
  console.log(`Checking ${dentalSchools.length} dental school websites...\n`);
  
  const results = [];
  const batchSize = 5;
  
  for (let i = 0; i < dentalSchools.length; i += batchSize) {
    const batch = dentalSchools.slice(i, i + batchSize);
    console.log(`Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(dentalSchools.length / batchSize)}...`);
    
    const batchResults = await Promise.all(batch.map(checkWebsite));
    results.push(...batchResults);
    
    batchResults.forEach((result) => {
      const icon = result.statusText === 'active' ? '✓' : '✗';
      console.log(`  ${icon} ${result.name}: ${result.status || 'ERROR'} (${result.statusText})`);
    });
    
    if (i + batchSize < dentalSchools.length) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
  
  const report = {
    timestamp: new Date().toISOString(),
    total: results.length,
    active: results.filter((r) => r.statusText === 'active').length,
    redirect: results.filter((r) => r.statusText === 'redirect').length,
    notFound: results.filter((r) => r.statusText === 'not_found').length,
    error: results.filter((r) => r.statusText === 'error').length,
    results,
  };
  
  return report;
}

async function main() {
  const report = await runVerification();
  
  console.log('\n' + '='.repeat(50));
  console.log('VERIFICATION SUMMARY');
  console.log('='.repeat(50));
  console.log(`Total websites checked: ${report.total}`);
  console.log(`✓ Active: ${report.active}`);
  console.log(`→ Redirects: ${report.redirect}`);
  console.log(`✗ Not Found: ${report.notFound}`);
  console.log(`⚠ Errors: ${report.error}`);
  console.log('='.repeat(50));
  
  const outputPath = path.join(__dirname, '..', 'verification-report.json');
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
  console.log(`\nDetailed report saved to: ${outputPath}`);
  
  const brokenSites = report.results.filter(
    (r) => r.statusText === 'not_found' || r.statusText === 'error'
  );
  
  if (brokenSites.length > 0) {
    console.log('\n⚠ BROKEN SITES:');
    brokenSites.forEach((site) => {
      console.log(`  - ${site.name}: ${site.website}`);
      if (site.error) console.log(`    Error: ${site.error}`);
    });
    process.exit(1);
  } else {
    console.log('\n✓ All websites are accessible!');
    process.exit(0);
  }
}

main().catch((error) => {
  console.error('Verification failed:', error);
  process.exit(1);
});
