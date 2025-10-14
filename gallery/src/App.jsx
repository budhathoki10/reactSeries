import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from './Component/Card'
const App = () => {
  const [userdata, setUsedata]=useState([])
  const [index, setindex]=useState(1)
  const getdata=async()=>{
    const response =await  axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUsedata(response.data)

  }
  let printuserdata= <h2>loading.....</h2>
  if(userdata.length>0){
    printuserdata= userdata.map((val,id)=>{
      return <div key={id}>
          <Card value={val}></Card>

      </div>
    })
  }
  
  useEffect(()=>{
    if(index==0){
      setindex(1)
    }
getdata()
  },[index])
  return (
    <>
    
  
    <br />
    <br />
<div className='imagess'>
  {printuserdata}
</div>
<div className='btns22'>
  <button  disabled={index === 1}  className='buttons' onClick={()=>{
    setindex(index-1)
    setUsedata([])
  }}>pre</button>
  <h3>{index}</h3>
  <button className='buttons' onClick={()=>{setindex(index+1)
    setUsedata([])
  }}>next</button>
</div>

    
    </>
    
  )
}

export default App