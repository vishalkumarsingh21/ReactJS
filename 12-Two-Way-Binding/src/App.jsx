import React, {useState} from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Form Submitted by", title)
    setTitle('')
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input 
          type='text'
          placeholder='Enter your name baby: ' 
          value={title}
          onChange={(a) => {
            // console.log(a)
            // console.log(a.target)
            // console.log(a.target.value)
            setTitle(a.target.value)
          }}
          />
        <button> Submit Now </button>
      </form>
    </div>
  )
}

export default App
