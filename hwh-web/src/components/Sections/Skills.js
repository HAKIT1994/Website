import React from 'react'
import './Skills.css'
import { Link, Routes, Route } from 'react-router-dom'
import Programming from './Skills_list/Programming'
import System from './Skills_list/System'
import Other from './Skills_list/Other'
import Language from './Skills_list/Language'



function Skills () { 
        return (
        <>
            <div className='skills_container' id="skills">
            <nav role="mid">
                <div className='skills_menu'>
                    <ul>
                        <li> <Link to="/programming"> Programming &nbsp; <i className='fab fa-dev'></i> </Link> </li>
                        <li> <Link to="/system"> Systems &nbsp; <i className='fas fa-server'></i></Link></li>
                        <li> <Link to="/other"> Other &nbsp; <i className='fas fa-photo-video'></i></Link></li>
                        <li> <Link to="/language"> Language &nbsp; <i className='fas fa-language'></i></Link></li>
                    </ul>
                </div>
            </nav>
            <div className='skills_display'> 
                <Routes>
                    <Route exact path='/' element={<Programming/>} />
                    <Route exact path='/programming' element={<Programming/>} />
                    <Route path='/system' element={<System/>} />
                    <Route path='/other' element={<Other/>} />
                    <Route path='/language' element={<Language/>} />
                </Routes>
            </div>
            </div>
        </>
        )
}

export default Skills