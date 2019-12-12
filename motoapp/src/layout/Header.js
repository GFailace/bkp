import React from 'react';

import './Header.css';

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="/">Moto App</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/como-funciona">Como Funciona</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/faq">Dúvidas Frequentes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contato">Fale Conosco</a>
                        </li>
                    </ul>
                </div>
                <form class="form-inline">
                    <button class="btn btn-outline-dark my-2 my-sm-0">Login</button>
                    <button class="btn btn-outline-dark my-2 my-sm-0">Cadastre-se</button>
                </form>
            </nav>
        </div>
    );
}
