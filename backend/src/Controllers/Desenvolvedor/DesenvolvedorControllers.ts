import { Request, Response } from 'express'

import { UsuariosServices } from '../../Services/Usuarios/UsuariosServices'
import { DesenvolvedorServices } from '../../Services/Desenvolvedor/DesenvolvedorServices'

class DesenvolvedorControllers {
    async cadastrarDesenvolvedor(req: Request, res: Response) {
        const { nome, email, password, cpf,area} = req.body
        const enviarDadosServices = new DesenvolvedorServices()
        const resposta = await enviarDadosServices.cadastrarDesenvolvedor({
            nome,
            email,
            password,
            cpf,
            area
        })
        return res.json(resposta)
    }

    async consultarDesenvolvedor(req: Request, res: Response) {
        const enviarDadosServices = new DesenvolvedorServices()
        const resposta = await enviarDadosServices.consultarDesenvolvedor()
        return res.json(resposta)
    }

    async consultarDesenvolvedorUnico(req: Request, res: Response) {
        const { id } = req.body
        const enviarDadosServices = new DesenvolvedorServices()
        const resposta = await enviarDadosServices.consultarDesenvolvedorUnico(id)
        return res.json(resposta)
    }

    async alterarDadosDesenvolvedor(req: Request, res: Response) {
        const { id, nome, email, cpf, area} = req.body
        const enviarDadosServices = new DesenvolvedorServices()
        const resposta = await enviarDadosServices.alterarDadosDesenvolvedor({
            id,
            nome,
            email,
            cpf,
            area
        
        })
        return res.json(resposta)
    }

    async apagarDesenvolvedor(req: Request, res: Response) {
        const { id } = req.params
        const enviarDadosServices = new DesenvolvedorServices()
        const resposta = await enviarDadosServices.apagarDesenvolvedor(id)
        return res.json(resposta)
    }
}

export { DesenvolvedorControllers }