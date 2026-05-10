import React from 'react'
import Navbar2 from './Navbar2'
import { useContext } from 'react'
import { themeDataContext } from '../context/ThemeContext'
// import { postDataContext } from '../context/ThemeContext'

const Navbar = () => {
    
    // console.log(props.children)
    // const data = useContext(postDataContext)
    // console.log(data)

    const {theme} = useContext(themeDataContext)

    return (
        <div className={theme}>
            <h2> Aura Farming of xyz... </h2>
            <Navbar2/>
        </div>
    )
}

export default Navbar
