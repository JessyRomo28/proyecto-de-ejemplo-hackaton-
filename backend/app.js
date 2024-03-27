import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { test } from "./controllers/user.controller.js";
import { Usuario_Modelo } from "./models/user.model.js";
dotenv.config()

mongoose.connect(process.env.url_db)
.then(() => {
    console.log('conexión exitosa')
})
.catch(() => {
    console.log('Conexión Fallida')
})


const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded())

app.post("/create",async (req,res)=>{
    await Usuario_Modelo.create(req.body)
    console.log("El cuerpo de la peticion", req.body)
    res.status(200).json({msg:"Creado con exito"})
})
app.listen(4000, () => {
    console.log('Corriendo el servidor')
})
