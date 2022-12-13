import { Box } from '@mui/material'
import React from 'react'
import dieciseis from './../images/16.png'
import diecisiete from './../images/17.png'
import dieciocho from './../images/18.png'
import diecinueve from './../images/19.png'
import veinte from './../images/20.png'
import veintiuno from './../images/21.png'

const Internacional = () => {
  return (
    <>
    <Box height={100}/>
    <div>
    <div class="card-group">
  <div class="card" >
    <a href=''><img src={dieciseis} class="card-img-top" alt="..." /></a>
    <div class="card-body">
      <h5 class="card-title ">Internacional</h5>
      <p class="card-text">Washington (EEUU) ha condenado previamente la cooperación en seguridad entre Irán y Rusia, pero el viernes describió una extensa relación que involucra equipos como drones, helicópteros y aviones de combate.</p>
    </div>
  </div>
  <div class="card">
    <a href=''><img src={diecisiete} class="card-img-top" alt="..."/></a>
    <div class="card-body">
      <h5 class="card-title">Internacional</h5>
      <p class="card-text">El videojuego, Elder Ring, fue premiado como el mejor (GOTY) del 2022 en los The Game Awards, Sin embargo, mientras el productor y director del título recibían el galardón, un desconocido subió al escenario, tomó el micrófono y nominó al expresidente de Estados Unidos Bill Clinton, a quién llamó "rabino ortodoxo reformado". El sujeto terminó detenido.</p>
    </div>
  </div>
  <div class="card">
    <a href=''><img src={dieciocho} class="card-img-top" alt="..."/></a>
    <div class="card-body">
      <h5 class="card-title">Internacional</h5>
      <p class="card-text">La legislación promueve que el Gobierno federal reconozca el matrimonio entre dos personas del mismo sexo si es legal en el estado donde se casaron. Se reconoce la libertad religiosa, evitando que se pueda obligar a instituciones religiosas como las iglesias a celebrar esas bodas y que estas pierdan beneficios o exenciones fiscales por no hacerlo.</p>
    </div>
  </div>
</div>  
<div class="card-group">
  <div class="card" >
    <a href=''><img src={diecinueve} class="card-img-top" alt="..." /></a>
    <div class="card-body">
      <h5 class="card-title ">Internacional</h5>
      <p class="card-text">Estados Unidos y Rusia confirmaron este jueves el intercambio de presos por el cual la jugadora de baloncesto profesional estadounidense Brittney Griner, encarcelada en Rusia por cargos de tráfico de drogas, y Viktor Bout, hasta ahora en una prisión de Estados Unidos por tráfico de armas, regresaron a sus respectivos países.</p>
    </div>
  </div>
  <div class="card">
    <a href=''><img src={veinte} class="card-img-top" alt="..."/></a>
    <div class="card-body">
      <h5 class="card-title">Internacional</h5>
      <p class="card-text">La Organización Trump, del expresidente estadounidense Donald Trump (2017-2021), fue encontrada este martes culpable de fraude fiscal, por pagar a ejecutivos "por debajo de la mesa", dándoles una parte importante de sus compensaciones de forma que pudieran rebajar su parte sujeta a impuestos, según medios locales.</p>
    </div>
  </div>
  <div class="card">
    <a href=''><img src={veintiuno} class="card-img-top" alt="..."/></a>
    <div class="card-body">
      <h5 class="card-title">Internacional</h5>
      <p class="card-text">El Partido Demócrata de EEUU ratificó este martes que serán mayoría en el Senado, luego que su candidato se impusiera en al segunda vuelta en la elección de Georgia.</p>
    </div>
  </div>
</div>  
    </div>
    </>
  )
}

export default Internacional