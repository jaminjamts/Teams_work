import express from "express";
import cors from "cors";

const port = 9999;
const app = express();

app.use(cors());
app.use();
app.get("/", (request, response) => {
  response.send("Hellosdadsadsds");
});

app.post("/", (req, res) => {
  res.send("post");
});

app.listen(port, () => {
  console.log(`//http:localhost:${port}`);
});
