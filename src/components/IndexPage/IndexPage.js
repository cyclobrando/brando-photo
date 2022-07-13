import React from 'react'
import Header from '../Header/Header'
import './IndexPage.css'
const Car = require('./indexpic01.jpg');
const Snow = require('./indexpic02.jpg');

const IndexPage = () => {

  const images = [];
  images.push(Car, Snow);
  


  return (
    <div className='index'>
      <Header/>

      <div className='index-img'>
      <img src={images[Math.floor(Math.random()*2)]} alt="Stereotypical beat up old car" />
      </div>

    </div>
  )
}

export default IndexPage
