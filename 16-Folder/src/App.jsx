import React from 'react'
import { useEffect, useState } from 'react'

const App = () => {

  // const [num, setNum] = useState(0) 
  // const [num2, setNum2] = useState(100) 

  // useEffect(function() {
  //   console.log('useEffect is Running')
  // }, [num])

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging() {
    console.log('A is changed')
  } 

  function bChanging() {  
    console.log('B is changed')
  }
  
  useEffect(function () {
    aChanging()
    // console.log('UseEffect is Running..')
  }, [a])
  useEffect(function () {
    bChanging()
    // console.log('UseEffect is Running..')
  }, [b])

  return (
    // <div>
    //   <h2> Value of num is {num} </h2>
    //   <h2> Value of num2 is {num2}</h2>
    //   <button onMouseEnter = {() => {
    //     setNum(num+1)
    //   }} onMouseLeave = {() => {
    //     setNum2(num2+10)
    //   }}> Hover Me </button>
    // </div>

    <div>
      <h1> A is {a} </h1>
      <h1> B is {b} </h1>
      <button onClick={() => {
        setA(a+1)
      }}> Change A </button>
      <button onClick = {() => {
        setB(b-1)
      }}> Change B </button>
    </div>
  )
}

export default App
