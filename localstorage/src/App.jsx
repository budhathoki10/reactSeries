import React from 'react'

const App = () => {
  // localStorage.setItem("age",10)
  // localStorage.setItem("name","kushal")
  // const ages= localStorage.getItem("age")
  // console.log(ages)
  // localStorage.removeItem("age")
  // localStorage.clear()

  const userName= {
    name:"kushal",
    college:"Herald College",
    age:20
  }
  const names= JSON.stringify(userName)
console.log(JSON.parse(names))
  localStorage.setItem("user",names)
  return (
  <>
  
  </>
  )
}

export default App