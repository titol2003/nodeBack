//importamos el Modelo
import Agente from "../models/agente.js";

//** Métodos para el CRUD **/


//Mostrar todos los Inmuebles
export const getAllAgentes = async (req, res) => {
    try {
        const agentes = await Agente.find()
        res.status(200).json(agentes)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un Inmueble
export const getAgente = async (req, res) => {
        try {
            const id = req.params.id
            await Agente.findById( {_id:id} ).then( (agente) => {
                res.status(200).json(agente)
            })        
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Crear un Inmueble
export const createAgente = async (req, res) => {
    try {
       await Agente.create(req.body)
       res.status(200).json({
           message:"¡Inmueble creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un Inmueble
export const updateAgente = async (req, res) => {
    try {
        const id = req.params.id
        await Agente.updateOne({_id: id}, req.body).then( res => {
            console.log(res)
        })
        res.status(200).json({
            message:"¡inmueble actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Eliminar un Inmueble
export const deleteAgente = async (req, res) => {
    try {
        const id = req.params.id
        await Agente.deleteOne({ _id : id }).then( res => {
            console.log(res)
        })
        res.status(200).json({
            message:"¡inmueble eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}