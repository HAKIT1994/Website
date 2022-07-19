import React from 'react'
import './Introduction.css'

function Introduction() {
    return (
        <div className='intro' id="intro">
            <div className='intro__container'>
                <ul className='intro__items'>
                    <img src="images/HWH_Photo.jpg" alt="Tony_Photo" className='intro_photo'/>
                    <div className='intro_description'>
                        <h3>  Experience on Security consultanting and Engineering. provide different customer services to customer.
                                <br/><br/>
                              Interested on Web Front-End Development. Good at use ReactJS for Development.
                        </h3>
                    </div>
                </ul>
            </div>
        </div>
    )


    
}

export default Introduction;