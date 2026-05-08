import { Router } from "express";
import { createSoldado,
         getSoldados,
         getSoldado,
         updateSoldado,
         deleteSoldado
 } from "../controllers/soldadoController.js";

const router = Router()

/**
 * @swagger
 * /soldados:
 *   post:
 *     summary: Cria um soldado
 *     tags: [Soldados]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               nomeDeGuerra:
 *                 type: string
 *               patente:
 *                 type: string
 *               tempoServico:
 *                 type: string
 *               ativo: 
 *                 type: boolean             
 *     responses:
 *       201:
 *         description: Soldado criado
 */


router.post("/soldados", createSoldado)


/**
 * @swagger
 * /soldados:
 *  get:
 *      summary: Lista todos os soldados
 *      tags: [Soldados]
 *      responses:
 *          200:
 *              description: Lista de soldados
 *          500:
 *              description: Erro ao listar soldados
 */
router.get("/soldados", getSoldados)


/**
 * @swagger
 * /soldados/{id}:
 *   get:
 *     summary: Obtém um soldado pelo ID
 *     tags: [Soldados]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do soldado
 *     responses:
 *       200:
 *         description: Dados do soldado encontrados com sucesso
 *       404:
 *         description: Soldado não encontrado
 *       500:
 *         description: Erro interno no servidor
 */
router.get("/soldados/:id", getSoldado);


/**
 * @swagger
 * /soldados/{id}:
 *   put:
 *     summary: Atualiza os dados de um soldado pelo ID
 *     tags: [Soldados]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do soldado a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               patente:
 *                 type: string
 *     responses:
 *       200:
 *         description: Soldado atualizado com sucesso
 *       400:
 *         description: Dados inválidos fornecidos
 *       404:
 *         description: Soldado não encontrado
 *       500:
 *         description: Erro interno no servidor
 */
router.put("/soldados/:id", updateSoldado);


/**
 * @swagger
 * /soldados/{id}:
 *   delete:
 *     summary: Exclui um soldado pelo ID
 *     tags: [Soldados]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do soldado a ser removido
 *     responses:
 *       200:
 *         description: Soldado removido com sucesso
 *       404:
 *         description: Soldado não encontrado
 *       500:
 *         description: Erro ao tentar excluir o soldado
 */
router.delete("/soldados/:id", deleteSoldado);

export default router;
