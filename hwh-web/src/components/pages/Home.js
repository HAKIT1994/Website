import React from 'react'
import '../../App.css'
import MainSession from '../MainSession'
import Achievement from '../Sections/Achievement'
import Intro from '../Sections/Introduction'
import Skills from '../Sections/Skills'

function Home () {
    return (
        <>
            <MainSession/>
            <Intro />
            <Skills />
            <Achievement /> 
        </>
    )
}

export default Home