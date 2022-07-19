import React from 'react'
import './Popup.css'

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup_inner'>
            <button className='close_btn' onClick ={()=>props.setTrigger(false)}>&#x2716;</button>
                {props.children}
        </div>
    </div>
  ) : "";
}

export default Popup