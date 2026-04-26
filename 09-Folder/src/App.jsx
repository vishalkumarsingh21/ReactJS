import React from 'react'
import Index from './components/BasicCounter/Index'

const App = () => {

  // const [num, setNum] = useState(0)
  // const [userName, setUsername] = useState('Satyam')
  // const [users, setUsers] = useState([10, 20, 30])

  // function changeVal() {
  //   setNum(30)
  //   setUsername('Rohan')
  //   setUsers([40, 50, 60])
  // }

  return (
    
    // <div>
    //  <h1> Value of num is {num} <br/> Value of userName is {userName} <br/> Values of users are {users}</h1> 
    //  <button onClick={changeVal}> Click Me Daddy! </button> 
    // </div>

    <div>
      <Index />
    </div>
  )
}

export default App
