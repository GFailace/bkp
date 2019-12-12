import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Sobre from './pages/Sobre';
import Faq from './pages/Faq';
import Contato from './pages/Contato';
import Motorista from './pages/Motorista';
import CadastroMotorista from './pages/cadastro/CadastroMotorista';

ReactDOM.render(<BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/como-funciona" component={Sobre} />
        <Route path="/faq" component={Faq} />
        <Route path="/contato" component={Contato} />
        <Route path="/motorista" component={Motorista} />
        <Route path="/cadastro-motorista" component={CadastroMotorista} />
    </Switch>
</ BrowserRouter>, document.getElementById('root'));