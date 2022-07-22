import { useState } from "react"
import Header from "../Header/Header"
import './SlideshowTest.css'

const Left = require('./left-arrow.png')
const Right = require('./right-arrow.png')
const Close = require('./close.png')

const SlideshowTest = () => {
  const [selected, setSelected] = useState("02");
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);

  const leftClick = () => {
    if (selected === "12") {
      setSelected("11")
    } else if (selected === "11") {
      setSelected("10")
    } else if (selected === "10") {
      setSelected("09")
    } else if (selected === "09") {
      setSelected("08")
    } else if (selected === "08") {
      setSelected("07")
    } else if (selected === "07") {
      setSelected("06")
    } else if (selected === "06") {
      setSelected("05")
    } else if (selected === "05") {
      setSelected("04")
    } else if (selected === "04") {
      setSelected("03")
    } else if (selected === "03") {
      setSelected("02")
    } else if (selected === "02") {
      setSelected("01")
    } else if (selected === "01") {
      setSelected("12")
    }
  }

  const rightClick = () => {
    if (selected === "01") {
      setSelected("02")
    } else if (selected === "02") {
      setSelected("03")
    } else if (selected === "03") {
      setSelected("04")
    } else if (selected === "04") {
      setSelected("05")
    } else if (selected === "05") {
      setSelected("06")
    } else if (selected === "06") {
      setSelected("07")
    } else if (selected === "07") {
      setSelected("08")
    } else if (selected === "08") {
      setSelected("09")
    } else if (selected === "09") {
      setSelected("10")
    } else if (selected === "10") {
      setSelected("11")
    } else if (selected === "11") {
      setSelected("12")
    } else if (selected === "12") {
      setSelected("01")
    }
  }

  return (
    <div>
      <Header />
      <div className="slideshow-container">

        <div className="picture-container">
          <div className="slideshow-pics">
            <img src={require(`./cairoAb${selected}.jpg`)} alt="Cairo Abstacts" />
          </div>

          <div className="arrow-container">
            <div className="arrows"
              onMouseOver={() => setLeftOpen(true)} 
              onMouseOut={() => setLeftOpen(false)}
              onClick={leftClick}>
              {leftOpen ? <img src={Left} alt="Left Arrow" /> : <span className="empty-span"/>}
            </div>

            <div className="arrow-placeholder"/>

            <div className="arrows"
              onMouseOver={() => setRightOpen(true)} 
              onMouseOut={() => setRightOpen(false)}
              onClick={rightClick}>
              {rightOpen ? <img src={Right} alt="Right Arrow" /> : <span className="empty-span"/>}
            </div>
          </div>
        </div>

        <img id="close" src={Close} />

      </div>
        
        
    </div>
  )
}

export default SlideshowTest
