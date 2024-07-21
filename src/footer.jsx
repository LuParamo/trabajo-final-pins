import React from 'react'
import logo from './img/Logo-fucsia.png'
import instagram from './img/icons8-instagram-old-80.png'
import facebook from './img/icons8-facebook-80.png'
import './estilos.css'

const Footer = () => {
    return (
    <div className="footer">
    <footer>
        <img src={logo} alt="Pins" width="50px" />
        <h5 className="derechos">© Todos los derechos reservados</h5>
        <a className="ig" href="https://www.instagram.com/lu.paramo/" target="_blank"><img src={instagram} alt="instagram" width="30px" /></a>
        <a className="fb" href="https://web.facebook.com/lu.paramo/?locale=es_LA" target="_blank"><img src={facebook} alt="facebook" width="30px" /></a>
    </footer>
    </div>
    )
}

export default Footer