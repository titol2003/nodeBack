import mongoose from "mongoose";
const Schema = mongoose.Schema

const InmuebleSchema = new Schema(
    {
      descript1: {type:String}, 
      descript2: {type:String},
      description: {type:String}, 
      ventajas: {type:String},
      area: {type:Number},
      habitaciones: {type:Number},   
      estrato: {type:Number},  
      baños: {type:Number},
      inmueble: {type:String},
      frente: {type:Number},
      fondo: {type:Number},
      ubicacion: {type:String},
      negocio: {type:String},
      precio: {type:Number},
      image: {type:String},
      images: {
        type: Array
      },
      agentes: {type:String}

    },
    {collection: 'inmuebles'}
)

export default mongoose.model('InmuebleModel', InmuebleSchema)