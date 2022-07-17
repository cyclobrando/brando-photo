import { useState } from 'react'
import Header from '../Header/Header'
import './CairoAbstractPage.css'

const CairoAb01 = require('./cairoAb01.jpg')
const CairoAb02 = require('./cairoAb02.jpg')
const CairoAb03 = require('./cairoAb03.jpg')
const CairoAb04 = require('./cairoAb04.jpg')
const CairoAb05 = require('./cairoAb05.jpg')
const CairoAb06 = require('./cairoAb06.jpg')
const CairoAb07 = require('./cairoAb07.jpg')
const CairoAb08 = require('./cairoAb08.jpg')
const CairoAb09 = require('./cairoAb09.jpg')
const CairoAb10 = require('./cairoAb10.jpg')
const CairoAb11 = require('./cairoAb11.jpg')
const CairoAb12 = require('./cairoAb12.jpg')

const CairoAbstractPage = () => {
  const {slideshow, setSlideshow} = useState(false);

  return (
    <div>
      <Header />
      <div className='cairo-abstract-container'>
        <p id="cairo-abstracts">Cairo Abstracts</p>

        <div className='cairo-abstract-pics'>
          <img id="pics" src={CairoAb01} alt="Cairo Abstract 01" />
          <img id="pics" src={CairoAb02} alt="Cairo Abstract 02" />
          <img id="pics" src={CairoAb03} alt="Cairo Abstract 03" />
          <img id="pics" src={CairoAb04} alt="Cairo Abstract 04" />
          <img id="pics" src={CairoAb05} alt="Cairo Abstract 05" />
          <img id="pics" src={CairoAb06} alt="Cairo Abstract 06" />
          <img id="pics" src={CairoAb07} alt="Cairo Abstract 07" />
          <img id="pics" src={CairoAb08} alt="Cairo Abstract 08" />
          <img id="pics" src={CairoAb09} alt="Cairo Abstract 09" />
          <img id="pics" src={CairoAb10} alt="Cairo Abstract 10" />
          <img id="pics" src={CairoAb11} alt="Cairo Abstract 11" />
          <img id="pics" src={CairoAb12} alt="Cairo Abstract 12" />
        </div>

        <div className='cairo-abstract-text'>
          <p>Lorem ipsum something something</p>
        </div>

      </div>
      
    </div>
  )
}

export default CairoAbstractPage
