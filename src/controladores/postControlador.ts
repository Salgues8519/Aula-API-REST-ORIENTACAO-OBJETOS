import { Request, Response } from "express";
import { autores, posts } from "../bancoDeDados";
import Autor from "../modelos/Autor";


export default class PostControlador {
    listar(req:Request, res:Response){
        return res.json(posts)
    }

    detalhar(req:Request, res:Response){
        const {id, titulo } =req.params

        const postID =posts.find((elemento)=>{
            return elemento.id === id
        })
        if (!postID){
            return res.status(404).json({
                mensagem: "ID não encontrado"
            })
        }
        return res.json(postID) 
        
      
    }
    cadastrar(req:Request, res:Response){
       
    }
    editar(req:Request, res:Response){
        
    }
    deletar(req:Request, res:Response){
        
    }
}