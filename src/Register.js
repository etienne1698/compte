import React from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from './AuthService';

function Register() {
    const history = useHistory();

    function submit(event) {
        event.preventDefault()
        let data = {}
        for (let elem of event.target.elements) {
          if (elem.name) {
              data[elem.name] = elem.value
            }
        }
        if(data.name && data.firstName && data.email && data.password) {
            AuthService.authenticate(() => history.push('/'))
        }
    }

    return (
        <div className='register login'>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor='name'>Nom</label>
                    <input placeholder='Nom' id='name' name='name' required />
                    <label htmlFor='firstName'>Prenom</label>
                    <input placeholder='Prenom' id='firstName' name='firstName' required />
                    <label htmlFor='email'>Email</label>
                    <input placeholder='Email' id='email' name='email' type='email' required />
                    <label htmlFor='password'>Mot de passe</label>
                    <input placeholder='Mot de passe' id='password' name='password' type='password' required />
                </div>
                <div className='center'>
                    <button type='submit' className='button outline'>Creer un compte</button>
                </div>
            </form>
        </div>
    )
}

export default Register;