import { Sequelize } from "sequelize";

const connectDB = new Sequelize(
    'sis_vendas',
    'root',
    'root',
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306

    }
)

export default connectDB;