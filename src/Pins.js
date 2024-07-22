import Carrusel from './Carousel1.jsx'
import PinRosa from './img/Pin-Avion-Rosa.PNG'
import PinAvianca from './img/Pin-Avianca.PNG'
import PinExplore from './img/Pin-Explore.PNG'
import PinCalaca from './img/Pin-Calaca.PNG'
import PinFrida from './img/Pin-Frida.PNG'
import PinHomero from './img/Pin-Mexico-Homero.PNG'
import PinVentanilla from './img/Pin-Ventanilla.PNG'
import PinValija from './img/Pin-Valija.PNG'
import PinWingo from './img/Pin-Wingo.PNG'
import PinViajeros from './img/Pins-viajeros.PNG'
import Footer from './footer.jsx'
import Contador from './contador.js'


// aplica carrusel en react, imgcarrusel trae el array de las imagenes incluidas
const imgcarrusel = [
    [PinCalaca],
    [PinFrida],
    [PinHomero],
  ];

const Pins = () => {
    return (
    <div className="Pins">
            <h1 className="pins-titulo">Elegí el Pin que más te convenga</h1>
    <div className="flex-container">
    <a className="flex" href="javascript:void(0)">
    {/* href="javascript:void(0)" para que los compnentes <a/> no me lleven al inicio de la pantalla con el click */}
        <div className="divcard">
            <img className="img-flex" src={PinRosa} alt="Pin Avión Rosa" />
            <p className="p-flex">Avión Rosa</p>
            <p className="p-flex">$4.000,00</p>
            <p className="p-flex">Millas: 800</p>
            <Contador/>
        </div></a>
    <a className="flex" href="javascript:void(0)">
        <div className="divcard">
            <img className="img-flex" src={PinAvianca} alt="Pin Avión Avianca" />
            <p className="p-flex">Avión Avianca</p>
            <p className="p-flex">$6.000,00</p>
            <p className="p-flex">Millas: 1.000</p>
            <Contador/>
        </div></a>
    <a className="flex" href="javascript:void(0)">
        <div className="divcard">
            <img className="img-flex" src={PinExplore} alt="Pin Explore" />
            <p className="p-flex">Explore</p>
            <p className="p-flex">$4.000,00</p>
            <p className="p-flex">Millas: 800</p>
            <Contador/>
        </div></a>
     <a className="flex" href="javascript:void(0)">
        <Carrusel imagenes={imgcarrusel}/>
            <p className="p-flex">Colección México</p>
                <p className="p-flex">$30.000,00</p>
                <p className="p-flex">Millas: 16.000</p>
                <Contador/>
                </a>
    <a className="flex" href="javascript:void(0)">
        <div className="divcard">
            <img className="img-flex" src={PinVentanilla} alt="Pin Ventanilla" />
            <p className="p-flex">Siempre Ventanilla</p>
            <p className="p-flex">$4.000,00</p>
            <p className="p-flex">Millas: 800</p>
            <Contador/>
        </div></a>
    <a className="flex" href="javascript:void(0)">
        <div className="divcard">
            <img className="img-flex" src={PinWingo} alt="Pin Wingo" />
            <p className="p-flex">Avión Wingo</p>
            <p className="p-flex">$6.000,00</p>
            <p className="p-flex">Millas: 1.000</p>
            <Contador/>
            </div></a>
    <a className="flex" href="javascript:void(0)">
        <div className="divcard">
            <img className="img-flex" src={PinValija} alt="Pin Viajeros" />
            <p className="p-flex">Valija</p>
            <p className="p-flex">$4.000,00</p>
            <p className="p-flex">Millas: 800</p>
            <Contador/>
        </div></a>
    <a className="flex" href="javascript:void(0)">
        <div className="divcard">
            <img className="img-flex" src={PinViajeros} alt="Pin Valija" />
            <p className="p-flex">Colección Viajeros</p>
            <p className="p-flex">$50.000,00</p>
            <p className="p-flex">Millas: 25.000</p>
            <Contador/>
        </div></a>
    </div>
    <Footer />
</div>

    )
}


export default Pins