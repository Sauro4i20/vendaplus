import { Request, Response } from 'express'
import { LoginServices } from '../../Services/Login/LoginServices'

class LoginUsuariosControllers {
    async loginUsuarios(req: Request, res: Response) {
        const { email, senha } = req.body
        const enviarDadosServices = new LoginServices()
        const resposta = await enviarDadosServices.loginUsuarios({
            email,
            senha
        })
        return res.json(resposta)
    }
    
    async verificaToken(req: Request, res: Response){
        const id = req.usuarioId
        const enviarDadosServices = new LoginServices()
        const resposta = await enviarDadosServices.verificaToken(id)
        return res.json(resposta)        
    }
}

export { LoginUsuariosControllers }