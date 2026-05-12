import pg from 'pg'
import env from '../config/env.js'
const {Pool} = pg
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
    // ssl  : {
    //     ca : fs.readFileSync('<path to CA cert file>')
    //   }
  })


     
    //connectDb()
  pool.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
 
  export const query = (text, params) =>
  pool.query(text, params);
  export default pool;