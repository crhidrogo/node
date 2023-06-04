// require is how node imports files
// takes an absolute path (./ or /) to a local file
// omit ./ for core global js files

// import js module 'http'
const http = require('http')

// create a function reference to handle request and response
// request part => contains data about the request
// response part => instructs how to send a response
// function rqListener(req, res) {

// }

// event driven 
// http.createServer()

// // function can also be passed "anonymously"

// http.createServer(function(req, res) {
//     // do stuff here
// });

// Also as an arrow function
const server = http.createServer((req, res)  => {
    console.log(req)
});

// keep server running
// provide port as argument, e.g. 3000; localhost is default.
server.listen(3000);
