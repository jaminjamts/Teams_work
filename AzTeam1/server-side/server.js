import express from "express";

const port = 9999;
const app = express();

app.get("/",(request, response) => {
    response.send("Hello")
});

app.post("/",(req, res)=> {
    res.send("post")
})


app.listen(port, () => {
    console.log(`//http:localhost:${port}`);
    
})