import express from 'express';
import cors from 'cors';
import multer from 'multer';
import csvToJson from 'convert-csv-to-json';

const app = express();
const port = process.env.PORT ?? 3000;

let userData: Array<Record<string, string>> = []; // para guardar en memoria los datos considerando llave valor como estructura de datos array asociativo

app.use(cors()) // habilitamos CORS

// configuro multer para hacer uso de buffer de memoria para almacenar datos
const storage = multer.memoryStorage();
const upload = multer({storage});


//Endpoints
//Cargar desde el front
app.post('/api/files',upload.single('file'), async(req, res) => {
    const {file} = req;
    if(!file){
        return res.status(500).json({message: 'File is required'}); //Comprobacion de que se ha enviado un file
    }

    if(file.mimetype !== 'text/csv'){
        return res.status(500).json({message: 'File must be CSV'}); //Comprobacion de tipo de file sea un csv
    }

    try {
        const rawCSV =  Buffer.from(file.buffer).toString('utf-8');
        userData = csvToJson.fieldDelimiter(',').csvStringToJson(rawCSV);
    } catch (error) {
        return res.status(500).json({message:'Error parsing the file'})
    }
    return res.status(200).json({data: userData, message: 'The file is loaded successfully'})
})

//Filtrando por query param
app.get('/api/users', async(req, res) => {
    const {q} = req.query;

    if(!q) {
        return res.status(500).json({message: 'Query param is required'});
    }

    const search = q.toString().toLowerCase();

    const filtered = userData.filter((row) => {
        return Object
                .values(row)
                .some(value => value.toLowerCase().includes(search));
    });

    return res.status(200).json({data: filtered})
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})