import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    const navigate = useNavigate()

    return (
        <div className='py-1 px-5 bg-cyan-700'>
            <button
                className='bg-green-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'
                onClick={() => {
                    navigate('/')
                }}>
                Return to Home Page
            </button>
            <button
                className='bg-green-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'
                onClick={() => {
                    navigate(-1)
                }}>
                Back
            </button>
        </div>
    )
}

export default Navbar2
