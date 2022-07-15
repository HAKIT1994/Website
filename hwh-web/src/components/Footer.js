import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Mailto({ email, subject, body, ...props }) {
  return (
    <a className='social-icon-link'  target='_blank' aria-label='Mail' 
    href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
      {props.children}
    </a>
  );
}

function Footer() {
  return (
    <div className='footer-container'>
        <section className='social-media'>
                <div className='social-icons'>
                    <Mailto email="hakit94@yahoo.com"subject="[From Website]" body="">
                        <i className='fas fa-envelope' />
                    </Mailto>
                    <a className='social-icon-link' href="https://github.com/HAKIT1994/Website" target='_blank' aria-label='Github'>
                        <i className='fab fa-github' />
                    </a>
                    <Link className='social-icon-link' to="#" target='_blank' aria-label='Linkedin'>
                        <i className='fab fa-linkedin' />
                    </Link>
                </div>
        </section>
    </div>
  )
}

export default Footer