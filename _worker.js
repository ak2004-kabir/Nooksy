export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Handle PayU hash generation
    if (url.pathname === '/api/payu-hash') {
      if (request.method === 'OPTIONS') {
        return new Response(null, {
          headers: {
            'Access-Control-Allow-Origin': 'https://nooksy.in',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type'
          }
        });
      }

      if (request.method === 'POST') {
        try {
          const body = await request.json();
          const { txnid, amount, productinfo, firstname, email } = body;

          const key = env.PAYU_KEY;
          const salt = env.PAYU_SALT;

          if (!key || !salt) {
            return new Response(JSON.stringify({ error: 'PayU not configured' }), {
              status: 500,
              headers: { 'Content-Type': 'application/json' }
            });
          }

          const hashString = key + '|' + txnid + '|' + amount + '|' + productinfo + '|' + firstname + '|' + email + '|||||||||||' + salt;
          const msgBuffer = new TextEncoder().encode(hashString);
          const hashBuffer = await crypto.subtle.digest('SHA-512', msgBuffer);
          const hashArray = Array.from(new Uint8Array(hashBuffer));
          const hash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

          return new Response(JSON.stringify({ hash, key }), {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': 'https://nooksy.in'
            }
          });
        } catch (err) {
          return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': 'https://nooksy.in'
            }
          });
        }
      }
    }

    // All other requests — serve static files normally
    return env.ASSETS.fetch(request);
  }
};
