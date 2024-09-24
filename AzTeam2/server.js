// const http = require("http");

// const port = 3000; // Duriin 4 orontoi code

// const server = http.createServer((request, response) => {
//   response.statusCode = 200; // 200 Ok Get Status
//   response.setHeader("Content-Type", "text/plain");
//   console.log(request.method);

//   switch (request.method) {
//     case "GET":
//       return response.end("Get huselt bna");
//     case "POST":
//       return response.end("Post huselt bna");
//     case "PUT":
//       return response.end("Put huselt bna");
//     case "DELETE":
//       return response.end("Delete huselt bna");
//     case "PATCH":
//       return response.end("Patch huselt bna");
//     default:
//       return response.end("no Method");
//   }
// });

// server.listen(port, () => {
//   console.log(`Server ajillaj ehellee port: http://localhost:${port}`);
// });

import express, { request, response } from "express";
import bodyParser from "body-parser";

const port = 8888;
const server = express();

server.use(bodyParser.json());

server.get("/", (request, response) => {
  response.send("Hello GET huselt irlee");
});

server.post("/", (request, response) => {
  console.log(request.body.phone);
  response.send("hello tanii POST irlee");
});

server.listen(port, () => {
  console.log(`Server ajillaj bna http://localhost:${port}`);
});
