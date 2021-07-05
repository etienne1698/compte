import React from 'react';
import ProfileImage from './ImgProfile.jpg';

function OperationToValidate({ name, type, amount, label, date }) {
    return (
        <div className='divGrey marginTop'>
            <div className='line'>
                <img src={ProfileImage} alt="ProfilDeLutilisateur" className='marginRight' />
                <div className='line separate autoSize'>
                    <div>
                        <label>{name}</label>
                        <label className='smallGrey'>{label}</label>
                    </div>
                    <div className='left'>
                        <label className={(type === 'debt' ? 'red' : 'green')}>{(type === 'debt' ? 'Dette' : 'Credit') + ' - ' + amount + ' €'}</label>
                        <label className='smallGrey'>{date}</label>
                    </div>
                </div>
            </div>
            <div className='left'>
                <button className='red marginRight'>Decliner</button>
                <button className='green'>Accepter</button>
            </div>
        </div>
    )
}

function OperationToValidates() {
    return (
        <div>
            <OperationToValidate name='Colin ROBERT' type='debt' amount={54.10} label='Je sais pas' date='10/06/2021' />
            <OperationToValidate name='Etienne ROBERT' type='credit' amount={100} label='coucou je te donne ca' date='14/08/2021' />
            <OperationToValidate name='Prenom NOM' type='credit' amount={0} label='raison' date='jj/mm/aaaa' />
        </div>
    )
}

export default OperationToValidates;