import React from 'react';

import './Headline.css';

export default function Headline() {
    return (
        <div className="position-relative headline">
            <div className="col-md-5 p-lg-5 mx-auto">
                <h1 className="display-4 font-weight-normal">Dificuldades na entrega?</h1>
                <p className="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
                <a className="btn btn-outline-secondary" href="/">Saiba Mais</a>
            </div>
            <div className="product-device shadow-sm d-none d-md-block"></div>
            <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
    );
}