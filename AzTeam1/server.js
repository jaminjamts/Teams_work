const { log } = require("console")
const http = require("http")
const port =2222
 
const server = http.createServer((request, response) => {
    response.statusCode = 200
    response.setHeader("Content-Type", "text/html")
    response.end("Hello My first")
})

server.listen(port, ()=>{
    console.log((`server works http:localhost:${port}`));
    
})