import prismaClient from '../../Prisma'
import { hash } from 'bcryptjs'

interface cadDesenvolvedor {
    nome: string,
    email: string,
    password: string,
    area: string,
    cpf: string
}

interface AlterarDesenvolvedor {
    id: string,
    nome: string,
    email: string,
    cpf: string,
    area: string
}

class DesenvolvedorServices {
    async cadastrarDesenvolvedor({ nome, email, password, cpf, area }: cadDesenvolvedor) {

        const senhaCrypt = await hash(password, 8)
        await prismaClient.desenvolvedor.create({
            data: {
                nome: nome,
                email: email,
                senha: senhaCrypt,
                area: area,
                cpf: cpf
            }
        })
        return ({ dados: 'Cadastro Efetuado Com Sucesso' })
    }

    async consultarDesenvolvedor() {
        const resposta = await prismaClient.desenvolvedor.findMany({
            select: {
                id: true,
                nome: true,
                email: true,
                area: true,
                cpf: true


            }
        })
        return resposta
    }

    async consultarDesenvolvedorUnico(id: string) {
        const resposta = await prismaClient.desenvolvedor.findFirst({
            where: {
                id: id
            },
            select: {
                nome: true,
                email: true,
                senha: true,
                cpf: true,
                area: true

            }
        })
        return resposta
    }

    async alterarDadosDesenvolvedor({ id, nome, email, cpf, area }: AlterarDesenvolvedor) {
        await prismaClient.desenvolvedor.update({
            where: {
                id: id
            },
            data: {
                nome: nome,
                email: email,
                cpf: cpf,
                area: area
            }
        })
        return ({ dados: 'Cadastro Alterado Com Sucesso' })
    }

    async apagarDesenvolvedor(id: string) {
        await prismaClient.desenvolvedor.delete({
            where: {
                id: id
            }
        })
        return ({ dados: 'Registro Apagado com Sucesso' })
    }
}

export { DesenvolvedorServices }