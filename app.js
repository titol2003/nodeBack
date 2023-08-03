
import express  from "express"
import cors from 'cors'
//importamos la conexión a la DB
import db from "./database/db.js"
//importamos nuestro enrutador
import inmuebleRoutes from './routes/routes.js'
import AgentesRoutes from './routes/routeAgente.js';

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/inmuebles', inmuebleRoutes)
app.use('/agentes', AgentesRoutes)


app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
})


/*
 
import express from 'express'
import {startConnection} from './database/db.js'
import { createUser, getUsers } from './controllers/UserController.js'


const app = new express()

await startConnection()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/inicio', getUsers)
app.post('/inicio', createUser)


app.listen(4000, () =>{
    console.log('Servidor escuchando en el puerto 4000')
})

 */