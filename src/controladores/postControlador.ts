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
       posts.push(post)

       return res.status(201).json(post)
    }
    editar(req:Request, res:Response){
        const { id } = req.params
        const { titulo, descricao } =req.body
        if (!titulo || !descricao){
            return res.status(400).json({
                mensagem : "Titulo ou descrição são obrigatorios"
            }) 
        } 
        const postagem = posts.find((elemento)=>{
            return elemento.id === id
        })
        if (!postagem){
            return res.status(404).json({
                mensagem: "Postagem não encontrada"
            })
        }
        postagem.titulo = titulo
        postagem.descricao = descricao

        return res.status(204).json()
    }
    deletar(req:Request, res:Response){
        const {id} =req.params

        const postagemIndex = posts.findIndex((elemento)=>{
            return elemento.id === id 
        })
        if (postagemIndex === -1){
            return res.status(404).json({
                mensagem : "Postagem não encontrada"
            })
        }
        posts.splice(postagemIndex, 1)

        return res.status(204).json({
            mensagem : "Postagem deletada com sucesso"
        })
    }
}