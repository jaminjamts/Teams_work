import express, { response } from "express";
import cors from "cors";
import bodyParser from "body-parser";

const port = 9999;
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.post("/", (request, response) => {
  const { username, password } = request.body;
  const registeredUser = users.filter(
    (user) => user.username === username && user.password === password
  );
  if (registeredUser.length > 0) {
    response.json({
      success: true,
    });
  } else {
    response.json({
      success: false,
    });
  }
});

app.post("/register", (request, response) => {
  users.push(request.body);
  response.send("user amjilttai newterlee");
});

app.post("./data/user.json", "utf-8", (readError, data) => {
  let savedData = JSON.parse(data);
  if (readError) {
    response.json({
      status: "read file error",
    });
  }
  const newUser = {
    id: Date.now().toString(),
    username: body.username,
    age: body.age,
  };
  savedData.push(newUser);

  fs.writeFile("./data/user.json", JSON.stringify(savedData), (writeError) => {
    if (writeError) {
      response.json({ status: "error" });
    }
  });
});

app.listen(port, () => {
  console.log(`//http:localhost:${port}`);
});
