import { useState } from "react"
import Header from "../Header/Header"
import CairoAbstractPage from "../CairoAbstractPage/CairoAbstractPage"
import PowerStrugglesPage from "../PowerStrugglesPage/PowerStrugglesPage"
import CouchesPage from "../CouchesPage/CouchesPage"
import './SlideshowPage.css'

const Left = require('./left-arrow.png')
const Right = require('./right-arrow.png')
const Close = require('./close.png')

const SlideshowTest = (props) => {
  const [selected, setSelected] = useState(props.image);
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [close, setClose] = useState(false);

  const leftClick = () => {
    if (props.work === "cairoAb") {
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
    if (props.work === "dance") {
      if (selected === "-7") {
        setSelected("-6")
      } else if (selected === "-6") {
        setSelected("-5")
      } else if (selected === "-5") {
        setSelected("-3")
      } else if (selected === "-3") {
        setSelected("-2")
      } else if (selected === "-2") {
        setSelected("-1")
      } else if (selected === "-1") {
        setSelected("-7")
      }
    } 
    if (props.work === "couches") {
      if (selected === "6") {
        setSelected("5")
      } else if (selected === "5") {
        setSelected("4")
      } else if (selected === "4") {
        setSelected("3")
      } else if (selected === "3") {
        setSelected("2")
      } else if (selected === "2") {
        setSelected("1")
      } else if (selected === "1") {
        setSelected("6")
      }
    }
  }

  const rightClick = () => {
    if (props.work === "cairoAb") {
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
    if (props.work === "dance") {
      if (selected === "-1") {
        setSelected("-2")
      } else if (selected === "-2") {
        setSelected("-3")
      } else if (selected === "-3") {
        setSelected("-5")
      } else if (selected === "-5") {
        setSelected("-6")
      } else if (selected === "-6") {
        setSelected("-7")
      } else if (selected === "-7") {
        setSelected("-1")
      }
    }
    if (props.work === "couches") {
      if (selected === "1") {
        setSelected("2")
      } else if (selected === "2") {
        setSelected("3")
      } else if (selected === "3") {
        setSelected("4")
      } else if (selected === "4") {
        setSelected("5")
      } else if (selected === "5") {
        setSelected("6")
      } else if (selected === "6") {
        setSelected("1")
      }
    }
  }

  if (!close) {
    return (
    <div>
      <Header />
      <div className="slideshow-container">

        <div className="picture-container">
          <div className="slideshow-pics">
            <img src={require(`../${props.folder}/${props.work}${selected}.jpg`)} alt="" />
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

        <img id="close" src={Close} 
          onClick={() => {setClose(true)}}/>

      </div>  
    </div>
    )
  }

  if (close) {
    if (props.work === "cairoAb") {
      return <CairoAbstractPage />
    }
    if (props.work === "dance") {
      return <PowerStrugglesPage />
    }
    if (props.work === "couches") {
      return <CouchesPage />
    }
  }
}

export default SlideshowTest
