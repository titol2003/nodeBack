import express from 'express'
import { getAllInmuebles, getInmueble,createInmueble, updateInmueble,deleteInmueble  } from '../controllers/InmuebleController.js'
const router = express.Router()

router.get('/', getAllInmuebles)
router.get('/:id', getInmueble)
router.post('/', createInmueble)
router.put('/:id', updateInmueble)
router.delete('/:id', deleteInmueble)

export default router
