import { Request, Response } from "express";
import { autores } from "../bancoDeDados";
import Autor from "../modelos/Autor";


export default class AutorControlador {
    listar(req:Request, res:Response){
        return res.json(autores)
    }
}