import { Router } from "express";
import {
    createCliente,
    getClientes,
    getCliente,
    updateCliente,
    deleteCliente

} from "../controllers/clienteController.js";

const router = Router();

/**
 * @swagger
 * /cliente:
 *   post:
 *     summary: Cria um cliente
 *     tags: [Clientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               cpf:
 *                 type: float
 *               email:
 *                 type: string
 *               telefone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Cliente criado
 *       500:
*          description: Erro ao listar Clientes
 */
router.post("/cliente", createCliente)

/**
 * @swagger
 * /cliente:
 *   get:
 *     summary: Lista todos os clientes
 *     tags: [Clientes]
 *     responses:
 *       200:
 *         description: Lista de clientes
 *       500:
 *         description: Erro ao listar clientes
 */
router.get("/cliente", getClientes)

/**
 * @swagger
 * /cliente/{id}:
 *   get:
 *     summary: Busca um cliente por ID
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do cliente
 *     responses:
 *       200:
 *         description: Cliente encontrado
 *       404:
 *         description: Cliente não encontrado
 *       500:
 *         description: Erro ao buscar cliente
 */
router.get("/cliente/:id", getCliente)

/**
 * @swagger
 * /cliente/{id}:
 *   put:
 *     summary: Atualiza um cliente
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               cpf:
 *                 type: float
 *               email:
 *                 type: string
 *               telefone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Clientes atualizado
 *       404:
 *         description: Clientes não encontrado
 *       500:
 *         description: Erro ao atualizar cliente
 */
router.put("/cliente/:id", updateCliente)

/**
 * @swagger
 * /cliente/{id}:
 *   delete:
 *     summary: Remove um Cliente
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do cliente
 *     responses:
 *       200:
 *         description: Cliente removido
 *       404:
 *         description: Cliente não encontrado
 *       500:
 *         description: Erro ao remover cliente
 */
router.delete("/cliente/:id", deleteCliente)

export default router;
