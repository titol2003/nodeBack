
import express  from "express";
import cors from 'cors';
import fileupload from "express-fileupload"
//importamos la conexión a la DB
import {connection} from "./database/db.js"
//importamos nuestro enrutador
import inmuebleRoutes from './routes/routes.js';
import agenteRoutes from './routes/routeAgente.js'
import authRoutes from './routes/auth.js';
import Correos from './routes/email.js';
import config from "./config.js";

const app = express();

app.use(fileupload({
  createParentPath: true
}))

app.use(
  cors({
    origin: config.frontUrl
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("port", config.port);
await connection()

app.get("/", (req, res) => {
  res.send("hola mundo");
});

app.use('/email',Correos)
app.use('/inmuebles', inmuebleRoutes)
app.use(agenteRoutes)
app.use(authRoutes)



app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
})

export default app;