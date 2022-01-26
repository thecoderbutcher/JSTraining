const http  = require('http');
const data = require('./004_json.json');

http.createServer((req, res)=>{
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(data));
    }
    else if(req.url === '/honor'){
        filtrarHonor(res);
    }
    else{
        res.writeHead(404, {'Content-Type': 'application/plain'});
        res.end("404 ups not found");
    }
}).listen(3000, ()=>{
    console.log('Server is running on port 3000');
});

function filtrarHonor(res){
    let honor = data.filter(alumno => alumno.Calificacion >= 8);
    res.end(JSON.stringify(honor));
}