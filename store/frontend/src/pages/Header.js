import React from 'react'
import './Header.css'
import logo from '../assets/logotipo.gif'

export default function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="Getnet" />
            </div>
            <div className="name">
                <h2>Cadastro de Inventário - Ativo/Sistema</h2>
            </div>
        </div>
    )
}