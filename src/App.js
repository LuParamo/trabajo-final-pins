import React from 'react'
// import ruta from './img/ruta-pins.jpg'
// import Header from './header.jsx'
// import Footer from './footer.jsx'
import imgfondo from './img/wall-aviones.jpg'
import "./estilos.css"
import {Routes, Route } from 'react-router-dom'
import Header from './header'
import Pins from './Pins'
import Registrate from './Registrate'
import Home from './Home'


function App ()  {
    return (
      <div>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route path='Registrate' element={<Registrate />}></Route>
          <Route path='Pins' element={<Pins />}></Route>
          <Route path='Home' element={<Home />}></Route>
        </Route>
      </Routes>
      </div>
      
  )
}

export default App;