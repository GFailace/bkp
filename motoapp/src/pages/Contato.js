import React from 'react';
import Header from '../layout/Header';

import './Contato.css';

export default function Contato() {
    return (
        <>
            <Header />
            <div className="contato">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <input className="form-control" name="firstname" placeholder="Nome" type="text" required autofocus />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <input className="form-control" name="lastname" placeholder="Sobrenome" type="text" required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <input className="form-control" name="email" placeholder="E-mail" type="text" required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <input className="form-control" name="subject" placeholder="Assunto" type="text" required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <textarea className="form-control" placeholder="Mensagem..." rows="6" name="message" required></textarea>
                    </div>
                </div>
                <div className="panel-footer">
                    <input type="submit" className="btn btn-success" value="Enviar" />
                    <input type="reset" className="btn btn-danger" value="Limpar" />
                </div>
            </div>
        </>
    );
}
