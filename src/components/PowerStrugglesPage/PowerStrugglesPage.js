import { useState } from 'react'
import Header from '../Header/Header'
import '../../index.css'
import SlideshowPage from '../SlideshowPage/SlideshowPage'

const Dance1 = require('./dance-1.jpg')
const Dance2 = require('./dance-2.jpg')
const Dance3 = require('./dance-3.jpg')
const Dance5 = require('./dance-5.jpg')
const Dance6 = require('./dance-6.jpg')
const Dance7 = require('./dance-7.jpg')

const PowerStrugglesPage = () => {
  const [slideshow, setSlideshow] = useState(false);
  const [image, setImage] = useState("");

  if (!slideshow) {
    return (
      <div>
        <Header />
        <div className='display-container'>
          <p style={{ textDecoration: 'underline' }}>Power Struggles - 2010</p>
  
          <div className='display-pics'>
            <img id="pics" src={Dance1} 
              alt="Dance 1"
              onClick={() => {
                setImage("-1");
                setSlideshow(true)}} />
            <img id="pics" src={Dance2} 
              alt="Dance 2"
              onClick={() => {
                setImage("-2");
                setSlideshow(true)}} />
            <img id="pics" src={Dance3}  
              alt="Dance 3"
              onClick={() => {
                setImage("-3");
                setSlideshow(true)}} />
            <img id="pics" src={Dance5} 
              alt="Dance 5"
              onClick={() => {
                setImage("-5");
                setSlideshow(true)}} />
            <img id="pics" src={Dance6} 
              alt="Dance 6"
              onClick={() => {
                setImage("-6");
                setSlideshow(true)}} />
            <img id="pics" src={Dance7} 
              alt="Dance 7"
              onClick={() => {
                setImage("-7");
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
    return <SlideshowPage work="dance" image={image} folder="PowerStrugglesPage" />
  }
}
  
  export default PowerStrugglesPage