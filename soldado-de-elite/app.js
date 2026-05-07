import 'dotenv/config'
import express from 'express';
import soldadoRoutes from "./routes/soldadoRoutes.js"
import { connectDB, sequelize } from './config/database.js';

import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './config/swagger.js';

const app = express()

app.use(express.json())

// rota api
app.use("/api", soldadoRoutes)

// rota swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

const start = async () => {
    await connectDB()
    await sequelize.sync()
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Servidor rodando na porta  ${process.env.PORT || 3000}`)
        console.log(`http://localhost:${process.env.PORT || 3000}/docs`)
    })
}

start();