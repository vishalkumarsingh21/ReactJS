import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex py-4 px-8 bg-cyan-800 items-center justify-between'>
            <h2 className='text-2xl font-semibold'> Aura Farming </h2>
            <div className='flex gap-10'>
                <Link to="/" className='text-lg font-semibold'> Home </Link>
                <Link to="/about" className='text-lg font-semibold'> About </Link>
                <Link to="/courses" className='text-lg font-semibold'> Courses </Link>
                <Link to="/product" className='text-lg font-semibold'> Product </Link>
            </div>
        </div>
    )
}

export default Navbar
