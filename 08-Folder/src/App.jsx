import React from 'react'

const App = () => {

  function btnClicked() {
    console.log('Button is clicked')
  }

  // function mouseEnter() {
  //   console.log('Mouse Entered')
  // }

  // function changeInput(val) {
  //   console.log(val)
  // }

  // const pageScrolling = (speed) => {
  //     // console.log('Page scrolling.... at speed', speed)
  //     if (speed>0) {
  //       console.log('Straight Scrolling')
  //     } else {
  //       console.log('Noob, Try Again')
  //     }
  //   }

  return (

    // <div>
      /* <h1> How are you, Baby</h1>
      <button onClick={btnClicked}> Love You </button>
      <button onDoubleClick={btnClicked}> Love You </button>
      <button onMouseEnter={mouseEnter}> Explore This </button> */

      /* <button onClick={function(){
        console.log("Owu You")
      }}>
        Click Here
      </button> */

      /* <input onClick={() => {
        console.log('Pull me Down')
      }} type="text" placeholder='Enter name' /> */

      /* <input onChange={function(elem) {
        changeInput(elem.target.value)
      }} type="text" placeholder='Enter name' /> */

      /* <div onMouseMove={(elem) => {
        console.log(elem.clientY)
      }} className='box'>
      </div> */
    // </div>

    // <div onWheel={(elem) => {
    //   // console.log(elem.deltaY)
    //   pageScrolling(elem.deltaY)
    // }}>
    //   <div className="page1"></div>  
    //   <div className="page2"></div>  
    //   <div className="page3"></div>  
    // </div>

    <div>
      <button onClick={btnClicked}> Love You </button>
    </div>
  )
}

export default App
