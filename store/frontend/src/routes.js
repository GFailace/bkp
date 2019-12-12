import { BrowserRouter, Route } from 'react-router-dom'
import React from 'react'

import Cadastrar from './pages/Cadastrar'
import Detalhes from './pages/Detalhes';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Cadastrar} />
            <Route path="/main" component={Cadastrar} />
            <Route path="detalhes/:id" component={Detalhes} />
        </BrowserRouter>
    )
}