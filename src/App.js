import React from 'react'
import "./estilos.css"
import {Routes, Route, Navigate } from 'react-router-dom'
import Header from './header'
import Pins from './Pins'
import Registrate from './Registrate'
import Home from './Home'
import IniciarSesion from './Iniciarsesion'


function App ()  {
    return (
      <div>
      <Routes>
      <Route path="/" element={<Navigate to="/Home" />} />
      <Route element={<Header />}>
          <Route path='Registrate' element={<Registrate />}></Route>
          <Route path='Pins' element={<Pins />}></Route>
          <Route path='Home' element={<Home />}></Route>
          <Route path='IniciarSesion' element={<IniciarSesion />}></Route>
        </Route>
      </Routes>
      </div>
           
  )
}

export default App;