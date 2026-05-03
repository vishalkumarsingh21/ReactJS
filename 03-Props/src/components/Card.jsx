import React from 'react'

const Card = (props) => {
    // console.log(props)
    return (
        <div className='card'>
            <img src={props.img} alt="" />
            <h1> {props.user}, {props.age} </h1>
            <p> Satyam heart was broken by same bitch 2 times: once in 8th and another time in 10th</p>
            <p> Ek baar katwa ke pet nahi bhara uska </p>
            <button> View Profile </button>
        </div>
    )
}

export default Card
