import express from 'express';
import serverless from 'serverless-http';
import cors from "cors"
import cookieParser from 'cookie-parser'
import env from './config/env.js'
import routes from './routes/allroutes.js'
import dotenv from 'dotenv'
dotenv.config()
const PORT = env.PORT;
const app = express(); //express pkg
//const errorHandler = require('./api/middleware/error');

app.use(express.urlencoded({ extended: true }));
//const encoder = bodyParser.urlencoded()
//app.use(cors()); //cors pkg
const allowedOrigins =  process.env.ALLOWED_ORIGINS.split(',')
app.use(cors({
  origin: (origin, callback) => {

    // allow requests like Postman/mobile apps
    if (!origin) {
      return callback(null, true)
    }

    if (allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error(`CORS blocked: ${origin}`))
    }
  },

  credentials: true,
}))
//app.use(fileupload());
//app.use(express.static("../functions/files"));

app.use(express.json());
app.use(cookieParser());
//app.use(express.static('/files')); 
app.use('/files', express.static('files'));


app.use('/', routes)
//console.log(__dirname);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
export default app;
export const handler = serverless(app);