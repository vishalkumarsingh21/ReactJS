import React, {useState} from "react";
import {X} from 'lucide-react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (a) => {
    a.preventDefault()
    // console.log(title, details)

    const copyTask = [...task];
    copyTask.push({title, details})
    setTask(copyTask)
    // console.log(copyTask)

    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    // console.log('note deleted')
    const copyTask = [...task];
    // console.log(idx)
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (

    <div className="h-screen lg:flex bg-black text-white">

      <form onSubmit={((a) => {
        submitHandler(a)
      })} className="flex gap-4 lg:w-1/2 flex-col items-start p-10">

        <h1 className="text-4xl font-bold"> 
          Write Your Notes
        </h1>

        {/* first input for heading */}
        <input 
          type="text" 
          placeholder="Enter Notes Heading" 
          className="px-5 w-full py-2 font-medium border-2 rounded outline-none"
          value={title}
          onChange={(a) => {
            setTitle(a.target.value)
          }}
        />

        {/* detailed input  */}
        <textarea
          type="text"
          placeholder="Write Details"
          className="px-5 w-full py-2 font-medium border-2 outline-none rounded-xl h-30"
          value={details}
          onChange={(a) => {
            setDetails(a.target.value)
          }}
        />

        <button className="bg-white cursor-pointer active:scale-95 w-full font-bold text-black px-5 py-2 outline-none rounded"> 
          Add Notes
        </button>

        {/* <img className="h-70" src="https://imgs.search.brave.com/gNF0F2MLuIQxKq-UwQHLgNn4N0O8LZQLS3ByzxVNK14/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDEv/MzMxLzU3MC9zbWFs/bC90aGlzLWlzLWEt/bWVtby1wYWQteW91/LWNhbi11c2UtZm9y/LW5vdGVzLXBuZy5w/bmc" alt="" /> */}

      </form>

      <div className="lg:w-1/2 p-10 lg:border-l-2">
        <h1 className="text-4xl font-bold"> Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 overflow-auto">
          {task.map(function(elem, idx) {
            return <div key={idx} className="relative h-52 w-40 bg-cover text-black rounded-2xl px-5 py-13 bg-[url('https://imgs.search.brave.com/PDjqvNjxIkGNGksc_f0-XjC5D36GQ_C8ThyHcG7M2fs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFHRkZt/ZEN6ancvMS8wLzEx/MzF3L2NhbnZhLXBp/bmstcGFzdGVsLWN1/dGUtbm90ZXMtZG9j/dW1lbnQtNDFpZ1hm/eDZvN2cuanBn')]"> 
                      <h2 className="absolute top-1 right-1 bg-red-500 p-1 text-xs rounded-full">
                        <X color="#ffffff" strokeWidth={3} />
                      </h2>
                      <h2 className="absolute bottom-1 left-1 bg-red-500 p-1 text-xs rounded-full">
                        <X color="#ffffff" strokeWidth={3} />
                      </h2>
                      <div>
                        <h3 className="leading-tight text-xl font-bold"> 
                          {elem.title} 
                        </h3>
                        <p className="leading-tight mt-4 font-medium text-gray-500"> 
                          {elem.details} 
                        </p>
                      </div>
                      <button onClick={() => {
                        deleteNote(idx)
                      }} className="absolute bottom-1 right-1 px-1 font-medium text-violet-600 border-2 rounded-full cursor-pointer active:bg-gray-500 bg-pink-200">
                        Delete
                      </button>
                    </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
