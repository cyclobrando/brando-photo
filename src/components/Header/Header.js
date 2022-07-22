import { useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom'
import './Header.css'
const Logo = require('./templogo2.png')

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className='header-container'>
        <div className='header-box'>
        <img id="logo" src={Logo} alt="Brandon Chapple Photography" 
        onClick={() => {
          if (location.pathname === "/") {
            window.location.reload(false);
          } else navigate('/');
          window.location.reload(false);
        }}/>
        </div>
    
        <div className='header-box'>
            <p onClick={() => {
              navigate('/works')
            }}>+Works</p>
            <p>About</p>
            <p>Contact</p>
        </div>

    </div>
  )
}

export default Header
