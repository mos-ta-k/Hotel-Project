import React from 'react'
import '../styles/hero.min.css'
import {assets} from '../assets/assets'
import '../styles/navbar.min.css'
import '../styles/hero.min.css'


const HeroSection = () => {

  
  return (
    <>
        <div className='hero_container'>
          <div className='image'>
            <img src={assets.heroImage} alt="hero section image" />
          </div>
          <div className='content'>
            <h3>Welcome To Our Hotel</h3>
            <h1>Luxury Stay hotel experience <br />comfort and elegence</h1>
            <p>choosing bookin was one of the best dicitions we've ever made. They <br /> have proven to be a reliable and innovative partner</p>
            <button className='button'>Dicover Room</button>
          </div>
        </div>
    </>
  )
}

export default HeroSection