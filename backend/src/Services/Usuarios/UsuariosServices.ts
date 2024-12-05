import prismaClient from '../../Prisma'
import { hash } from 'bcryptjs'

interface cadUsuarios {
    nome: string,
    email: string,
    senha: string,
    cpf: string
}

interface AlterarUsuarios {
    id: string,
    nome: string,
    email: string,
    cpf: string
}

class UsuariosServices {
    async cadastrarUsuarios({ nome, email, senha, cpf }: cadUsuarios) {

        const senhaCrypt = await hash(senha, 8)
        await prismaClient.cadastarUsuarios.create({
            data: {
                nome: nome,
                email: email,
                senha: senhaCrypt,
                cpf: cpf
            }
        })
        return ({ dados: 'Cadastro Efetuado Com Sucesso' })
    }

    async consultarUsuarios() {
        const resposta = await prismaClient.cadastarUsuarios.findMany({
            select: {
                id: true,
                nome: true,
                email: true,
                
                cpf: true

               
            }
        })
        return resposta
    }

    async consultarUsuariosUnico(id: string) {
        const resposta = await prismaClient.cadastarUsuarios.findFirst({
            where: {
                id: id
            },
            select: {
                nome: true,
                email: true,
                senha: true,
                cpf: true   

            }
        })
        return resposta
    }

    async alterarDadosUsuarios({ id, nome, email, cpf}: AlterarUsuarios) {
        await prismaClient.cadastarUsuarios.update({
            where: {
                id: id
            },
            data: {
                nome: nome,
                email: email,
                cpf: cpf
            }
        })
        return ({ dados: 'Cadastro Alterado Com Sucesso' })
    }

    async apagarUsuarios(id: string) {
        await prismaClient.cadastarUsuarios.delete({
            where: {
                id: id
            }
        })
        return ({ dados: 'Registro Apagado com Sucesso' })
    }
}

export { UsuariosServices }