import React, { useContext, useState } from 'react'
import { AutenticadoContexto } from '../Contexts/authContexts'
import { Link } from 'react-router-dom'
import './index.css'
import { toast } from 'react-toastify'

export default function Inicio() {

    const { loginEntrada } = useContext(AutenticadoContexto)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function dadosLogin(e) {
        e.preventDefault()
        if (!email || !password) {
            toast.warning('Preencha todos os campos')
            return
        }
        try {
            await loginEntrada(email, password)
        } catch (err) {
            toast.error('Erro ao tentar login.')
        }
    }

    return (
        <div className='containerInicioGeral'>
            <h1>Login CRUD</h1>
            <form onSubmit={dadosLogin} className='login-form'>
                <input
                    type="email"
                    placeholder='Digite o E-mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='input-field'
                />

                <input
                    type="password"
                    placeholder='Digite a Senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='input-field'
                />

                <button className='submit-button'>Enviar</button>
            </form>
            <p className='register-link'>Não tem uma conta? Clique <Link to='/CadastroUsuarios'>aqui</Link> para se cadastrar.</p>
        </div>
    )
}
