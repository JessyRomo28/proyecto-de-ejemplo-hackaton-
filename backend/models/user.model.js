import {Schema, model} from "mongoose";

const Usuario_Esquema = new Schema(
    {
        name:{
            type:String,
        },
        apepat:{
            type:String,
        }

    }
)

export const Usuario_Modelo = new model('Formulario', Usuario_Esquema)