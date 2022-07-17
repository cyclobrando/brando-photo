import Header from "../Header/Header"
import './SlideshowTest.css'

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

const Left = require('./left-arrow.png')
const Right = require('./right-arrow.png')

const SlideshowTest = () => {
  return (
    <div>
        <Header />
        <div className="slideshow-container">
            <div className="left-arrow">
              <img src={Left} alt="Left Arrow" />
            </div>

            <div className="slideshow-pics">
              <img src={CairoAb05} />
            </div>

            <div className="right-arrow">
              <img src={Right} alt="Right Arrow" />
            </div>
        </div>
    </div>
  )
}

export default SlideshowTest
