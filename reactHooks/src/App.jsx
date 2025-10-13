import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Camera } from 'lucide-react';
import { Icon } from 'lucide-react';
import { coconut } from '@lucide/lab';

function App() {
  const [a, setCount] = useState(0)
  const [arr ,setarr]=useState([1,2,3,4,5,6,7,8,9,10])

  const [obj ,setobj]=useState({name:'kushal',age:20})
  const incchange = ()=>{
setCount(a+1)
}
const decchange = ()=>{
setCount(a-1)
}
const reset=()=>{
  setCount(0)
}
const aarys= ()=>{
  setarr([11,12,13,14,15,16,17,18,19])
}
const normal= ()=>{
  setarr([1,2,3,4,5,6,7,8,9,10])
}


const [players ,setplayers]=useState({name:'',age:0, playfor:''})
const changename=(e)=>{
  setplayers({...players,name:e.target.value})
}

const changeage=(e)=>{
  setplayers({...players,age:e.target.value})
}
const changeplayfor=(e)=>{
  setplayers({...players,playfor:e.target.value})
}
console.log(obj)


const [num,setnum]=useState([1,2,3,4,5])
const changearr=()=>{
//  const nu= [...num]
// nu.push(100)
//  setnum(nu)
setnum(prev=>[...prev,100])

// it is called batch update 
}
  return (
    <>
    
    <h1>{a}</h1>
     <button onClick={incchange}>click here to increase</button>
     <button onClick={decchange}>click here to decrease</button>
      <button onClick={reset}>reset</button>

     <div>
      <ul>
        {arr.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>
     </div>
      <button onClick={aarys}>click here to change arryas</button>
          <button onClick={normal}>click here to back to normal arryas</button>
          <h1>{obj.name}</h1>



          <br />
<h1>my name is {players.name}. i play for {players.playfor} and my age is {players.age}</h1>
          <input type="text"  onChange={changename} placeholder='enter player name'/><br />
           <input type="text"  onChange={changeplayfor} placeholder='you play for'/><br />
            <input type="number"  onChange={changeage} placeholder='your age is'/>

            <br />
            <h1>{num}</h1>
           <button onClick={changearr}>click here</button>
          <Camera color="red" size={48} />;
          <Icon iconNode={coconut} />
    </>

    
  )
}

export default App
