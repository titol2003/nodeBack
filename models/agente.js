import mongoose from "mongoose";
const Schema = mongoose.Schema

const agente = new Schema(
    {
      name: {type:String},       
      lastname: {type:String},
      cedula: {type:Number},
      number: {type:Number},
      email: {type:String},
      password: {type:String}
    },
    {collection: 'agentes'}
)

export default mongoose.model('Agente', agente)