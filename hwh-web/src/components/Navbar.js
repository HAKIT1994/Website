import React, { useState } from 'react';
import { Link } from 'react-scroll'
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [SetButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 600){
        SetButton(false);
            } else {
                SetButton(true);
            }
        };

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="home" smooth className="navbar-logo" onClick={closeMobileMenu} >
                    <i className='fas fa-user'> &nbsp; </i>
                        Ha Wing Hong 	
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'} style={{display: 'flex', listStyle: 'none', justifyContent: 'flex-end'}}>
                        <li className='nav-item'>
                            <Link to='home' smooth className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='intro' smooth className='nav-links' onClick={closeMobileMenu}>
                                Intro
                            </Link>
                        </li>
                        <li>
                            <Link to='skills' smooth className='nav-links' onClick={closeMobileMenu}>
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link to='achievement' smooth className='nav-links' onClick={closeMobileMenu}>
                                Achievement
                            </Link>
                        </li>
                        <li>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;