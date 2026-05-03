import React, { useState } from 'react'
import './Styling.css'

const Index = () => {
    const [num, setNum] = useState(0)
    
    function onIncrement() {
        setNum(num+1)
    }
    function onDecrement() {
        setNum(num-1)
    }
    function onIncrementFive() {
        setNum(num+5)
    }
    function onDecrementFive() {
        setNum(num-5)
    }
    function onReset() {
        setNum(0)
    }

    return (
        <div>
            <h1> Hello, Your current number is {num} </h1>
            <button onClick={onIncrement}> Increase </button>
            <button onClick={onDecrement}> Decrease </button>
            <button onClick={onIncrementFive}> Increase By 5 </button>
            <button onClick={onDecrementFive}> Decrease By 5 </button>
            <button onClick={onReset}> Reset </button>
        </div>
    )
}

export default Index
