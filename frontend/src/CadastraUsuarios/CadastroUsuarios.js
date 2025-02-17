import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './CadastroUsuarios.css'
import { toast } from 'react-toastify'
import apiLocal from './../Api/apiLocal'

export default function CadastrarUsuarios() {

    const mudarTela = useNavigate()
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')

    async function cadastroUsuarios(e) {
        try {
            e.preventDefault()
            if (!nome || !email || !password) {
                alert("Campos em Branco")
                return
            }
            await apiLocal.post('/CadastrarUsuarios', {
                nome,
                email,
                password
            })
            toast.success('Cadastro Efetuado Com Sucesso', {
                toastId: 'ToastId'
            })
            mudarTela('/')

        } catch (err) {
            toast.error('Erro ao Comunicar com BackEnd', {
                toastId: 'ToastId'
            })
        }

    }

    return (
        <div className='conteinerCadastroUsuariosGeral'>
            <h1>Formulario de Cadastro de Usuários</h1>
            <form onSubmit={cadastroUsuarios} className=''>
                <input
                    type="text"
                    placeholder='Digite Seu Nome'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className=''
                />
                <input
                    type="text"
                    placeholder='Digite Seu E-Mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                     className=''
                />
                <input
                    type="password"
                    placeholder='Digite Sua Senha'
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                     className=''
                />
                <button type='submit' className=''>Enviar</button>
            </form>
            <Link to='/' className='buttonVoltar' >Voltar Inicio</Link>
        </div>
    )
}