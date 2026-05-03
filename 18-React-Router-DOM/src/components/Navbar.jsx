import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className='nav'>
                <h3> Aura Farming </h3>
                <div>
                    {/* No reload (Single Page Application)*/}
                    <Link to='/'> Home </Link>
                    <Link to='/about'> About </Link>
                    <Link to='/contact'> Contact </Link>
                    <Link to='/product'> Product </Link>
                    {/* Reload (Multi Page Application)*/}
                    {/* <a href="/" className='no-bg'> Home </a>
                    <a href="/about" className='no-bg'> About </a>
                    <a href="/contact" className='no-bg'> Contact </a> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar
