const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res)=>{
    console.log(`${req.method} request ${req.url}`);
    if(req.url === '/'){
        fs.readFile('./001_wiki.html', 'utf-8', (err, data)=>{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }
    else if(req.url.match(/.css$/)){ // leemos archivos diferente, en este caso css, las variaciones debe realizarse para todo
        let cssFile = path.join(__dirname, req.url);
        let fileStream = fs.createReadStream(cssFile, 'utf-8');
        fileStream.pipe(res);
    }
    else{
        res.writeHead(404, {'Content-type':'text/plain'})
        res.end('404 Not Found');
    }
}).listen(3000, ()=>{
    console.log('Server is running on port 3000');
});