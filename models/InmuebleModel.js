import mongoose from "mongoose";
const Schema = mongoose.Schema

const InmuebleSchema = new Schema(
    {
      tipo: {type:String},       
      precio: {type:String},
      descripcion: {type:String}
    },
    {collection: 'inmuebles'}
)

export default mongoose.model('InmuebleModel', InmuebleSchema)