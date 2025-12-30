import React from 'react'
import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import Solutions from '../components/Solutions'
import SuccessStories from '../components/SuccessStories'
import OurWork from '../components/OurWork'
import FAQ from '../components/FAQ'
import Quote from '../components/Quote'
// import Benefits from '../components/Benefits'

const Home = () => {
  return (
    <div>
      <Hero />
      <Benefits />
      <Solutions />
      <SuccessStories/>
      <OurWork/>
      <FAQ/>
      <Quote/>
    </div>
  )
}

export default Home
