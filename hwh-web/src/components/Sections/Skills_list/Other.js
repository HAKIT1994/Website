import React from 'react'
import '../../../App.css'
import './Other.css'
import CustomData from './Other.json'


const Data = () => {

    return (
        <>
        {Object.keys(CustomData).map((key,i) => ( 
            <p key={i}>
            <div className='other_container'>
                <p  className='other_text'> {CustomData[key].title} </p>
                <div className='other_bar_container'>
                    <div className='other_bar_item' style={{width: CustomData[key].percent , "background-color":CustomData[key].color}}> {CustomData[key].percent} </div>
                </div>
            </div>
            </p>
        ))}
        </>  
    )
}

export default function Other(){
    
    return(
        <div className='other'>
            <h1>Other Skills</h1>
            <div className='other_list'>
              <Data/>
            </div>
        </div>
    )
}