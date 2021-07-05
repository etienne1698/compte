import React from 'react';
import Menu from './Menu';
import ProfileImage from './ImgProfile.jpg';
import Contacts from './Contacts';
import ContactRequests from './ContactRequests';
import OtherContacts from './OtherContacts';

function Profile() {
    return (
        <div className='haveHeader'>
            <Menu />
            <div className='padding'>
                <div className='center'>
                    <img src={ProfileImage} alt="Profil" className='big' />
                    <label>Geoffroy POULET</label>
                </div>
                <label>Recherche</label>
                <input placeholder='Texte' id='research' name='research'/>
                <label>Demandes</label>
                <ContactRequests/>
                <label>Mes contacts</label>
                <Contacts/>
                <label>Autre contacts</label>
                <OtherContacts/>
            </div>
        </div>
    )
}

export default Profile;