import React, { useState } from 'react'
import logo from './img/Logo-fucsia.png'
import "./estilos.css"
import { Outlet, Link } from "react-router-dom"

function Header () {
  const [isOpen, setIsOpen] = useState(false)

    return (
    <div className="header">
        <header>
        <Link to="Iniciarsesion" className='iniciarsesion'>
        <button className= "iniciarsesionb">
          Inicia Sesión
          </button>
        </Link>
    <nav className="navbar">
      <Link to="Home">
          <img src={logo} alt="Pins" width="80px" height="80px" align="left" />
        </Link>
      <div className={`head ${isOpen && 'open'}`}>
        <Link to="/Registrate" className="registratehead">
          Regístrate
        </Link>
        <Link to="/Pins" className="pinshead">
          Pins
        </Link>
        {/* de aca para abajo no estan desarrolladas las pestañas, si bien los links están cargados */}
        <Link to="Promociones" className="promocioneshead">
          Promociones
        </Link>
        <Link to="ClubPins" className="clubpinshead">
          Club Pins
        </Link>
        <Link to="GiftPins" className="giftpinshead">
          Gift Pins
        </Link>
        <Link to="Bancos" className="bancoshead">
          Bancos Asociados
        </Link>
      </div>
      <div className={`hamburguesa ${isOpen && 'open'}`} onClick={ () => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </div>
    </nav>
  </header>
  <hr />
    <Outlet />
  </div>
  )
}

export default Header