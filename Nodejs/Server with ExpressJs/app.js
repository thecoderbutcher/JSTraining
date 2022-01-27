const express = require('express');
const pug = require('pug');
const app = express();

let dogsArray = [
    {raza:"doberman", text:"soy un perro de raza doberman"},
    {raza:"pitbull", text:"soy un perro de raza pitbull"},
    {raza:"pastor aleman", text:"soy un perro de raza pastor aleman"}
];
app.use(express.static(__dirname));
app.get('/', (req, res) => {
    //res.send('index.html');
    res.render('index.pug', {
        title: 'Pug Website',
        message: 'Hello World from Pug and message from server',
        dogs: dogsArray
    }); 
});

app.get('/dog/:raza',(req, res) => {
    let textDog = dogsArray.filter((dog) => {
        return (req.params.raza === dog.raza)? dog : null;
    })[0];
    res.render('dog.pug', {
        raza:req.params.raza,
        text:textDog.text
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
