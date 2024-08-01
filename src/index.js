import { configDotenv } from 'dotenv'
import express from 'express'
import { rota } from './rotas/index.js'




const app = express()

app.use(express.json())
app.use(rota)

app.listen(3000, () => {
    console.log("Rodando")
})

