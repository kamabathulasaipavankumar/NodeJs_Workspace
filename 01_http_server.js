// Http server
// "http" module is built-in module in Node.js
// no need to install it
// http module already included in Node.js software

// import module (http module)
// require() is a built-in function and it is used to import modules in Node.js
const http = require('http'); // import http module

// create server
// createServer() is the function in http module,helps to create the http server
// createServer() function takes a callback function as an argument
// callback function takes two arguments req and res
// req is the request object and res is the response object
// req object contains information about the request made by the client
// res object is used to send the response back to the client.

const server = http.createServer((req,res)=>{
    res.write('welcome to http server'); // write() method is used to send the response back to the client
    res.end(); // end() method is used to end the response
}); 

server.listen(8080); // listen() method is used to make the server listen to the specified port
console.log('server is running on port 8080'); 