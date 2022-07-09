import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check OUT THIS!</h1>
        <div className='cards__container'>
            <ul className='cards__items'>
                <CardItem 
                src="images/img-9.jpg"
                text="Explore the hidden thing"
                label="Adventure"
                path='/services'
                />
                 <CardItem 
                src="images/img-1.jpg"
                text="Explore the hidden thing22"
                label="Adventure22"
                path='/services2'
                />
                <CardItem 
                src="images/img-5.jpg"
                text="Explore the hidden thing2233"
                label="Adventure23"
                path='/services3'
                />
            </ul>

        </div>
    </div>
  )
}

export default Cards