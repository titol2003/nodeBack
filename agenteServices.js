import Agente from "./models/agente.js";

export const findAll = async () => {
  return await Agente.find();
};

export const findById = async (id) => {
  return await Agente.findById(id);
};

export const create = async (agente) => {
  const newAgente = await new Agente(agente).save();
  return newAgente;
};

export const updateById = async (_id, data) => {
  const agente = await Agente.findByIdAndUpdate(_id, data);
  if (agente) return true;
  return false;
};

export const deleteById = async (_id) => {
  await Agente.findByIdAndDelete(_id);
};