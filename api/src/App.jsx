import React, { useState } from 'react'
import axios from 'axios'
const App = () => {
  // const  getData= async ()=>{
  //   console.log("data is received")
  //  const response =  await fetch('https://jsonplaceholder.typicode.com/albums')
  //  const data= await response.json()
  //  console.log(data)

  // }
  const [data,setdata ]= useState([])
    const  getData= async ()=>{
const response= await axios.get("https://picsum.photos/v2/list")
console.log(response.data)
setdata(response.data)
  }

  return (
    
    <>
    <button onClick={getData}>click me</button>
    <ol>
      {
      data.map((val,keys)=>{
       return   <li key={keys}>{val.author}</li>
})}
      </ol>
    </>
  )
}

export default App