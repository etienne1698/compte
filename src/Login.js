import React from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from './AuthService';



function Login() {
    const history = useHistory();

    function submit(event) {
        event.preventDefault();
        let data = {}
        for (let elem of event.target.elements) {
          if (elem.name) {
              data[elem.name] = elem.value
            }
        }
        if(data.email && data.password) {
            AuthService.authenticate(() => history.push('/'))
        }
    }

    return (
        <div className='login'>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input placeholder='Email' id='email' name='email' type='email' required />
                    <label htmlFor='password'>Mot de passe</label>
                    <input placeholder='Mot de passe' id='password' name='password' type='password' required />
                </div>
                <div className='center'>
                    <button type='submit' className='button'>Connexion</button>
                    <label>-- ou --</label>
                    <button type='button' className='button outline' onClick={() => history.push('/register')}>Creer un compte</button>
                </div>
            </form>
        </div>
    )
}

export default Login;