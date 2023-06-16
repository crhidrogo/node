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

/* JAVASCRIPT LANGUAGE NOTE
=== does not convert the types of the operands before comparing;
it includes a type check.

== converts the type temporarily to check; the actual types of vars do not change

*/

// Also as an arrow function
const server = http.createServer((req, res)  => {
    console.log(req)
    const url = req.url; // access the url routes
    const method = req.method; // access method such as GET or POST

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        // by naming the input it will automatically assign the value inputed to a var named 'message'
        res.write('<body><form action="/message" method="POST" ><input type="text" name="message"><button type="submit">send</button></form></body>');
        res.write('</html>');
        return res.end(); // quits from if-statement so it doesn't continue
    }

    if (url === '/message' && method === 'POST') {
        // redirect to / and saves file with message content
    }

    // Can manipulate server response directly with res object
    // Example: set headers
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js server!</h1></body>');
    res.write('</html>');

    // need to signal end of response
    // res.end()
});

// keep server running
// provide port as argument, e.g. 3000; localhost is default.
server.listen(3000);
