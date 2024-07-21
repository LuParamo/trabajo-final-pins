import React from 'react'
import "./estilos.css"
import Footer from './footer.jsx'
import Slider from './compslider/Slider.jsx'
import slide1 from './compslider/slider.PNG'
import slide2 from './compslider/slider2.PNG'
import slide3 from './compslider/slider3.PNG'
import slide4 from './compslider/slider4.PNG'
import Ruta from './img/ruta2.PNG'


const Home = () => {
    const imgslider = [
      [slide1],
      [slide2],
      [slide3],
      [slide4],
    ];

    return (
    <div className="Home">
      <div className='container'>
            <Slider imagenes={imgslider}/>
            <img className="ruta" src={Ruta} alt="banner" />
        </div>
        <React.Fragment>
  <div className="presentación">
    <h2 class="titulopres">¡Con Pins descubrí una nueva forma de ahorrar para tu próximo viaje!</h2>
    <br />
    <p className="subtit">Pins es el programa de millas que creamos especialmente para los amantes de los viajes y las colecciones.</p>
    <br />            
    <p>Podés acumular millas a través de varias formas: ya sea comprando un pin individual, comprando colecciones de destinos, o suscribiéndote al Club Pins, donde recibís puntos todos los meses para canjear y obtenés beneficios exclusivos.</p>
    <br />
    <p>Canjeá tus millas para viajar a miles de destinos.
    ¡Viajá con millas, viajá con Pins!</p>
    <br />            
        
    <p>Registrate gratis y comenzá a vivir tu próximo destino.</p>

</div>
  <div className="conocenos">
    <h3 className="millas">¿Cómo junto millas?</h3>
    <p1 className="p1">1. Registrate y coleccioná los Pins que más te gusten</p1>
    <p2 className="p2">2. Cada Pin suma la cantidad de millas indicada</p2>
    <p3 className="p3">3. Juntá millas y canjealas por tu destino favorito</p3>
    </div>
    <a className="comencemos" href="Registrate.html">Comencemos</a>
    </React.Fragment>
    <Footer />
  </div>

  )


}

export default Home;