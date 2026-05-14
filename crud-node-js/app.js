import 'dotenv/config'
import express from 'express';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';

import { connectDB, sequelize } from './config/database.js';

import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger.js';

const app = express();

app.use(express.json());

// rota api
//app.use(userRoutes); http://localhost:3000/user
app.use("/api", userRoutes); //http://localhost:3000/api/user

// rota swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// rota auth
app.use("/auth", authRoutes);


const start = async () => {
    await connectDB();
    await sequelize.sync();

    app.listen(process.env.PORT || 3000, () => {
        console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
        console.log(`http://localhost:${process.env.PORT || 3000}/docs`);
    });
};

start();
