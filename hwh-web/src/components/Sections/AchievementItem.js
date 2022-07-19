import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Popup from './Popup'


function AchievementItem(props) {

    const [buttonPopup, setButtonPopup] = useState(false)

  return (
    <>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
            <h3> {props.title} </h3>
            <img className='popup_img' src={props.src}/>
        </Popup>


        <li className='Achievement__item'>
            <Link  className='Achievement__item__link' to='#' onClick ={()=>setButtonPopup(true)}>
                <figure className='Achievement__item__pic-wrap' data-category={props.label} >
                    <img className='Achievement__item__img' src={props.src} alt="Achievement" />
                </figure>
                <div className="Achievement__item__info" >
                    <h5 className='Achievement__item__text'>{props.text}</h5>
                </div>
            </Link>
        </li>
    </>
  )
}

export default AchievementItem
