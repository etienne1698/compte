import React from 'react';
import ProfileImage from '../assets/img/ImgProfile.jpg';
import { AiFillDollarCircle } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

function Contact({ name, type, amount }) {
    const history = useHistory();
    const style = { color: '#F1CB00', width: '20px', height: '20px' };
    return (
        <div className='divGrey line marginTop'>
            <img src={ProfileImage} alt="ProfilDeLutilisateur" className='marginRight' />
            <div className='line separate autoSize'>
                <div>
                    <label>{name}</label>
                    {history.location.pathname === '/profile' ? <button className='smallRed'>Supprimer</button> : ''}
                </div>
                <div className='left'>
                    <label className={(type === 'debt' ? 'red' : 'green')}>{(type === 'debt' ? 'Dette' : 'Credit') + ' - ' + amount + ' €'}</label>
                    <button className='line left divButton'>Historique <AiFillDollarCircle style={style} /></button>
                </div>
            </div>
        </div>
    )
}

function Contacts() {
    return (
        <div>
            <Contact name='Colin ROBERT' type='debt' amount={54.10} />
            <Contact name='Etienne ROBERT' type='credit' amount={100} />
            <Contact name='Prenom NOM' type='credit' amount={0} />
        </div>
    )
}

export default Contacts;