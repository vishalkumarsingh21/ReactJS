import React, {useState} from 'react'
import axios, { Axios } from 'axios'

const App = () => {

  const [data, setData] = useState([])

  // FETCH METHOD

  // function getData() {
  //   const resp = fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     console.log(resp)
  // }

  // async function getData() {
  //   const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     console.log(resp)
  // }

  // const getData = () => {
  //   const resp = fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(resp)
  //   console.log(resp.json())
  // }

  // const getData = async () => {
  //   const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   const data = await resp.json()
  //   console.log(data)
  // }


  // AXIOS METHOD

  // const getData = async () => {
  //   const resp = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(resp)
  //   console.log(resp.data)
  // }

  // const getData = async () => {
  //   const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(data)
  // }

  const getData = async () => {
    const resp = await axios.get('https://picsum.photos/v2/list')
    setData(resp.data)
  }

  return (
    <div>
      <button onClick={getData}> Get Data </button>
      <div>
        {data.map(function(elem,idx) {
          return <h3 key={idx}> Hello {elem.author}, love you {idx} times! </h3>
        })}
      </div>
    </div>
  )
}

export default App
