import "./estilos.css"
import Footer from './footer.jsx'
import React, { useState } from 'react'

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

const Formulario = () => {
    const Ciudad = [
        ["-", "Capital", "Alta Gracia", "Carlos Paz", "Rio Tercero", "Rio Cuarto", "Villa Maria"], // Provincia 1 (Córdoba)
        ["-", "Capital Federal", "Tandil", "La Plata", "Merlo", "Pilar"], // Provincia 2 (Buenos Aires)
        ["-", "San Fernando del Valle de Catamarca", "Fray Mamerto Esquiú", "Recreo", "Tinogasta"], // Provincia 3 (Catamarca)
        ["-", "Salta", "Tartagal", "Cafayate", "Cachi", "Iruya"], // Provincia 4 (Salta)
        ["-", "Capital", "San Rafael", "Lujan de Cuyo", "Guaymallen", "San Martin"], // Provincia 5 (Mendoza)
        ["-", "Bariloche", "Cipolletti", "Godoy", "Villa Regina"], // Provincia 6 (Río Negro)
        ["-", "Rio Grande", "San Sebatián", "Tolhuin", "Ushuaia"] // Provincia 7 (Tierra del Fuego)
      ];

    const [nombre, setNombre] = useState('')
    const [DNI, setDNI] = useState('')
    const [nacimiento, setNacimiento] = useState('')
    const [direccion, setDireccion] = useState('')
    const [telefono, setTelefono] = useState('')
    const [correo, setCorreo] = useState('')
    const [provincia, setProvincia] = useState(0);
    const [ciudad, setCiudad] = useState('');
    const [errores, setErrores] = useState({})
    const [estaChequeado, setEstaChequeado] = useState(false)
    const [estaChequeado2, setEstaChequeado2] = useState(false)

    const manejarCambiosEnNombre = (event) => {
        setNombre(event.target.value)
    }
    const manejarCambiosEnDNI = (event) => {
        setDNI(event.target.value)
    }
    const manejarCambiosEnNacimiento = (event) => {
        setNacimiento(event.target.value)
    }
    const manejarCambiosEnDireccion = (event) => {
        setDireccion(event.target.value)
    }
    const manejarCambiosEnTelefono = (event) => {
        setTelefono(event.target.value)
    }
    const manejarCambiosEnCorreo = (event) => {
        setCorreo(event.target.value)
    }
    const cambioProvincia = (e) => {
      setProvincia(parseInt(e.target.value));
    };
    const cambioCiudad = (e) => {
        setCiudad (e.target.value);
    };
    const manejarCambiosEnCheck = (event) => {
        setEstaChequeado(event.target.checked)
    }
    const manejarCambiosEnCheck2 = (event) => {
        setEstaChequeado2(event.target.checked)
    }
    const validarFormulario = () => {
        const nuevosErrores = {}
        if (nombre.trim() === '') {
            nuevosErrores.nombre = 'El nombre es obligatorio'
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(correo)) {
            nuevosErrores.correo = 'El correo no es válido'
        }
        if (!/^[0-9]{2,}$/i.test(telefono)) {
            nuevosErrores.telefono = 'El teléfono no es válido'
        }
        setErrores(nuevosErrores)
        return Object.keys(nuevosErrores).length === 0;
    }
    const manejarEnvioForm = (event) => {
        event.preventDefault ()
        if (validarFormulario()) {
            console.log('Datos del formulario:', {nombre, correo})
        }
    }
    
return (
    <div className="form-contenedor">
            <h2 className="titulo-form">Tus Datos</h2>
    <form className="form" action="https://formspree.io/f/xovajjvp" method="POST" target="_blank">
        <div>
            <input 
                type="text"
                className="box item1"
                value={nombre}
                placeholder="Nombre y Apellido"
                onChange={manejarCambiosEnNombre}
                name="nombre"
            />
            {errores.nombre && <span style={{ color: 'red' }}>{errores.nombre}</span>}
        </div>
        <br/>
        <div>
            <input 
                type="text" name="dni"
                className="box item2"
                value={DNI}
                placeholder="DNI"
                onChange={manejarCambiosEnDNI}
            />
            {errores.DNI && <span style={{ color: 'red' }}>{errores.DNI}</span>}
        </div>
        <div>
            <input 
                type="text" name="nacimiento"
                className="box item3"
                value={nacimiento}
                placeholder="Fecha de nac. DD/MM/AAAA"
                onChange={manejarCambiosEnNacimiento}
            />
            {errores.nacimiento && <span style={{ color: 'red' }}>{errores.nacimiento}</span>}
        </div>
        <div>
            <input 
                type="text" name="dire"
                className="box item4"
                value={direccion}
                placeholder="Dirección"
                onChange={manejarCambiosEnDireccion}
            />
            {errores.direccion && <span style={{ color: 'red' }}>{errores.direccion}</span>}
        </div>
        <div>
            <input 
                type="text" name="tel"
                className="box item5" 
                value={telefono}
                placeholder="Teléfono"
                onChange={manejarCambiosEnTelefono}
            />
            {errores.telefono && <span style={{ color: 'red' }}>{errores.telefono}</span>}
        </div>
        <form className="box" name="f1" action="#">
        <select value={provincia} onChange={cambioProvincia} name="provincia" className="item6">
          <option value="0">Provincia</option>
          <option value="1">Córdoba</option>
          <option value="2">Buenos Aires</option>
          <option value="3">Catamarca</option>
          <option value="4">Salta</option>
          <option value="5">Mendoza</option>
          <option value="6">Río Negro</option>
          <option value="7">Tierra del Fuego</option>
        </select>
      </form>
      <form className="box" name="f2" action="#">
        <select value={ciudad} onChange={cambioCiudad} name="Ciudad" className="item9">
          <option value="">Ciudad</option>
          {Ciudad[provincia] && Ciudad[provincia].map((ciudad, index) => (
            <option key={index} value={ciudad}>{ciudad}</option>
          ))}
        </select>
      </form>
        <div>
            <input
                type="email" name="mail"
                className="box item7"
                value={correo}
                placeholder="E-mail"
                onChange={manejarCambiosEnCorreo}
            />
            {errores.correo && <span style={{ color: 'red' }}>{errores.correo}</span>}
        </div>
        <br/>
        <div>
            <input
                type="email" name="mail2"
                className="box item8"
                value={correo}
                placeholder="Reconfirmar E-mail"
                onChange={manejarCambiosEnCorreo}
            />
            {errores.correo && <span style={{ color: 'red' }}>{errores.correo}</span>}
        </div>
        <br/>
        <form>
            <label className="terminos">
            <input type="checkbox" checked={estaChequeado} onChange={manejarCambiosEnCheck} />
                Acepto los términos y condiciones
            </label>
            <label className="terminos">
            <input type="checkbox" checked={estaChequeado2} onChange={manejarCambiosEnCheck2} />
                ¡Quiero recibir promos!
            </label>
        </form>
        <button type="submit" className="submit" onSubmit={manejarEnvioForm} >Enviar</button>
    </form>
</div>

)

}

export default Registrate