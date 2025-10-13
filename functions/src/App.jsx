import React from 'react'

const App = () => {
  const btnclicked=()=>{
    alert("button clicked")
  }
  const value=(value)=>{
    console.log(value)
  }
  return (
   <>
       <input type="text" placeholder='please enter your name' className='inputtyp' onChange={function haha (e){
        value(e.target.value)
       }}/>
      <button onClick={btnclicked} > click me </button>
      </>
  )
}

export default App