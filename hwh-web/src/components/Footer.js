import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className='footer-subscription-heading'>
                Join us
            </p>
            <p className='footer-subscription-text'>
                unsub
            </p>
            <div className='input-areas'>
                <form>
                    <input type='email' name='email' placeholder='Your Email' className='footer-input'/>
                    <Button buttonStyle='btn--outline'>Sub Here</Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Title1</h2>
                    <Link to="/Other"> Other here </Link>
                    <Link to="/profile"> Profile </Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Title2</h2>
                    <Link to="/Other"> Other here </Link>
                    <Link to="/profile"> Profile </Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Title3</h2>
                    <Link to="/Other"> Other here22 </Link>
                    <Link to="/profile"> Profile </Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Title4</h2>
                    <Link to="/Other"> Other here2222 </Link>
                    <Link to="/profile"> Profile </Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                        LOGO <i className='fab fa-typo3'></i>
                    </Link>
                </div>
                <small className='website-rights'> 2022 weak </small>
                <div className='social-icons'>
                    <Link className='social-icon-link facebook' to="/" target='_blank' aria-label='Facebook'>
                        <i className='fab fa-facebook-f' />
                    </Link>
                    <Link className='social-icon-link twitter' to="/" target='_blank' aria-label='Twitter'>
                        <i className='fab fa-twitter' />
                    </Link>
                    <Link className='social-icon-link linkedin' to="/" target='_blank' aria-label='Linkedin'>
                        <i className='fab fa-linkedin' />
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer