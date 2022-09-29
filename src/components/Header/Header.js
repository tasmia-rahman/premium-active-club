import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='header'>
            <div className='title'>
                <FontAwesomeIcon className='icon' icon={faDumbbell} />
                <h2>PREMIUM-ACTIVE-CLUB</h2>
            </div>
            <h4>Select today’s exercise</h4>
        </div>
    );
};

export default Header;