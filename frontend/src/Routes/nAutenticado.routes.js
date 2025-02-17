import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Inicio from '../Inicio'
import CadastrarUsuarios from '../CadastraUsuarios/CadastroUsuarios'
import PaginaPrincipal from '../pagina_principal/pagina_principal'
import Questionario from '../questionario/questionario'

export default function NAutenticado() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={< Inicio />} />
                <Route path='/questionario' element={< Questionario/>} />
                <Route path='/' element={< PaginaPrincipal />} />
                <Route path='/CadastroUsuarios' element={< CadastrarUsuarios />} />
                
                <Route path='*' element={< Inicio />} />
            </Routes>
        </BrowserRouter>
    )
}