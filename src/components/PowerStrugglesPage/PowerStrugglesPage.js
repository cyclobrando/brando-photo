import { useState } from 'react'
import Header from '../Header/Header'
import '../../index.css'

const Dance1 = require('./dance-1.jpg')
const Dance2 = require('./dance-2.jpg')
const Dance3 = require('./dance-3.jpg')
const Dance5 = require('./dance-5.jpg')
const Dance6 = require('./dance-6.jpg')
const Dance7 = require('./dance-7.jpg')

const PowerStrugglesPage = () => {
    return (
      <div>
        <Header />
        <div className='display-container'>
          <p style={{ textDecoration: 'underline' }}>Power Struggles</p>
  
          <div className='display-pics'>
            <img id="pics" src={Dance1} alt="Dance 1" />
            <img id="pics" src={Dance2} alt="Dance 2" />
            <img id="pics" src={Dance3} alt="Dance 3" />
            <img id="pics" src={Dance5} alt="Dance 5" />
            <img id="pics" src={Dance6} alt="Dance 6" />
            <img id="pics" src={Dance7} alt="Dance 7" />
          </div>
  
          <div className='display-text'>
            <p>Lorem ipsum something something</p>
          </div>
  
        </div>
        
      </div>
    )
  }
  
  export default PowerStrugglesPage