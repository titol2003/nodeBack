import bcrypt from "bcrypt";
import {
  findAll,
  create,
  findById,
  updateById, 
  deleteById,
} from "../agenteServices.js";

export const getAllAgente = async (req, res) => {
  const agente = await findAll();
  res.json(agente);
};

export const getAgente = async (req, res) => {
  const { id } = req.params;
  const Agente= await findById(id);
  res.status(200).json(Agente);
};

export const createAgente = async (req, res) => {
  const {
    name,
    cedula,
    number,
    email,
    password,
  } = req.body;
  const salt = await bcrypt.genSalt(10);
  const contraEncrip = await bcrypt.hash(password, salt);
  const agente = await create({
    name,
    cedula,
    number,
    email,
    password : contraEncrip
  });
  if(agente){
    res.status(201).json({message:"Se ha registrado"});
  }
  
};

export const updateAgente = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    cedula,
    number,
    email,
    password,
  } = req.body;
  const response = await updateById(id, {
    name,
    cedula,
    number,
    email,
    password,
  });
  res
    .status(200)
    .json({ message: `El agente${response ? "" : " no"} fue actualizado` });
};
export const deleteAgente = async (req, res) => {
  const { id } = req.params;
  await deleteById(id);
  res.sendStatus(204);
};