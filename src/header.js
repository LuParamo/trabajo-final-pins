import React from 'react'
import logo from './img/Logo-fucsia.png'
import "./estilos.css"
import { Outlet, Link } from "react-router-dom"

const header = () => {
    return (
    <div className="header">
        <header>
        <button className= "iniciarsesion">Inicia Sesión</button>
    <nav className="navbar">
      <div className="head">
        <Link to="Home">
          <img src={logo} alt="Pins" width="80px" height="80px" align="left" />
        </Link>
        <Link to="/Registrate" className="registratehead">
          Regístrate
        </Link>
        <Link to="Promociones" className="promocioneshead">
          Promociones
        </Link>
        <Link to="/Pins" className="pinshead">
          Pins
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
    </nav>
  </header>
  <hr />
    <Outlet />
  </div>
  )
}

export default header