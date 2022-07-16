import { useState } from 'react'
import Header from '../Header/Header'
import './CairoAbstractPage.css'

const CairoAb01 = require('./01.jpg')
const CairoAb02 = require('./02.jpg')
const CairoAb03 = require('./03.jpg')
const CairoAb04 = require('./04.jpg')
const CairoAb05 = require('./05.jpg')
const CairoAb06 = require('./06.jpg')
const CairoAb07 = require('./07.jpg')
const CairoAb08 = require('./08.jpg')
const CairoAb09 = require('./09.jpg')
const CairoAb10 = require('./10.jpg')
const CairoAb11 = require('./11.jpg')
const CairoAb12 = require('./12.jpg')

const CairoAbstractPage = () => {
  const {slideshow, setSlideshow} = useState(false);

  return (
    <div>
      <Header />
      <div className='cairo-abstract-container'>
        <p id="cairo-abstracts">Cairo Abstracts</p>

        <div className='cairo-abstract-pics'>
          <img src={CairoAb01} alt="Cairo Abstract 01" />
          <img src={CairoAb02} alt="Cairo Abstract 02" />
          <img src={CairoAb03} alt="Cairo Abstract 03" />
          <img src={CairoAb04} alt="Cairo Abstract 04" />
          <img src={CairoAb05} alt="Cairo Abstract 05" />
          <img src={CairoAb06} alt="Cairo Abstract 06" />
          <img src={CairoAb07} alt="Cairo Abstract 07" />
          <img src={CairoAb08} alt="Cairo Abstract 08" />
          <img src={CairoAb09} alt="Cairo Abstract 09" />
          <img src={CairoAb10} alt="Cairo Abstract 10" />
          <img src={CairoAb11} alt="Cairo Abstract 11" />
          <img src={CairoAb12} alt="Cairo Abstract 12" />
        </div>

        <div className='cairo-abstract-text'>
          <p>Lorem ipsum something something</p>
        </div>

      </div>
      
    </div>
  )
}

export default CairoAbstractPage
