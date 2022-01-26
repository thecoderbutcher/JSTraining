const http = require('http');
let fs = require('fs');

http.createServer((req, res)=>{
    if(req.method === 'GET' && req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./005_form.html', 'utf-8').pipe(res);
    }
    else if(req.method === 'POST' && req.url === '/'){
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(body);
        });
    }
}).listen(3000, ()=>{
    console.log('Server is running on port 3000');
});