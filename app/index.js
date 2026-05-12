require('./tracing');

const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <html>
      <body style="font-family: monospace; padding: 40px;">
        <h2 style="color:blue">🚀 Hello from K3s! v3</h2>
        <p><b>Pod:</b> ${os.hostname()}</p>
        <p><b>Node IP:</b> ${
          Object.values(os.networkInterfaces())
            .flat()
            .find((i) => i.family === 'IPv4' && !i.internal)?.address ||
          'unknown'
        }</p>
        <p><b>Time:</b> ${new Date().toISOString()}</p>
      </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log(`${new Date().toISOString()} Server started on port 3000`);
});
