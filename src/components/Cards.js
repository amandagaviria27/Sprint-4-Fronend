import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Servicios Confiables</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/entrega.jpg'
              text='En InstaYa actuamos con responsabilidad y coherencia, estamos comprometidos con el desarrollo sostenible.'
              label='Puntualidad'
              path='/servicios'
            />
            <CardItem
              src='images/transporte.jpg'
              text='En InstaYa somos expertos en brindar soluciones logísticas innovadoras en la cadena de abastecimiento.'
              label='Logística'
              path='/servicios'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/mujer.jpg'
              text='Estoy muy agradecida con la empresa InstaYa y doy fe sobre su buen servicio.'
              label='Testimonios'
              path='/servicios'
            />
            <CardItem
              src='images/hombre.jpg'
              text='Soy cliente de InstaYa desde este año y me ha parecido un excelente servicio.'
              label='Testimonios'
              path='/servicios'
            />
            <CardItem
              src='images/pareja.jpg'
              text='Somos clientes de InstaYa y enviamos paquetes a nivel nacional y llegan el día y hora indicados.'
              label='Testimonios'
              path='/servicios'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
