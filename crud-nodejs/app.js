import 'dotenv/config'
import express from 'express';
import userRoutes from "./routers/userRouters.js" 
import { connectDB, sequelize } from './config/database.js';

const app = express()

app.use(express.json())
// app.use(userRoutes)
app.use("/api", userRoutes)

const start = async () => {
    await connectDB()
    await sequelize.sync()
    app.listen(process.env.PORT || 3000, () =>{
        console.log(`Servidor rodando na porta ${process.env.PORT}`)
    })
}

start()