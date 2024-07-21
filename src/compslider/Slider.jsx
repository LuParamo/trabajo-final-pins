import './estiloslider.css'
import React from 'react'


function Slider({ imagenes }) {


const [imagenActual, setImagenActual] = React.useState(0);
const cantidad = imagenes?.length;

if (!Array.isArray(imagenes) || cantidad === 0) return;

const siguiente = () => {
    setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
};

const anterior = () => {
    setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
};


    
    return (
        <div className='containerslider'>
            <button className='sliderboton' onClick={anterior}>⇦</button>
            {imagenes.map((imagen, index) => {
                return (
                    <div>
                    {imagenActual == index && (
                        <img key={index} src={imagen} alt="imagen"/>
                    )}
                    </div>
                    
                );
            })}
            <button className='sliderboton' onClick={siguiente}>⇨</button>
        </div>
    )
}

export default Slider;