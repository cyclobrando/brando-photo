import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header'
import './WorksPage.css'
const CairoAb = require('../CairoAbstractPage/cairoAb05.jpg')
const PowerStr = require('../PowerStrugglesPage/dance-3.jpg')

const WorksPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header/>

      <div className='works-container'>

        <p id="ab-works">Abstract Works</p>
        <div className='works-abstract-container'>
          
          <div className='works-cairoab'>
            <img id="works-img" src={CairoAb} alt="Cairo Abstracts" 
              onClick={() => {
                navigate('/works/cairo-abstracts')}}/>
            <p id="ab-click" onClick={() => {
                navigate('/works/cairo-abstracts')}}>Cairo Abstracts</p>
          </div>

          <div className='works-powerstr'>
            <img id="works-img" src={PowerStr} alt="Power Struggles" 
              onClick={() => {
                navigate('/works/power-struggles')}}/>
            <p id="ab-click" onClick={() => {
                navigate('/works/power-struggles')}}>Power Struggles</p>
          </div>
        </div>


        
      </div>


    </div>
  )
}

export default WorksPage
