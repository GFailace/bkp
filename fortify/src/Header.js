import React from 'react';

import './Header.css';
import logo from './assets/logotipo.gif'

export default function Header() {
    return (
        <div>
            <nav className="navbar">
                <img src={logo} alt="Fortify Scans - Getnet" />
            </nav>
        </div>
    );
}
