import React from 'react';
import { useHistory } from 'react-router-dom';
import ProfileImage from '../assets/img/ImgProfile.jpg';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const style = { color: 'white', width: '30px', height: '30px' };

function MyMenu({ Deconnection, RedirectToProfile, RedirectToHome, history }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const options = [
        {
            label: 'Deconnexion',
            component: Deconnection
        },
        {
            label: 'Profil',
            component: RedirectToProfile,
            path: '/profile'
        },
        {
            label: 'Home',
            component: RedirectToHome,
            path: '/'
        }
    ];

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
                style={{ padding: 0 }}
            >
                <MoreVertIcon style={style} />
            </IconButton>
            <Menu
                id="menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
            >
                {options.map((option) => (
                    <MenuItem key={option.label} disabled={option.path === history.location.pathname} onClick={option.component}>
                        {option.label}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

function Header() {
    const history = useHistory();


    function RedirectToProfile() {
        history.push('/profile')
    }

    function RedirectToHome() {
        history.push('/')
    }

    function Deconnection() {

    }


    return (
        <div className='header'>
            <div className={'menu' + (history.location.pathname === '/profile' ? ' left' : '')}>
                {history.location.pathname !== '/profile' ? <button><img src={ProfileImage} alt="Profil" onClick={RedirectToProfile} /></button> : ''}
                <MyMenu history={history}
                    Deconnection={Deconnection}
                    RedirectToHome={RedirectToHome}
                    RedirectToProfile={RedirectToProfile}
                />
            </div>
        </div>
    )
}

export default Header;