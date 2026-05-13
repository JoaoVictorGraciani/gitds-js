import { Fabricante } from '../models/Fabricante.js'

export const createFabricante = async (req, res) => {
    try{
        const fabricante = await Fabricante.create(req.body)
        res.status(201).json(fabricante)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getAllFabricantes = async (req, res) => {
    try{
        const fabricantes = await Fabricante.findAll()
        res.json(fabricantes)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getFabricante = async (req, res) => {
    try{
        const fabricante = await Fabricante.findByPk(req.params.id)
        if (!fabricante) {
            return res.status(404).json({message: `Fabricante não encontrado`})
        }
        res.json(fabricante)
    }catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const updateFabricante = async (req, res) => {
    try{
        const fabricante = await Fabricante.findByPk(req.params.id)
        if (!fabricante) {
            return res.status(404).json({message: `Fabricante não encontrado`})
        }
        await fabricante.update(req.body)
        return res.status(200).json(fabricante)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const deleteFabricante = async (req, res) => {
    try{
        const fabricante = await Fabricante.findByPk(req.params.id)
        if (!fabricante) {
            return res.status(404).json({message: `Fabricante não encontrado`})
        }
        await fabricante.destroy()
        return res.status(200).json({message: `Fabricante deletado com sucesso`})
    }catch (error) {
        res.status(500).json({message: error.message})
    }
}

