const http = require('http');
let server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
    <!doctype html>
    <html>
        <head>
            <title>Node.js</title>
        </head>
        <body>
            <h1>Hello World</h1>
            <p>This is a paragraph</p>
        </body>
    </html>`);
});
server.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});