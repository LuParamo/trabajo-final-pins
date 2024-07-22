import "./estilos.css"
import Footer from './footer.jsx'
import React, { useState } from 'react'
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="Inicia">
            <IniciaSesion />
            <Footer />
        </div>

    )
}

const IniciaSesion = () => {

    const [correo, setCorreo] = useState('')
    const [contrasena, setContrasena] = useState('')

const manejarCambiosEnCorreo = (event) => {
    setCorreo(event.target.value)
}
const manejarCambiosEnContrasena = (event) => {
    setContrasena(event.target.value)
}

const validarFormulario = () => {
    const nuevosErrores = {}
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(correo)) {
        nuevosErrores.correo = 'El correo no es válido'
    }
}
    const manejarEnvioForm = (event) => {
        event.preventDefault ()
        if (validarFormulario()) {
            console.log('Datos del formulario:', {correo, contrasena})
        }
    }

    return (
        <div className="sesioncontenedor">
            <div className="sesioncontenedorhijo1">
                <h2 className="titulo-form">Iniciá Sesión</h2>
        <form className="form" action="https://formspree.io/f/xovajjvp" method="POST" target="_blank">
            <div>
                <input
                    type="email" name="mail"
                    className="box item7"
                    value={correo}
                    placeholder="E-mail"
                    onChange={manejarCambiosEnCorreo}
                />
            </div>
            <br/>
            <div>
                <input 
                    type="text"
                    className="box item1"
                    value={contrasena}
                    placeholder="Contraseña"
                    onChange={manejarCambiosEnContrasena}
                    name="contrasena"/>
            </div>
            <br/>
            <button type="submit" className="submit" onSubmit={manejarEnvioForm} >Enviar
                
            </button>

            <h4>¿Todavía no te registraste?</h4>
            <a className="submit2" href="Registrate">Registrate</a>
        </form>
        </div>
        <div className="sesioncontenedorhijo2">
            <img/>
        </div>
    </div>
    )
}






export default Login