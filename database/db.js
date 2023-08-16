import pkg from 'mongoose';
const { connect } = pkg;

import config from "../config.js";

const URI = `${config.sgbd}://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.database}` // mongodb+srv://<user>:<password>@<localhost>/<database>?retryWrites=true&w=majority

export const connection = async () => {
    try {
        const db = await connect(URI, config.options);
        console.log("Connected to ", db.connection.name);
    } catch (error) {
        console.error(error);
    }
}