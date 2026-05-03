import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Card from './components/Card'
import Button from './components/Button'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  useEffect(() => {
    const getData = async () => {
      // console.log('Data aa gaya')
      const resp = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
      setUserData(resp.data)
    }
    getData()
  }, [index])

  let printUserData = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2 font-semibold'> Loading... </h3>

  if (userData.length > 0) {
    printUserData = userData.map((elem) => {
      return <div key={elem.id}>
        <Card elem={elem} />
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      {/* <h1 className='fixed text-6xl text-pink-700 bg-amber-400'> {index} </h1> */}
      {/* <button 
        onClick={getData}
        className='bg-green-600 active:scale-95 mb-3 px-5 py-2 rounded text-white'> 
        Get Data
      </button> */}
      <div className='flex h-[80%] flex-wrap gap-4 p-2'>
        {printUserData}
      </div>
      <Button index={index} setIndex={setIndex} setUserData={setUserData} />
    </div>
  )
}

export default App
