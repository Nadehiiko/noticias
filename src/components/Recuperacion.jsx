import React from 'react'
import { Box } from '@mui/material'

const Recuperacion = () => {
  return (
    <>
    <Box height={100}/>
    <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
  <a href='' target='_blank'><button type="button" class="btn btn-primary" >Recuperar</button></a>
    </>
  )
  
}

export default Recuperacion