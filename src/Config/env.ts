import * as dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 5000;
export const DB = process.env.DB || "Template";
export const CONNECTION_STRING = process.env.CONNECTION_STRING ||`mongodb://127.0.0.1:27017/${DB}`;
export const REQUEST_MEMORY_LIMIT = process.env.REQUEST_MEMORY_LIMIT || "5mb";
export const STATIC_FOLDER = process.env.STATIC_FOLDER || "src/Public";
export const API_ROUTE = process.env.API_ROUTE || "/api/v1";

export const TOKEN_SECRET = process.env.TOKEN_SECRET
export const AES_IV_KEY = process.env.AES_IV_KEY
export const AES_IV_SALT = process.env.AES_IV_SALT
export const AES_SECRET_KEY = process.env.AES_SECRET_KEY
export const AES_SECRET_SALT = process.env.AES_SECRET_SALT

export const EMAIL_HOST = process.env.EMAIL_HOST
export const EMAIL_USER = process.env.EMAIL_HOST
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD
export const SMS_SERVICE_KEY = process.env.SMS_SERVICE_KEY


export default process.env;
