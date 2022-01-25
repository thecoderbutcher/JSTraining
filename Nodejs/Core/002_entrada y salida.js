//Entrada y saida estandat en nodejs
process.stdout.write('Hola mundo\n');
process.stdout.write('adios mundo\n');

let question = ["Cual es tu nombre?", "Cual es tu apellido?"];
let answers = [];

const ask = (i) => {
    process.stdout.write(`${question[i]}`);
    process.stdout.write(': ');
}

process.stdin.on('data', data => {
    process.stdout.write(`\n${data.toString().trim()}\n`);
    if(question.length < answers.length) {
        ask(answers.length);
    }else{
        process.exit();
    }
});

process.on('exit', () => {
    process.stdout.write(`\n${answers.join('\n')}\n`);
});

ask(0);