import { useState } from 'react'
import Header from '../Header/Header'
import '../../index.css'
import SlideshowPage from '../SlideshowPage/SlideshowPage'

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
  const [slideshow, setSlideshow] = useState(false);
  const [image, setImage] = useState("")

 if (!slideshow) {
  return (
    <div>
      <Header />
      <div className='display-container'>
        <p style={{ textDecoration: 'underline' }}>Cairo Abstracts</p>

        <div className='display-pics'>
          <img id="pics" src={CairoAb01} 
            alt="Cairo Abstract 01"
            onClick={() => {
              setImage("01");
              setSlideshow(true)}} />
          <img id="pics" src={CairoAb02} 
            alt="Cairo Abstract 02" 
            onClick={() => {
              setImage("02");
              setSlideshow(true)}} />
          <img id="pics" src={CairoAb03} 
            alt="Cairo Abstract 03"
            onClick={() => {
              setImage("03");
              setSlideshow(true)}} />
          <img id="pics" src={CairoAb04} 
            alt="Cairo Abstract 04"
            onClick={() => {
              setImage("04");
              setSlideshow(true)}} />
          <img id="pics" src={CairoAb05} 
            alt="Cairo Abstract 05"
            onClick={() => {
              setImage("05");
              setSlideshow(true)}} />
          <img id="pics" src={CairoAb06} 
            alt="Cairo Abstract 06"
            onClick={() => {
              setImage("06");
              setSlideshow(true)}} />
          <img id="pics" src={CairoAb07} 
            alt="Cairo Abstract 07"
            onClick={() => {
              setImage("07");
              setSlideshow(true)}} />
          <img id="pics" src={CairoAb08} 
            alt="Cairo Abstract 08"
            onClick={() => {
              setImage("08");
              setSlideshow(true)}} />
          <img id="pics" src={CairoAb09} 
            alt="Cairo Abstract 09"
            onClick={() => {
              setImage("09");
              setSlideshow(true)}} />
          <img id="pics" src={CairoAb10} 
            alt="Cairo Abstract 10"
            onClick={() => {
              setImage("10");
              setSlideshow(true)}} />
          <img id="pics" src={CairoAb11} 
            alt="Cairo Abstract 11"
            onClick={() => {
              setImage("11");
              setSlideshow(true)}} />
          <img id="pics" src={CairoAb12} 
            alt="Cairo Abstract 12"
            onClick={() => {
              setImage("12");
              setSlideshow(true)}} />
        </div>

        <div className='display-text'>
          <p>Lorem ipsum something something</p>
        </div>

      </div>
    </div>
  )
 } 
 
 if (slideshow) {
  return <SlideshowPage work="cairoAb" image={image} folder="CairoAbstractPage" />
 } 
}



export default CairoAbstractPage
