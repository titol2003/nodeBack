import mongoose from "mongoose";
const Schema = mongoose.Schema

const agente = new Schema(
    {
      name: {type:String},       
      cedula: {type:Number},
      number: {type:Number},
      email: {type:String},
      password: {type:String, required: true}
    },
    {collection: 'agentes'}
)

export default mongoose.model('Agente', agente)