const https = require('https');
const fs = require('fs');
let options = {
    hostname: 'es.wikipedia.org',
    port: 443,
    path: '/wiki/Nodejs',
    method: 'GET',
}
const req = https.request(options, (res)=>{
    let response = '';
    console.log(`statusCode: ${res.statusCode}`);
    res.setEncoding('utf8');
    res.once('data', (chunk)=>{
        response += chunk;
    });

    res.on('data', (chunk)=>{
        response += chunk;
    });

    res.on('end', ()=>{
        fs.writeFile('001_wiki.html', response, (err) => {
            if(err) throw err;
            console.log('File saved!');
        });
    });
})
req.on('error', (e)=>{
    console.error(e);
});
req.end();
