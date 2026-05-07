import { Router } from "express";
import { createSoldado,
         getSoldados,
         getSoldado,
         updateSoldado,
         deleteSoldado
 } from "../controllers/soldadoController.js";

const router = Router()


router.post("/soldados", createSoldado)


/**
 * @swagger
 * /soldados:
 *  get:
 *      summary: Lista todos os usuários
 *      tags: [soldados]
 *      responses:
 *          200:
 *              description: Lista de usuários
 *          500:
 *              description: Erro ao listar usuários
 */
router.get("/soldados", getSoldados)
router.get("/soldados/:id", getSoldado)
router.put("/soldados/:id", updateSoldado)
router.delete("/soldados/:id", deleteSoldado)

export default router;
