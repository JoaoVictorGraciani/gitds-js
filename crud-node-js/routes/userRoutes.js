import { Router } from "express";
import {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
} from "../controllers/userController.js";
import { authmiddleware } from "../middleware/authmiddleware.js";


const router = Router();

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Cria um usuários
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado
 *       500:
*          description: Erro ao listar usuários
 */
router.post("/user", authmiddleware, createUser)

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuários
 *       500:
 *         description: Erro ao listar usuários
 */
router.get("/user", authmiddleware, getUsers)

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Busca um usuário por ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro ao buscar usuário
 */
router.get("/user/:id", getUser)

/**
 * @swagger
 * /user/{id}:
 *   put:
 *     summary: Atualiza um usuário
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário atualizado
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro ao atualizar usuário
 */
router.put("/user/:id", updateUser)

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Remove um usuário
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário removido
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro ao remover usuário
 */
router.delete("/user/:id", deleteUser)

export default router;
