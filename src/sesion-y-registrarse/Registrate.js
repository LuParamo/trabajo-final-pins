import "../estilos.css"
import Footer from '../footer.jsx'
import Formulario from './formulario.js'
import React from 'react'

// pestaña de registrarse trae formulario de formulario.js

const Registrate = () => {
    return (
        <div className="Registrate">
            <Formulario />
            <React.Fragment>
            <h2 class="formulario-ok">Una vez que recibamos tus datos te enviaremos un mail de confirmación de alta</h2>
            </React.Fragment>
            <Footer />
        </div>

    )
}



export default Registrate