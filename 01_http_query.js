// http module
const http = require('http');
// url module
const url = require('url');

// url : http://localhost:8080/?name=sai&age=25
// http is the protocol
// localhost is the hostname or domain name
// 8080 is the port number
// ? is the query string separator
// name is the key and sai is the value
// & is the query string separator  
// age is the key and 25 is the value
// query string is used to send data to the server

// create server
const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"}); // writeHead() method is used to set the response HTTP header
    
    // parse the url
    const obj = url.parse(req.url,true).query; // parse() method is used to parse the url

    if(obj.name ==="sai" && obj.age ==="25"){
        res.write("<h1>Welcome to http server</h1>");
    }else{
        res.write("<h1>Invalid request</h1>");
    }

    res.end();
})

// listen to the server
server.listen(8080); // listen() method is used to make the server listen to the specified port
console.log('server is running on port 8080'); // log message to the console