import { Box } from '@mui/material'
import React from 'react'
import { AiFillMail, AiFillPhone, AiFillCaretDown } from 'react-icons/ai';

const Contactanos = () => {
  return (
    <>
    <Box height={100}/>
    <form>
        <div> <h2>Contactanos</h2></div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Direccion de Correo Electronico</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Contactanos</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div class="form-group">
    <label for="exampleFormControlFile1">Adjunte archivo de noticia</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
  </div>
  <button type="submit" class="btn btn-primary">Enviar</button>
  <div>
    <AiFillCaretDown/>
    <h2>Datos Empresa</h2>
    </div>
  <div>
  <AiFillMail />
    <h3>Correos Electronicos</h3>
    </div>
  <div>
    <h8>RRHH: mundonoticias@gmail.com</h8>
    </div>
  <div>
    <h8>Prensa: prensa@gmail.com</h8>
    </div>
  <div>
    <h8>AudioVisual: audioVisual@gmail.com</h8>
    </div>
  <div>
  <AiFillPhone />
    <h3>Numero Telefonico</h3>
    </div>
  <div>
    <h8>RRHH: 732258598</h8>
    </div>
  <div>
    <h8>Prensa: 732258598</h8>
    </div>
  <div>
    <h8>audioVisual: 732258598</h8>
    </div>

</form>
    
    </>
  )
}

export default Contactanos