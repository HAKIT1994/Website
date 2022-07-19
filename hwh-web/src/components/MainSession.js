import React from 'react';
import './MainSession.css';
import '../App.css';
import 'react-dropdown-now/style.css';


function MainSession() {
  return (
    <>
    <div className='main-container' id='home'>
        <h1>Tony Ha</h1>
        <p> Security Consultant/ Web Developer </p>
        <div className='main-btns'>
        
        <button className="button">Resume</button>

        <div class="dropdown">
        <button class="dropbtn">Language&nbsp; <i className="fas fa-globe-asia"/></button>
          <div class="dropdown-content">         
            <a href="./files/Ha Wing Hong Resume.pdf" target="_blank">English</a>
            <a href="./files/Ha Wing Hong 職務経歴書.pdf" target="_blank">Japanese</a>
          </div>
        </div>    

        </div>
    </div>
    </>
  )
}

export default MainSession