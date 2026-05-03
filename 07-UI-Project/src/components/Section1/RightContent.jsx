import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
    return (
        <div id="different" className='h-full rounded-4-xl flex flex-nowrap overflow-x-auto gap-10 p-6 w-2/3'>
            {props.users.map(function(elem,idx){
                return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} intro={elem.intro} color={elem.color}/>
            })}
        </div>
    )
}

export default RightContent