import React from 'react';
import ProfileImage from './ImgProfile.jpg';

function ContactRequest({name}) {
    return (
        <div className='divGrey marginTop'>
            <div className='line'>
                <img src={ProfileImage} alt="ProfilDeLutilisateur" className='marginRight' />
                <div className='autoSize'>
                    <label>{name}</label>
                    <div className='left'>
                        <button className='red marginRight'>Decliner</button>
                        <button className='green'>Accepter</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ContactRequests() {
    return (
        <div>
            <ContactRequest name='Turite JACK'/>
            <ContactRequest name='Babou JACK'/>
        </div>
    )
}

export default ContactRequests;