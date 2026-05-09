import { DataTypes } from "sequelize";
import connectDB from "../config/dbTestSequelize.js"

const CategoriaProduto = connectDB.define("categoriaProduto", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
})

export default CategoriaProduto;