import React from 'react'
import { useState } from 'react'


// enlazado a pestaña Pins para sumatoria de productos

const Contador =() => {
    const [contador, setContador] = useState (0);

    const incrementar = () => {
        if (contador < 10) {
            setContador(contador + 1);
        } else {
<<<<<<< HEAD
            alert("Ya sumaste la cantidad máxima de productos, no puedes añadir más."); 
                // alerta de que no pueden ir mas de 10 productos 
=======
            alert("Ya sumaste la cantidad máxima de productos, no puedes añadir más.");
>>>>>>> bb8bada7678879332f89aca9ef5c968d3e3b6855
    }}
    const decrementar = () => {
        if (contador > 0) {
            setContador(contador - 1);
        } else {
            alert("El producto ya está en cero, no se puede quitar más.");
            // alerta de que no pueden ir productos e negativo
        }
    }

return (
    <div className='contador'>
        <button onClick={decrementar}>-</button>
        ||  {contador}  ||
        <button onClick={incrementar}>+</button>
    </div>
)
}

export default Contador