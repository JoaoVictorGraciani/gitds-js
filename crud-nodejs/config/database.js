import { Sequelize } from 'sequelize'

export const sequelize = new 

Sequelize(process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASS, 
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 3306,
        dialect: "mysql",
        logging: false
    }
);

export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Banco conectado com sucesso!");
    } catch (error) {
        console.error(`Erro ao conectar: ${error}`);
    }
};