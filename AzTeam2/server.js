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

// import express, { request, response } from "express";
// import bodyParser from "body-parser";

// const port = 247;
// const server = express();

// server.use(bodyParser.json);

// server.get("/", (request, response) => {
//   response.send("Hello GET huselt irlee");
// });

// server.post("/", (request, response) => {
//   console.log(request.body);
//   response.send("hello tanii POST irlee");
// });

// server.listen(port, () => {
//   console.log(`Server ajillaj bna http://localhost:${port}`);
// });
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";
import { error } from "console";

const port = 8888;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (request, response) => {
  response.send("Hello GET huselt irlee");
});

app.post("/sign-in", (request, response) => {
  const { name, password } = request.body;

  fs.readFile("./data/user.json", "utf-8", (readError, data) => {
    if (readError) {
      response.json({
        success: false,
        error: error,
      });
    }

    let savedData = data ? JSON.parse(data) : [];

    const registeredUser = savedData.filter(
      (user) => user.name === name && user.password === password
    );

    if (registeredUser.length > 0) {
      response.json({
        success: true,
        user: registeredUser[0],
      });
    } else {
      response.json({
        success: false,
      });
    }
  });
});

app.post("/sign-up", (request, response) => {
  const { name, email, password } = request.body;

  fs.readFile("./data/user.json", "utf-8", (readError, data) => {
    let savedData = data ? JSON.parse(data) : [];

    if (readError) {
      response.json({
        success: false,
        error: error,
      });
    }

    console.log(data);

    const newUser = {
      id: Date.now().toString(),
      name: name,
      email: email,
      password: password,
    };
    savedData.push(newUser);

    fs.writeFile("./data/user.json", JSON.stringify(savedData), (error) => {
      if (error) {
        response.json({
          success: false,
          error: error,
        });
      } else {
        response.json({
          success: true,
          user: newUser,
        });
      }
    });
  });
});

app.listen(port, () => {
  console.log(`Server ajillaj bn http://localhost:${port}`);
});
