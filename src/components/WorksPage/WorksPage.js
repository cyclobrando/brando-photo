import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header'
import './WorksPage.css'
const CairoAb = require('../CairoAbstractPage/cairoAb05.jpg')
const PowerStr = require('../PowerStrugglesPage/dance-3.jpg')
const Couches = require('../CouchesCairoPage/couches-1.jpg')

const WorksPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header/>
      <div className='works-container2'>

        <p id="cairo-works">Cairo, Illinois</p>
        <div className='cairo-works-container'>

            <div className='container-cell'>
                <div className='img-container'>
                    <img id='works-cairoab' src={CairoAb} alt="Cairo Abstracts" 
                        onClick={() => {
                        navigate('/works/cairo-abstracts')}}/>
                </div>
                <p id="click" onClick={() => {
                navigate('/works/cairo-abstracts')}}>Cairo Abstracts</p>
            </div>

            <div className='container-cell'>
                <div className='img-container'>
                <img id="works-power" src={PowerStr} alt="Power Struggles" 
                        onClick={() => {
                        navigate('/works/power-struggles')}}/>
                </div>
                <p id="click" onClick={() => {
                navigate('/works/power-struggles')}}>Power Struggles</p>
            </div>

            <div className='container-cell'>
                <div className='img-container'>
                <img id="works-img" src={Couches} alt="Couches of Cairo" 
                    onClick={() => {
                    navigate('/works/couches-of-cairo')}}/>
                </div>
                <p id="click" onClick={() => {
                navigate('/works/couches-of-cairo')}}>Couches of Cairo</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WorksPage
