import React from 'react'

const App = () => {

  // localStorage.clear()
  // sessionStorage.clear()

  // localStorage.setItem('user','Mayank Monkey')
  // localStorage.setItem('age', 19)
  // const a = localStorage.getItem('user')
  // const b = localStorage.getItem('age')
  // console.log(a, b)

  // localStorage.removeItem('user')
  // localStorage.removeItem('age')

  const a = {
    username: 'Arpit',
    age: '19',
    city: 'Bhosari'
  }
  // console.log(a)

  localStorage.setItem('user', JSON.stringify(a))

  const b = JSON.parse(localStorage.getItem('user'))
  console.log(b)

  return (
    <div>
      
    </div>
  )
}

export default App
