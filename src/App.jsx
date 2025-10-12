import { useState } from 'react'
import './App.css'
import Props from './Props/Props'

function App() {
  const [count, setCount] = useState(0)

  const clickbtn = () => {
    alert("View profile clicked!");
  }

  const hobbies = ["play", "read", "refocus"];

  return (
    <>
      <Props name="Kushal" age={20} salary={300000} onClick={clickbtn} hobbiess={hobbies} />
      <Props name="Ram" age={15} salary={100000} onClick={clickbtn} hobbiess={hobbies} />
      <Props name="Shyam" age={23} salary={1000} onClick={clickbtn} hobbiess={hobbies} />
      <Props name="Hari" age={22} salary={15000} onClick={clickbtn} hobbiess={hobbies} />
    </>
  )
}

export default App;
