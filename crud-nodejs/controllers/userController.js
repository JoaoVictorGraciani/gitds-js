import { User } from '../models/User.js'

export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export const getUser = async (req, res) => {
    try {    
        const user = await User.findByPk(req.params.id)
        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado" })
        }
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export const updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado" })
        }
        await user.update(req.body)
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado" })
        }
        await user.destroy()
        return res.status(200).json({ message: "Usuário deletado com sucesso" })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}