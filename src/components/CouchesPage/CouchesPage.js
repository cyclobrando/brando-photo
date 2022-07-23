import { useState } from 'react'
import Header from '../Header/Header'
import '../../index.css'
import SlideshowPage from '../SlideshowPage/SlideshowPage'

const Couches1 = require('./couches1.jpg')
const Couches2 = require('./couches2.jpg')
const Couches3 = require('./couches3.jpg')
const Couches4 = require('./couches4.jpg')
const Couches5 = require('./couches5.jpg')
const Couches6 = require('./couches6.jpg')

const CouchesPage = () => {
  const [slideshow, setSlideshow] = useState(false);
  const [image, setImage] = useState("");

 if (!slideshow) {
  return (
    <div>
      <Header />
      <div className='display-container'>
        <p style={{ textDecoration: 'underline' }}>Couches of Cairo - 2010</p>

        <div className='display-pics'>
          <img id="pics" src={Couches1} 
            alt="Couches of Cairo 1"
            onClick={() => {
              setImage("1");
              setSlideshow(true)}} />
          <img id="pics" src={Couches2} 
            alt="Couches of Cairo 2" 
            onClick={() => {
              setImage("2");
              setSlideshow(true)}} />
          <img id="couch3" src={Couches3} 
            alt="Couches of Cairo 3"
            onClick={() => {
              setImage("3");
              setSlideshow(true)}} />
          <img id="pics" src={Couches4} 
            alt="Couches of Cairo 4"
            onClick={() => {
              setImage("4");
              setSlideshow(true)}} />
          <img id="pics" src={Couches5} 
            alt="Couches of Cairo 5"
            onClick={() => {
              setImage("5");
              setSlideshow(true)}} />
          <img id="pics" src={Couches6} 
            alt="Couches of Cairo 6"
            onClick={() => {
              setImage("6");
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
  return <SlideshowPage work="couches" image={image} folder="CouchesPage" />
 } 
}



export default CouchesPage
