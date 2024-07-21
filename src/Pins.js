import Carousel from 'react-bootstrap/Carousel'
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


const Pins = () => {
    return (
    <div className="Pins">
            <h1 className="pins-titulo">Elegí el Pin que más te convenga</h1>
    <div className="flex-container">
    <a className="flex" href="#">
        <div className="divcard">
            <img className="img-flex" src={PinRosa} alt="Pin Avión Rosa" />
            <p className="p-flex">Avión Rosa</p>
            <p className="p-flex">$4.000,00</p>
            <p className="p-flex">Millas: 800</p>
        </div></a>
    <a className="flex" href="#">
        <div className="divcard">
            <img className="img-flex" src={PinAvianca} alt="Pin Avión Avianca" />
            <p className="p-flex">Avión Avianca</p>
            <p className="p-flex">$6.000,00</p>
            <p className="p-flex">Millas: 1.000</p>
        </div></a>
    <a className="flex" href="#">
        <div className="divcard">
            <img className="img-flex" src={PinExplore} alt="Pin Explore" />
            <p className="p-flex">Explore</p>
            <p className="p-flex">$4.000,00</p>
            <p className="p-flex">Millas: 800</p>
        </div></a>
        {/* <!-- Aplica Carousel de bootstrap para imágenes de venta --> */}
    <a className="flex" href="#">
    <Carousel />
            <p className="p-flex">Colección México</p>
                <p className="p-flex">$30.000,00</p>
                <p className="p-flex">Millas: 16.000</p>
                </a>
    <a className="flex" href="#">
        <div className="divcard">
            <img className="img-flex" src={PinVentanilla} alt="Pin Ventanilla" />
            <p className="p-flex">Siempre Ventanilla</p>
            <p className="p-flex">$4.000,00</p>
            <p className="p-flex">Millas: 800</p>
        </div></a>
    <a className="flex" href="#">
        <div className="divcard">
            <img className="img-flex" src={PinWingo} alt="Pin Wingo" />
            <p className="p-flex">Avión Wingo</p>
            <p className="p-flex">$6.000,00</p>
            <p className="p-flex">Millas: 1.000</p>
            </div></a>
    <a className="flex" href="#">
        <div className="divcard">
            <img className="img-flex" src={PinValija} alt="Pin Viajeros" />
            <p className="p-flex">Valija</p>
            <p className="p-flex">$4.000,00</p>
            <p className="p-flex">Millas: 800</p>
        </div></a>
    <a className="flex" href="#">
        <div className="divcard">
            <img className="img-flex" src={PinViajeros} alt="Pin Valija" />
            <p className="p-flex">Colección Viajeros</p>
            <p className="p-flex">$50.000,00</p>
            <p className="p-flex">Millas: 25.000</p>
        </div></a>
    </div>
    <Footer />
</div>

    )
}

function UncontrolledExample() {
    return (
<Carousel>
      <Carousel.Item>
        <Carousel.Caption>
                <img src={PinCalaca} className="d-block img-flex" id="carouselitem" alt="Pin Calaca" />
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Carousel.Caption>
                <img src={PinFrida} className="d-block img-flex" id="carouselitem" alt="Pin Frida" />
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Carousel.Caption>
                <img src={PinHomero} className="d-block img-flex" id="carouselitem" alt="Pin Homero" />  
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    )
}

export default Pins