import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Contact from './Page/Contact'
import Product from './Page/Product'
import About from './Page/About'
import Home from './Page/Home'
import Notfound from './Page/Notfound'
function App() {
  return (
    <>
      <div className='firstdiv'>
 <Navbar></Navbar>
<Routes>

  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/About' element={<About></About>}></Route>
    <Route path='/Product' element={<Product></Product>}></Route>
  <Route path='/Contact' element={<Contact></Contact>}></Route>
  
<Route path='*' element={<Notfound></Notfound>}/>
  

</Routes>
<Footer></Footer>
      </div>
    </>
  )
}

export default App
