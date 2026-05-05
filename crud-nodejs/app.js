import 'dotenv/config'
import express from 'express';
import userRoutes from './routes/userRoutes.js';
import { connectDB, sequelize } from './config/database.js';

const app = express();

app.use(express.json());
//app.use(userRoutes); http://localhost:3000/user
app.use("/api", userRoutes); //http://localhost:3000/api/user

const start = async () => {
    await connectDB();
    await sequelize.sync();

    app.listen(process.env.PORT || 3000, () => {
        console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
    });
};

start();
