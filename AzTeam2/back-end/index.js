import express from "express";

app.use(express.bodyParser());

const port = 888;
const app = express();

app.use(bodyParser.text());

app.get("/", (request, response) => {
  response.send("Hello");
});
app.get("/api", (request, response) => {
  response.send("Hello gej hel");
});

app.post("/", (request, response) => {
  response.send("Hello tanii post husel irlee");
});

app.listen(port, () => {
  console.log(`server ajillaj ehleh http://localhost:${port}`);
});
