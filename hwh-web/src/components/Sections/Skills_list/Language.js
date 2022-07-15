import React from 'react'
import '../../../App.css'
import './Language.css'
import CustomData from './Language.json'


const Data = () => {

    return (
        <>
        {Object.keys(CustomData).map((key,i) => ( 
            <p key={i}>
            <div className='language_container'>
                <p  className='language_text'> {CustomData[key].title} </p>
                <div className='language_bar_container'>
                    <div className='language_bar_item' style={{width: CustomData[key].percent , "background-color":CustomData[key].color}}> {CustomData[key].percent} </div>
                </div>
            </div>
            </p>
        ))}
        </>  
    )
}

export default function Language(){
    
    return(
        <div className='language'>
            <h1>Language</h1>
            <div className='language_list'>
              <Data/>
            </div>
        </div>
    )
}