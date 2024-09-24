
import express from "express";


const port = 9999;
const server = express();

server.get("/",(request, response) =>{
    response.send("hello")
});

server.listen(port,()=> {
    console.log("ss");
    
})