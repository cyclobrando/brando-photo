import Header from '../Header/Header'
import './IndexPage.css'

const IndexPage = () => {
  
  const Car = require('./indexpic01.jpg');
  const Factory = require('./indexpic02.jpg');
  const Beach = require('./indexpic03.jpg');
  const Woods = require('./indexpic04.jpg');
  const images = [];
  images.push(Car, Factory, Beach, Woods);
  


  return (
    <div className='index'>
      <Header/>

      <div className='index-img'>
      <img src={images[Math.floor(Math.random()*4)]} alt="Stereotypical beat up old car" />
      </div>

    </div>
  )
}

export default IndexPage
