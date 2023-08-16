import { Router } from "express";

import {
    getAllAgente,
    getAgente,
    updateAgente,
    createAgente,
    deleteAgente,
} from "../controllers/AgenteController.js";

const router = Router({ caseSensitive: true });

router
    .get("/agente", getAllAgente)
    .get("/agente/:id", getAgente)
    .post("/agente", createAgente)
    .patch("/agente/:id", updateAgente)
    .delete("/agente/:id", deleteAgente);

export default router;