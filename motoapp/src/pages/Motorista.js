import React from 'react';

import './Motorista.css';
import Header from '../layout/Header';

export default function Motorista() {
    return (
        <>
            <Header />
            <div className="motorista">
                <div className="bio">
                    <img src="https://via.placeholder.com/300" alt="" />
                    <h4>Nome</h4>
                    <h5>Nota - 4,9</h5>
                    <h5>Valor por jornada - R$100</h5>
                    <h5>Status - Disponível</h5>
                    <button className="btn btn-block btn-dark">Contratar</button>
                </div>
                <div className="stats">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Entregas</h4>
                            <h5 className="card-text">100</h5>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Elogios</h4>
                            <h5 className="card-text">100</h5>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Reclamações</h4>
                            <h5 className="card-text">100</h5>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Total Arrecadado</h4>
                            <h5 className="card-text">R$10000,00</h5>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Média Mensal</h4>
                            <h5 className="card-text">R$1000,00</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
