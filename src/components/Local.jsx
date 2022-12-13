import { Box } from '@mui/material'
import React from 'react'
import dies from './../images/10.png'
import once from './../images/11.png'
import doce from './../images/12.png'

const Local = () => {
  return (
    <>
    <Box height={100}/>
    <div>
    <div class="card-group">
  <div class="card" >
    <a href=''><img src={dies} class="card-img-top" alt="..." /></a>
    <div class="card-body">
      <h5 class="card-title ">Talca</h5>
      <p class="card-text">Un nuevo operativo de incautación de elementos prohibidos se realizó en la Cárcel de Talca, en simultáneo a otros penales a nivel nacional.</p>
    </div>
  </div>
  <div class="card">
    <a href=''><img src={once} class="card-img-top" alt="..."/></a>
    <div class="card-body">
      <h5 class="card-title">San Javier</h5>
      <p class="card-text">Detectives de la Brigada de Investigación Criminal de la PDI de San Javier, previa coordinación con Fiscalía de Flagrancia, efectuaron las primeras diligencias tras el robo de 113 juguetes de navidad destinado a los niños.</p>
    </div>
  </div>
  <div class="card">
    <a href=''><img src={doce} class="card-img-top" alt="..."/></a>
    <div class="card-body">
      <h5 class="card-title">Villa Alegre</h5>
      <p class="card-text">Detectives de la Brigada de Homicidios de la Policía de Investigaciones de Linares, efectuaron el trabajo científico técnico por el homicidio de un joven de 24 años en Villa Alegre.</p>
    </div>
  </div>
</div>  
    </div>
    </>
  )
}

export default Local