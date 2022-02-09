import React from 'react';
import './header.css'
const Header = () => {
    return (

            <header className='header'>
                <h1 className='header-title'> Todo list</h1>
                <p className='header-count'>Количество ваших заданий</p>
            </header>

    );
};

export default Header;