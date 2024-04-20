import pg from 'pg';

const pool = new pg.Pool({
    host: process.env.POSGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,

});

async function main(){
    const client = await pool.connect();
    try {
        const response = await client.query('SELECT * FROM suscriber');
        const {rows} = response;
        console.log(rows)

    } catch (error) {
        console.log(error)
    } finally{
        client.release();
    }
}

main()
    .then(() => console.log('Conecte postgres'))
    .catch(err => console.log("error conecting postgrses", err))