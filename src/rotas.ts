import {Router} from 'express'
import AutorControlador from './controladores/AutorControlador'
import PostControlador from './controladores/postControlador'

const rotas =Router()

const autorControlador:any = new AutorControlador()
const postControlador:any = new PostControlador

rotas.get('/autores',autorControlador.listar)
rotas.get('/autores/:id',autorControlador.detalhar)
rotas.post('/autores', autorControlador.cadastrar)
rotas.put('/autores/:id',autorControlador.editar)
rotas.delete('/autores/:id',autorControlador.deletar)

rotas.get('/postagem', postControlador.listar)
rotas.get('/postagem/:id',postControlador.detalhar )


// rotas.post('/autores/:id/postagem', postControlador.cadastrar)
//tentar implementar depois desta forma acima.



export default rotas 