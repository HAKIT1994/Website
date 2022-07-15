import React from 'react'
import { Link } from 'react-router-dom'


function AchievementItem(props) {
  return (
    <>
        <li className='Achievement__item'>
            <Link  className='Achievement__item__link' to={props.src} target="_blank" rel="noreferrer">
                <figure className='Achievement__item__pic-wrap' data-category={props.label} >
                    <img className='Achievement__item__img' src={props.src} alt="Project" />
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
