//importamos el Modelo
import InmuebleModel from "../models/InmuebleModel.js";

//** Métodos para el CRUD **/

//Mostrar todos los Inmuebles
export const getAllInmuebles = async (req, res) => {
  try {
    const inmuebles = await InmuebleModel.find().populate("agente")
    res.status(200).json(inmuebles);
  } catch (error) {
    res.json({ message: error.message });
  }
};
//Mostrar un Inmueble
export const getInmueble = async (req, res) => {
  try {
    const id = req.params.id;
    const inmueble =  await InmuebleModel.findById({ _id: id }).populate("agente")
    
      res.status(200).json(inmueble);

  } catch (error) {
    res.json({ message: error.message });
  }
};
//Crear un Inmueble
export const createInmueble = async (req, res) => {
  const object = {};
  const {
    descript1,
    descript2,
    description,
    ventajas,
    area,
    habitaciones,
    estrato,
    baños,
    inmueble,
    fondo,
    frente,
    ubicacion,
    negocio,
    precio,
    agente,
  } = req.body;
  try {
    object.descript1 = descript1;
    object.descript2 = descript2;
    object.description = description;
    object.ventajas = ventajas;
    object.area = area;
    object.habitaciones = habitaciones;
    object.estrato = estrato;
    object.baños = baños;
    object.inmueble = inmueble;
    object.fondo = fondo;
    object.frente = frente;
    object.ubicacion = ubicacion;
    object.negocio = negocio;
    object.precio = precio;
    object.agente = agente;

    if (req.files) {
      const image = req.files.image;
      const images = req.files.images;
      const date = new Date();

      if (image) {
        const file = Buffer.from(image.data).toString("base64");
        object.image = file;
      }

      if (images) {
        const files = [];
        for (let i = 0; i < images.length; i++) {
          const file = Buffer.from(images[i].data).toString("base64");

          files.push(file);
        }
        object.images = files;
      }
    }

    await InmuebleModel.create(object);
    res.status(200).json({
      message: "¡Inmueble creado correctamente!",
    });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};
//Actualizar un Inmueble
export const updateInmueble = async (req, res) => {
  try {
    const id = req.params.id;
    await InmuebleModel.updateOne({ _id: id }, req.body).then((res) => {
      console.log(res);
    });
    res.status(200).json({
      message: "¡inmueble actualizado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
//Eliminar un Inmueble
export const deleteInmueble = async (req, res) => {
  try {
    const id = req.params.id;
    await InmuebleModel.deleteOne({ _id: id }).then((res) => {
      console.log(res);
    });
    res.status(200).json({
      message: "¡inmueble eliminado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
