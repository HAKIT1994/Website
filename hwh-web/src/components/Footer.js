import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='social-media'>
                <div className='social-icons'>
                    <Link className='social-icon-link' to="/" target='_blank' aria-label='Github'>
                        <i className='fab fa-github' />
                    </Link>
                    <Link className='social-icon-link' to="/" target='_blank' aria-label='Linkedin'>
                        <i className='fab fa-linkedin' />
                    </Link>
                </div>
        </section>
    </div>
  )
}

export default Footer