const { log } = require("console");
const http = require("http");

const port = 3000; // Duriin 4 orontoi code

const server = http.createServer((request, response) => {
  response.statusCode = 300; // 200 Ok Get Status
  response.setHeader("Content-Type", "text/html");
  response.end("Hello my first response shdee");
});

server.listen(port, () => {
  console.log(`Server ajillaj ehellee port: http://localhost:${port}`);
});
