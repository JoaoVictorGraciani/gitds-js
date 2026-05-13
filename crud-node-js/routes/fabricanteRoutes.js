import { Router } from "express";
import {
    createFabricante,
    getFabricantes,
    getFabricante,
    updateFabricante,
    deleteFabricante

} from "../controllers/fabricanteController.js";

const router = Router();

/**
 * @swagger
 * /fabricante:
 *   post:
 *     summary: Cria um fabricante
 *     tags: [Fabricantes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *     responses:
 *       201:
 *         description: Fabricante criado
 *       500:
*          description: Erro ao listar Fabricantes
 */
router.post("/fabricante", createFabricante)

/**
 * @swagger
 * /fabricante:
 *   get:
 *     summary: Lista todos os fabricantes
 *     tags: [Fabricantes]
 *     responses:
 *       200:
 *         description: Lista de fabricantes
 *       500:
 *         description: Erro ao listar fabricantes
 */
router.get("/fabricante", getFabricantes)

/**
 * @swagger
 * /fabricante/{id}:
 *   get:
 *     summary: Busca um fabricante por ID
 *     tags: [Fabricantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do fabricante
 *     responses:
 *       200:
 *         description: Fabricante encontrado
 *       404:
 *         description: Fabricante não encontrado
 *       500:
 *         description: Erro ao buscar fabricante
 */
router.get("/fabricante/:id", getFabricante)

/**
 * @swagger
 * /fabricante/{id}:
 *   put:
 *     summary: Atualiza um fabricante
 *     tags: [Fabricantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do fabricante
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *     responses:
 *       200:
 *         description: Fabricantes atualizado
 *       404:
 *         description: Fabricantes não encontrado
 *       500:
 *         description: Erro ao atualizar fabricante
 */
router.put("/fabricante/:id", updateFabricante)

/**
 * @swagger
 * /fabricante/{id}:
 *   delete:
 *     summary: Remove um Fabricante
 *     tags: [Fabricantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do fabricante
 *     responses:
 *       200:
 *         description: Fabricante removido
 *       404:
 *         description: Fabricante não encontrado
 *       500:
 *         description: Erro ao remover fabricante
 */
router.delete("/fabricante/:id", deleteFabricante)

export default router;
