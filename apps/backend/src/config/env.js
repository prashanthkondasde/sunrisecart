import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envFile = `.env.${process.env.NODE_ENV || "development"}`;

dotenv.config({
  path: path.resolve(__dirname, "../../", envFile)
});

const env = {
  NODE_ENV : process.env.NODE_ENV,  
  PORT: process.env.APP_PORT,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_SECRET_TIME: process.env.JWT_SECRET_TIME,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,  
  JWT_REFRESH_SECRET_TIME: process.env.JWT_REFRESH_SECRET_TIME,
  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
  PGUSER: process.env.PGUSER,
  PGHOST: process.env.PGHOST,
  PGDATABASE: process.env.PGDATABASE,
  PGPASSWORD: process.env.PGPASSWORD,
  PGPORT: process.env.PGPORT,
  RAZORPAY_API_KEY: process.env.RAZORPAY_API_KEY,
  RAZORPAY_API_SECRETE : process.env.RAZORPAY_API_SECRETE,
  SMS_COUNTRY_AUTH_KEY: process.env.SMS_COUNTRY_AUTH_KEY,
  SMS_COUNTRY_AUTH_TOKEN: process.env.SMS_COUNTRY_AUTH_TOKEN,
};
export default env
