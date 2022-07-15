import React from 'react'
import '../../../App.css'
import './Programming.css'
import CustomData from './Programming.json'


const Data = () => {

    return (
        <>
        {Object.keys(CustomData).map((key,i) => ( 
            <p key={i}>
            <div className='programming_container'>
                <p  className='programming_text'> {CustomData[key].title} </p>
                <div className='programming_bar_container'>
                    <div className='programming_bar_item' style={{width: CustomData[key].percent , "background-color":CustomData[key].color}}> {CustomData[key].percent} </div>
                </div>
            </div>
            </p>
        ))}
        </>  
    )
}

export default function Programming(){
    
    return(
        <div className='programming'>
            <h1>Programming Language</h1>
            <div className='programming_list'>
              <Data/>
            </div>
        </div>
    )
}