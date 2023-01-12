import React from 'react'
import Carrossel from '../../Components/Carrossel/Carrossel'
import Footer from '../../Components/Footer/Footer'
import HeaderPage from '../../Components/Header/HeaderPage'
import InformationsCards from '../../Components/InformationsCards/InformationsCards'
import {Container} from "./styles"



const HomePage = () => {
  return (
    <Container>
      <HeaderPage/>
      <Carrossel/>
      <InformationsCards/>
      <Footer/>
    </Container>
  )
}

export default HomePage