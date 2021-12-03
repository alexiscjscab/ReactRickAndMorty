import React from 'react';
import './NavBar.scss'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
const NavBar = () => {
    return (
        <nav className='nav'>
            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>

            <div className='link'>
                <p>
                    <Link to='/home'>
                        All
                    </Link>
                </p>
                <p>
                    <Link to='/location'>
                        Location
                    </Link>
                </p>
                <p>
                    <Link to='/episodes'>
                        Episodes
                    </Link>
                </p>
            </div>
        </nav>
    )
}

export default NavBar
