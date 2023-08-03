import express from 'express'
import { getAllAgentes, getAgente,createAgente, updateAgente,deleteAgente  } from '../controllers/AgenteController.js'
const router = express.Router()

router.get('/', getAllAgentes)
router.get('/:id', getAgente)
router.post('/', createAgente)
router.put('/:id', updateAgente)
router.delete('/:id', deleteAgente)

export default router
