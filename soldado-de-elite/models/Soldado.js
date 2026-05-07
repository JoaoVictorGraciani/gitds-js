import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Soldado = sequelize.define("Soldado", {
    id: {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nomeDeGuerra:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    patente:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    tempoServico:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ativo:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    tableName: "soldado",
    timestamps: true
})