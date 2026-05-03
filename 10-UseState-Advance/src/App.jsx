import React, {useState} from 'react'

function App() {

  // const [num, setNum] = useState(0)
  // const buttonClicked = () => {
    //   console.log(num)
    //   setNum(num+2)
    //   console.log(num)
  // } 
  
  // const [num, setNum] = useState({user:'Vishal', age:19})
  // const buttonClicked = () => {
    // console.log(num)
    // console.log(num.user)
    // console.log(num.age)
    // const newNum = {...num}
    // console.log(newNum)
    // newNum.user = 'Rohan'
    // newNum.age = 20
    // console.log(newNum)
    // setNum(newNum)
  // } 

  // const [num, setNum] = useState([10,20,30])
  // const buttonClicked = () => {
  //   const newNum = [...num]
  //   newNum.push(40)
  //   setNum(newNum)
  // }

  // const [num, setNum] = useState({user: 'Mayank', age: 18})
  // const buttonClicked = () => {
  //   setNum(prev => ({...prev, age: 67}))
  // }

  const [num, setNum] = useState(10)
  const buttonClicked = () => {
    setNum(prev => (prev+1))
    setNum(prev => (prev+1))
    setNum(prev => (prev+1))
  }

  return (
    <div>
      <h1> {num} </h1>
      <button onClick={buttonClicked}> Pull me Down </button>
    </div>
    // <div>
    //   <h1> {num.user}, {num.age} </h1>
    //   <button onClick={buttonClicked}> Pull me Down </button>
    // </div>
    // <div>
    //   <h1> {num} </h1>
    //   <button onClick={buttonClicked}> Pull me Down </button>
    // </div>
  )
}

export default App
