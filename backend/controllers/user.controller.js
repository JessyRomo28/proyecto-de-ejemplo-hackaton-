import { Usuario_Modelo } from "../models/user.model.js";

export const test = () => {
    console.log('llamando la función desde controlador')
}

Usuario_Modelo.create(
    {
        name:'jesus',
        apepat:'Salazar'
    }
)