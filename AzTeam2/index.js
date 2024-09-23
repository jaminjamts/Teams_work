const http = require("http");

const port = 4000;
const server = http.createServer((request, response) => {
  response.statusCode = 200;

  response.setHeader("content-type", "text/plain");
  response.end("hello my first response");
});
server.listen(port, () => {
  console.log(`server ajillaj ehelle prot: http://localhost:${port}`);
});
