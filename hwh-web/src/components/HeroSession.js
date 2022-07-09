import React from 'react';
import { Button } from './Button';
import './HeroSession.css';
import '../App.css';

function HeroSession() {
  return (
    <div className='hero-container'>
        {/* <video src="../../public/videos/video-2.mp4" autoplay loop muted /> */}
        <h1> ADVENTURE AWAITS</h1>
        <p> hello 2 </p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle="btn--outline" buttonSize="btn--large"> Click Here </Button>
            <Button className='btns' buttonStyle="btn--primary" buttonSize="btn--large"> TRALIER <i className='far fa-play-circle' /></Button>
        </div>
    </div>
  )
}

export default HeroSession