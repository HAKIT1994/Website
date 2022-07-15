import React from 'react'
import './Introduction.css'

function Introduction() {
    return (
        <div className='intro' id="intro">
            <div className='intro__container'>
                <ul className='intro__items'>
                    <img src="images/HWH_Photo.jpg" alt="Tony_Photo" className='intro_photo'/>
                    <div className='intro_description'>
                        <h3>Security Consultant / Engineer <br/>
                            With Front-End Development
                        </h3>
                    </div>
                </ul>
            </div>
        </div>
    )


    
}

export default Introduction;