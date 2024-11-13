import Autor from "./modelos/Autor";
import Post from "./modelos/Post";

export const autores:Autor[]= []
export const posts:Post[]= [
    new Post({
        titulo: 'MeuPrimeroPost',
        descricao: 'Descrição do primeiro post',
        autor: new Autor({
            nome:'Rafael',
            idade: 38
        })
    })
]

