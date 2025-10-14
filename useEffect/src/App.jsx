import React, { useEffect, useState } from 'react'

const App = () => {
  const [num,setnum]=useState(0)
  const [num1,setnum1]=useState(0)
  useEffect(()=>{
    console.log("useeffect is running")
  },[num1])

  return (
    <div  className='divv'>
      <h1>hello man </h1>    
      <h1>num is {num}</h1>
      <h1>num1 is {num1}</h1>
      <button onClick={()=>{
        setnum(num+1)
      }}>click me for num</button>
      <button onMouseEnter={()=>{
        setnum1(num1+1)
      }}>click me for num1</button>
    </div>
  )
}

export default App