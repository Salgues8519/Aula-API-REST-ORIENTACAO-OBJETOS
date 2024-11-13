import { Request, Response } from "express";
import { autores, posts } from "../bancoDeDados";
import Autor from "../modelos/Autor";
import Post from "../modelos/Post";


export default class PostControlador {
    listar(req:Request, res:Response){
        return res.json(posts)
    }

    detalhar(req:Request, res:Response){
        const {id} =req.params

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
       const {titulo, descricao, autor_id} = req.body
       
       if (!titulo || !descricao || !autor_id){
        return res.status(400).json({
            mensagem: "Todos os campos da postagem são obrigatorios. "
        })
       }
       const autor = autores.find((elemento)=>{
        return elemento.id === autor_id
       })
       if (!autor) {
        return res.status(400).json({
            mensagem: "O autor não existe"
        })
       }
       const post = new Post ({
        titulo,
        descricao,
        autor
       })
       return res.status(201).json(post)
    }
    editar(req:Request, res:Response){
        
    }
    deletar(req:Request, res:Response){
        
    }
}