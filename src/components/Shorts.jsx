import { Box } from '@mui/material'
import React from 'react'
import uno from './../images/1.png'
import dos from './../images/2.png'
import tres from './../images/3.png'
import siete from './../images/7.png'
import ocho from './../images/8.png'
import nueve from './../images/9.png'

const Shorts = () => {
  return (
    <>
    <Box height={100}/>
    <div class="card-group">
  <div class="card">
    <img src={uno} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Incendios</h5>
      <p class="card-text">La Onemi declaró Alerta Roja para la comuna de Melipilla por incendio forestal, vigente desde hoy y hasta que las condiciones del incendio así lo ameriten.</p>
    </div>
  </div>
  <div class="card">
    <img src={dos} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Internacional</h5>
      <p class="card-text">La diputada griega Eva Kaili y otras tres personas están acusadas de corrupción, blanqueo de capitales y pertenecer a una organización criminal.</p>
    </div>
  </div>
  <div class="card">
    <img src={tres} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Internacional</h5>
      <p class="card-text">La misión acabó la tarde de este domingo con el amerizaje de la cápsula Orión, que llegó al océano pacífico a menos de 32 kilómetros por hora.</p>
    </div>
  </div>
</div>
<div class="card-group">
  <div class="card">
    <img src={siete} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Bio Bio</h5>
      <p class="card-text">De manera indefinida permanecerá suspendido el tránsito ferroviario sobre el río Bío Bío debido a daños sufridos por un pilar del histórico viaducto que conecta ambas riberas del río en Concepción. Alrededor de 30 mil pasajeros son afectados por dicha contingencia.</p>
    </div>
  </div>
  <div class="card">
    <img src={ocho} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Iquique</h5>
      <p class="card-text">El sujeto habría ayudado en la fuga de los sospechosos.</p>
    </div>
  </div>
  <div class="card">
    <img src={nueve} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Viña del Mar</h5>
      <p class="card-text">La superficie afectada es de aproximadamente 70 hectáreas, compuestas de pastizal, matorral y eucaliptus.</p>
    </div>
  </div>
</div>

    </>
  )
}

export default Shorts