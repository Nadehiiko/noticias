import { Box } from '@mui/material'
import React from 'react'
import trece from './../images/13.png'
import catorce from './../images/14.png'
import quince from './../images/15.png'

const Nacional = () => {
  return (
    <>
    <Box height={100}/>
    <div>
    <div class="card-group">
  <div class="card" >
    <img src={trece} class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title ">Nacional</h5>
      <p class="card-text">Encuesta Plaza Pública Cadem, correspondiente a la segunda semana de diciembre, revela que 59% de los consultados prefiere una convención mixta, es decir, con expertos y electos.</p>
    </div>
  </div>
  <div class="card">
    <img src={catorce} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Nacional</h5>
      <p class="card-text">El desnivel en un punto del puente ferroviario determinó que EFE suspendiera el servicio de tren entre Concepción y San Pedro de la Paz. Ante ello, habrá 16 buses que trasladarán a los pasajeros entre ambas comunas.</p>
    </div>
  </div>
  <div class="card">
    <img src={quince} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Nacional</h5>
      <p class="card-text">La Corporación Peruana de Aeropuertos y Aviación Comercial (Corpac) pidió el refuerzo de la Policía Nacional en el lugar para poner a buen recaudo la vida de las personas que se encuentran "en calidad de rehenes".</p>
    </div>
  </div>
</div>  
    </div>
    </>
  )
}

export default Nacional