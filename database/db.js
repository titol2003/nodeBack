import mongoose from 'mongoose'
mongoose.set('strictQuery', false); // Establece la opción strictQuery en false

const url = 'mongodb://localhost:27017/mern'
mongoose.connect(url)

const db = mongoose.connection
db.on('open', ()=>{ console.log("¡Conectado a MongoDB!")} )
db.on('error', ()=>{ console.log("¡Error al conectar a MongoDB!")} )

export default db
