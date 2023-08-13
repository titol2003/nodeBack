import { config } from "dotenv";

config();

export default {
    port : process.env.PORT || 8000,
    sgbd : process.env.SGBD || "mongodb+srv",
    dbHost : process.env.DB_HOST,
    database : process.env.DATABASE,
    dbUser : process.env.DB_USER,
    dbPassword : process.env.DB_PASSWORD,
    frontUrl: process.env.FRONT_URL || "http://localhost:3000",
    secretKey: process.env.SECRET_KEY,
    options : {
        retryWrites: true,
        w: "majority"
    },
}