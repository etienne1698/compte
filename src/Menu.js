import React from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineBars } from 'react-icons/ai';
import ProfilImage from './ImgProfil.jpg';

function Menu() {
    const history = useHistory();
    function RedirectToProfil() {
        history.push('/profil')
    }
    let style = { color: 'white', width: '30px', height: '30px' };
    return (
        <div className='menu'>
            <img src={ProfilImage} alt="Profile" onClick={RedirectToProfil} />
            <button>
                <AiOutlineBars style={style} />
            </button>
        </div>
    )
}

export default Menu;