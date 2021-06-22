import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className='header'>
            <IconButton>
            <PersonIcon fontSize="large" className="header__icon"/>
            </IconButton>
            
            <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53b.png" className="header__logo" alt=""/>

            <IconButton>
            <ForumIcon fontSize="large" className="header__icon"/>
            </IconButton>
        </div>
    )
}

export default Header
