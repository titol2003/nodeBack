import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import Agente from "../models/agente.js";
import config from "../config.js";

export default async function login(req, res){
    

    try{
        const {email, password} = req.body

        const document = await Agente.findOne({"email": email})

        if(document != null){
           
            const access = await bcrypt.compare(password, document.password)
          

            if(access){
                const token =jwt.sign({id: document._id}, config.secretKey, {
                    expiresIn: 86400,
                });
                

                res.status(200).json({message: "Bienvenido", token})
            }
        }else{
            res.status(401).json({message: "Email o contraseña incorrectos"})
        }

    }catch (error){
        console.error("Error:", error);
        res.status(400).json(error.message)

    }
}