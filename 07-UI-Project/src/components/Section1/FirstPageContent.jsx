import React from 'react'
import RightContent from './RightContent'
import LeftContent from './LeftContent'

const FirstPageContent = (props) => {
    return (
        <div className='pb-16 pt-6 flex items-center gap-10 justify-between h-[90vh] px-18'>
            <LeftContent />
            <RightContent users={props.users}/>
        </div>
    )
}

export default FirstPageContent
