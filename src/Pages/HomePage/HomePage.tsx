import React from 'react'
import Carrossel from '../../Components/Carrossel/Carrossel'
import HeaderPage from '../../Components/Header/HeaderPage'
import {Container} from "./styles"



const HomePage = () => {
  return (
    <Container>
      <HeaderPage/>
      <Carrossel/>
    </Container>
  )
}

export default HomePage