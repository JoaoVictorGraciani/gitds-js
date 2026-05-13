import { Cliente } from '../models/Cliente.js'

export const createCliente = async (req, res) => {
    try{
        const cliente = await Cliente.create(req.body);
        res.status(201).json(cliente);
    } catch (error) {
        res.status(500).json({ message: error.message })
    } 
}

export const getClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll()
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente não encontrado' })
        }
        res.json(cliente);
    }catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

export const updateCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (!cliente){
            return res.status(404).json({ message: 'Cliente não encontrado' })
        }
        await cliente.update(req.body);
        return res.status(200).json(cliente);
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
}

export const deleteCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (!cliente){
            return res.status(404).json({ message: 'Cliente não encontrado' })
        }
        await cliente.destroy();
        return res.status(200).json({ message: 'Cliente deletado com sucesso' });
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }

}