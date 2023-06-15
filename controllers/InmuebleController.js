//importamos el Modelo
import InmuebleModel from "../models/InmuebleModel.js";

//** Métodos para el CRUD **/


//Mostrar todos los Inmuebles
export const getAllInmuebles = async (req, res) => {
    try {
        const inmuebles = await InmuebleModel.find()
        res.status(200).json(inmuebles)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un Inmueble
export const getInmueble = async (req, res) => {
        try {
            const id = req.params.id
            await InmuebleModel.findById( {_id:id} ).then( (inmueble) => {
                res.status(200).json(inmueble)
            })        
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Crear un Inmueble
export const createInmueble = async (req, res) => {
    try {
       await InmuebleModel.create(req.body)
       res.status(200).json({
           "message":"¡Inmueble creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un Inmueble
export const updateInmueble = async (req, res) => {
    try {
        const id = req.params.id
        await InmuebleModel.updateOne({_id: id}, req.body).then( res => {
            console.log(res)
        })
        res.status(200).json({
            "message":"¡inmueble actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Eliminar un Inmueble
export const deleteInmueble = async (req, res) => {
    try {
        const id = req.params.id
        await InmuebleModel.deleteOne({ _id : id }).then( res => {
            console.log(res)
        })
        res.status(200).json({
            "message":"¡inmueble eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}