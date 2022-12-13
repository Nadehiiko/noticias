import React from 'react'
import cuatro from './../../images/4.png'
import cinco from './../../images/5.png'
import seis from './../../images/6.png'
import siete from './../../images/7.png'
import ocho from './../../images/8.png'
import nueve from './../../images/9.png'

const Carousel = () => {
  return (
    <div class="row justify-content-center">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-40" src={cuatro} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-40" src={cinco} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-40" src={seis} alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
<div class="card-group">
  <div class="card">
    <a href=''><img src={siete} class="card-img-top" alt="..."/></a>
    <div class="card-body">
      <h5 class="card-title">Bio Bio</h5>
      <p class="card-text">De manera indefinida permanecerá suspendido el tránsito ferroviario sobre el río Bío Bío debido a daños sufridos por un pilar del histórico viaducto que conecta ambas riberas del río en Concepción. Alrededor de 30 mil pasajeros son afectados por dicha contingencia.</p>
    </div>
  </div>
  <div class="card">
    <a href=''><img src={ocho} class="card-img-top" alt="..."/></a>
    <div class="card-body">
      <h5 class="card-title">Iquique</h5>
      <p class="card-text">El sujeto habría ayudado en la fuga de los sospechosos.</p>
    </div>
  </div>
  <div class="card">
    <a href=''><img src={nueve} class="card-img-top" alt="..."/></a>
    <div class="card-body">
      <h5 class="card-title">Viña del Mar</h5>
      <p class="card-text">La superficie afectada es de aproximadamente 70 hectáreas, compuestas de pastizal, matorral y eucaliptus.</p>
    </div>
  </div>
</div>
    </div>
    
    
  )
}

export default Carousel