import mongoose from "mongoose";
const Schema = mongoose.Schema

const InmuebleSchema = new Schema(
    {
      descript1: {type:String},       
      negocio: {type:String},
      inmueble: {type:String},
      ubicacion: {type:String},
      area: {type:Number},
      frente: {type:Number},
      fondo: {type:Number},
      description: {type:String},
      image: {type:String},
      images: {type:String},
      agentes: {type:String}

    },
    {collection: 'inmuebles'}
)

export default mongoose.model('InmuebleModel', InmuebleSchema)