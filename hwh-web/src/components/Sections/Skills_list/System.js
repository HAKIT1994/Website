import React from 'react'
import '../../../App.css'
import './System.css'
import CustomData from './System.json'


const Data = () => {

    return (
        <>
        {Object.keys(CustomData).map((key,i) => ( 
            <p key={i}>
            <div className='system_container'>
                <p  className='system_text'> {CustomData[key].title} </p>
                <div className='system_bar_container'>
                    <div className='system_bar_item' style={{width: CustomData[key].percent , "background-color":CustomData[key].color}}> {CustomData[key].percent} </div>
                </div>
            </div>
            </p>
        ))}
        </>  
    )
}

export default function System(){
    
    return(
        <div className='system'>
            <h1>Operation System</h1>
            <div className='system_list'>
              <Data/>
            </div>
        </div>
    )
}