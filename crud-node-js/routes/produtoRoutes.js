import { Router } from "express";
import {
    createProduto,
    getProdutos,
    getProduto,
    updateProduto,
    deleteProduto

} from "../controllers/produtoController.js";

const router = Router();

/**
 * @swagger
 * /produto:
 *   post:
 *     summary: Cria um usuários
 *     tags: [Produtos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               preco:
 *                 type: float
 *               descricao:
 *                 type: string
 *     responses:
 *       201:
 *         description: Produto criado
 *       500:
*          description: Erro ao listar Produtos
 */
router.post("/produto", createProduto)

/**
 * @swagger
 * /produto:
 *   get:
 *     summary: Lista todos os produtos
 *     tags: [Produtos]
 *     responses:
 *       200:
 *         description: Lista de produtos
 *       500:
 *         description: Erro ao listar produtos
 */
router.get("/produto", getProdutos)

/**
 * @swagger
 * /produto/{id}:
 *   get:
 *     summary: Busca um produto por ID
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do produto
 *     responses:
 *       200:
 *         description: Produto encontrado
 *       404:
 *         description: Produto não encontrado
 *       500:
 *         description: Erro ao buscar produto
 */
router.get("/produto/:id", getProduto)

/**
 * @swagger
 * /produto/{id}:
 *   put:
 *     summary: Atualiza um produto
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do produto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               preco:
 *                 type: float
 *               descricao:
 *                 type: string
 *     responses:
 *       200:
 *         description: Produtos atualizado
 *       404:
 *         description: Produtos não encontrado
 *       500:
 *         description: Erro ao atualizar produto
 */
router.put("/produto/:id", updateProduto)

/**
 * @swagger
 * /produto/{id}:
 *   delete:
 *     summary: Remove um Produto
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do produto
 *     responses:
 *       200:
 *         description: Produto removido
 *       404:
 *         description: Produto não encontrado
 *       500:
 *         description: Erro ao remover produto
 */
router.delete("/produto/:id", deleteProduto)

export default router;
