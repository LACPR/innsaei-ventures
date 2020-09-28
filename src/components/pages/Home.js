import React from 'react'
import Navigation from '../layouts/Navigation'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Terms from '../sections/Terms'
import Sector from '../sections/Sector'
import Content from '../sections/Content'
import Mantra from '../sections/Mantra'
import Purpose from '../sections/Purpose'
import Help from '../sections/Help'
import Subscribe from '../sections/Subscribe'


const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Terms />
      <Sector />
      <Content />
      <Mantra />
      <Purpose />
      <Help />
      <Subscribe />
      <Footer />
    </>
  )
}

export default Home