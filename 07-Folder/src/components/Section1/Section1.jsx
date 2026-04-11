import React from 'react'
import Navbar from './Navbar'
import FirstPageContent from './FirstPageContent'

const Section1 = (props) => {
    return (
        <div className='h-screen w-full'> 
            <Navbar /> 
            <FirstPageContent users={props.users}/>
        </div>
    )
}

export default Section1
