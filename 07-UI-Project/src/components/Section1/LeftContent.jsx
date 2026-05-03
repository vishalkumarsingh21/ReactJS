import React from 'react'
import HeroText from './HeroText'
import ArrowSign from './ArrowSign'

const LeftContent = () => {
    return (
        <div className='h-full flex flex-col justify-between w-1/3'>
            <HeroText/>
            <ArrowSign/>
        </div>
    )
}

export default LeftContent
