import '../estilos.css'
import React, { useEffect } from 'react'


function Carrusel({ imagenes }) {

    useEffect(() => {
        const intervalId = setInterval(siguiente, 3000);
    })
    // a veces se vuelve loquito y titila o cambia más rápido de lo normal, es como un +30 estresado

    const [imagenActual, setImagenActual] = React.useState(0);
    const cantidad = imagenes?.length;
    
    if (!Array.isArray(imagenes) || cantidad === 0) return;
    
    const siguiente = () => {
        setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
    };
    
    return (
        <div className=''>
            {imagenes.map((imagen, index) => {
                return (
                    <div> 
                    {imagenActual == index && (
                        <img className='d-block img-flex' key={index} src={imagen} alt="imagen" />
                    )}
                    </div>
                );
            })}
        </div>
    )

}


export default Carrusel


    
        
