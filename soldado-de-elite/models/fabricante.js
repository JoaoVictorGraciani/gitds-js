import { DataTypes } from "sequelize";
import connectDB from "../config/dbTestSequelize.js"

const Fabricante = connectDB.define("fabricante", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Fabricante;