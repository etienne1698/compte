import React from 'react';

function Footer() {
    function createTransaction() {

    }

    return (
        <div className='center footer'>
            <button className='button marginTenPixel' onClick={() => createTransaction()}>Créer une transaction</button>
        </div>
    )
}

export default Footer;