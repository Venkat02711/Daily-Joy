const https = require('https');

async function fetchImages(query, limit = 10) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=0&gsrlimit=${limit * 2}&piprop=original`;
  
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'DailyJoy/1.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query?.pages || {};
          const urls = Object.values(pages)
            .filter(p => p.original && p.original.source)
            .map(p => p.original.source)
            .slice(0, limit);
          resolve(urls);
        } catch (e) {
          resolve([]);
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  const queries = ['sunrise', 'forest', 'roses', 'mountain peak', 'calm lake', 'couple', 'temple', 'sunflower'];
  for (const q of queries) {
    const urls = await fetchImages(q, 5);
    console.log(q, urls);
  }
}
main();
