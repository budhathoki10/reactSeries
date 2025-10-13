import { useState } from 'react'
import './App.css'
import Propsproj from './Props/Propsproj';
import miami from './assets/a72307c59c9a113a19493a01b97a744b.jpg'
import barca from './assets/FC_Barcelona_(crest).svg.png'
function App(props) {

  return (
    <>
<Propsproj name="Lionel Messi" club="Inter Miami" image={miami}></Propsproj>
<Propsproj name="lamine Yamal" club="Fc Barcelona" image={barca}></Propsproj>

    </>
  )

  }

export default App;
