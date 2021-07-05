import React from 'react';
import ProfileImage from '../assets/img/ImgProfile.jpg';

function OtherContact({name}) {
    return (
        <div className='divGrey marginTop'>
            <div className='line'>
                <img src={ProfileImage} alt="ProfilDeLutilisateur" className='marginRight' />
                <div className='line autoSize separate'>
                    <label>{name}</label>
                    <button className='green'>Ajouter</button>
                </div>
            </div>
        </div>
    )
}

function OtherContacts() {
    return (
        <div>
            <OtherContact name='Chatchou BIMEE'/>
            <OtherContact name='Chienchou BIMEE'/>
        </div>
    )
}

export default OtherContacts;