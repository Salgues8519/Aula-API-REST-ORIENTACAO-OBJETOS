import {Router} from 'express'
import AutorControlador from './controladores/AutorControlador'

const rotas =Router()

const autorControlador:any = new AutorControlador()

rotas.get('/autores',autorControlador.listar)


export default rotas