/**
 * IndexNow submission utility for logicmm.com
 * Clean implementation without external dependencies.
 * Notifies participating search engines (e.g. Bing, Seznam, Yandex) of URL updates.
 * Note: Does not guarantee indexing or ranking.
 */

const host = 'logicmm.com';
const key = 'b6a2e8c459f1437bb94d87a912e34f67';
const keyLocation = `https://${host}/${key}.txt`;

const urlList = [
  'https://logicmm.com/',
  'https://logicmm.com/systems',
  'https://logicmm.com/projects',
  'https://logicmm.com/projects/vacuum-distillation',
  'https://logicmm.com/projects/vision-inspection',
  'https://logicmm.com/projects/ultrasonic-cleaning',
  'https://logicmm.com/projects/cartesian-robot',
  'https://logicmm.com/projects/bespoke-machine-automation',
  'https://logicmm.com/experience',
  'https://logicmm.com/technology',
  'https://logicmm.com/about',
  'https://logicmm.com/contact'
];

async function submitIndexNow() {
  const payload = {
    host,
    key,
    keyLocation,
    urlList
  };

  console.log(`[IndexNow] Submitting ${urlList.length} URLs to api.indexnow.org...`);
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    console.log(`[IndexNow] Response: ${response.status} ${response.statusText}`);
    if (response.ok || response.status === 200 || response.status === 202) {
      console.log('[IndexNow] Notification delivered successfully.');
    } else {
      const text = await response.text();
      console.warn(`[IndexNow] Response details: ${text}`);
    }
  } catch (error) {
    console.error('[IndexNow] Submission failed:', error.message);
  }
}

submitIndexNow();
