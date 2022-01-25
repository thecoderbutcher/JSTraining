// Controlando procesos con exec
let exec = require('child_process').exec;
exec('explorer')

exec('dir', (error, stdout, stderr) => {
    if(error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);   
});
