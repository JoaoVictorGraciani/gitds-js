import { Produto } from '../models/Produto.js';

export const createProduto = async (req, res) => {
    try {
        const produto = await Produto.create(req.body);
        res.status(201).json(produto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getProdutos = async (req, res) => {
    try {
        const produtos = await Produto.findAll();
        res.json(produtos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getProduto = async (req, res) => {
    try {
        const produto = await Produto.findByPk(req.params.id);
        if (!produto) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        return res.status(200).json(produto);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const updateProduto = async (req, res) => {
    try {
        const produto = await Produto.findByPk(req.params.id);
        if (!produto) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        await produto.update(req.body);
        return res.status(200).json(produto);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
}

export const deleteProduto = async (req, res) => {
    try {
        const produto = await Produto.findByPk(req.params.id);
        if(!produto) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        await produto.destroy();
        return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
}
