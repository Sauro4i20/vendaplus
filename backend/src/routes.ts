import { Router } from 'express'

//Importação dos Controllers
import { UsuariosControllers } from './Controllers/Usuarios/UsuariosControllers'
import { LoginUsuariosControllers } from './Controllers/Login/LoginUsuariosControllers'

import { estaAutenticado } from './middleware/estaAutenticado'
import { DesenvolvedorControllers } from './Controllers/Desenvolvedor/DesenvolvedorControllers'
const router = Router()

//Criação das Rotas de End Point
//Rotas de Usuarios
router.post('/CadastrarUsuarios', new UsuariosControllers().cadastrarUsuarios)
router.get('/ConsultarUsuarios', new UsuariosControllers().consultarUsuarios)
router.post('/ConsultarUsuariosUnico', new UsuariosControllers().consultarUsuariosUnico)
router.put('/AlterarDadosUsuarios', new UsuariosControllers().alterarDadosUsuarios)
router.delete('/ApagarUsuarios/:id', new UsuariosControllers().apagarUsuarios)


router.post('/CadastrarUsuarios', new DesenvolvedorControllers().cadastrarDesenvolvedor)
router.get('/ConsultarUsuarios', new DesenvolvedorControllers().consultarDesenvolvedor)
router.post('/ConsultarUsuariosUnico', new DesenvolvedorControllers().consultarDesenvolvedorUnico)
router.put('/AlterarDadosUsuarios', new DesenvolvedorControllers().alterarDadosDesenvolvedor)
router.delete('/ApagarUsuarios/:id', new DesenvolvedorControllers().apagarDesenvolvedor)


//Roras de Login
router.post('/LoginUsuarios', new LoginUsuariosControllers().loginUsuarios)
router.get('/VerificaToken', estaAutenticado, new LoginUsuariosControllers().verificaToken)


export default router