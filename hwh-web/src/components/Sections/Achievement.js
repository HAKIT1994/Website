import React from 'react'
import AchievementItem from './AchievementItem'
import './Achievement.css'

function Achievement() {
  return (
    <div className='Achievement' id="achievement">
        <h1>Achievement</h1>
        <div className='Achievement__container'>
            <ul className='Achievement__items'>
                <AchievementItem 
                src="images/JLPTN2.png"
                text="Japanese-Language Proficiency Test N2 (JLPT N2)"
                label="2021"
                />
                 <AchievementItem 
                src="images/ITIL.png"
                text="Information Technology Infrastructure Library V3 Foundation
                (ITIL v3)"
                label="2015"
                />
            </ul>
        </div>
    </div>
  )
}

export default Achievement