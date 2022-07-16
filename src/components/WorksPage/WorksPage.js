import React from 'react'
import Header from '../Header/Header'
import './WorksPage.css'
const CairoAb = require('../CairoAbstractPage/05.jpg')

const AbstractPage = () => {
  return (
    <div>
      <Header/>

      <div className='works-container'>
        <p id="ab-works">Abstract Works</p>

        <div className='works-abstract-container'>
          <div className='works-cairoab'>
            <img src={CairoAb} alt="Cairo Abstracts" />
            <p>Cairo Abstracts</p>
          </div>
        </div>
        
      </div>


    </div>
  )
}

export default AbstractPage
