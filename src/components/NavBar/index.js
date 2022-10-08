import './index.css'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <div className='navbar-container shadow'>
        <nav className='nav-header '>
        <div className='logo-container'>
          <img src="https://res.cloudinary.com/dqsporrgm/image/upload/v1663148083/240_F_251658510_kMapfCr1UZWiu5Nv8g6QWAo9gMWqhheI_anvjre.jpg" 
          alt="website logo" className='website-logo' />
          <h1 className='logo-text'>VIA</h1>
        </div>
        <div className="nav-content">
        <ul className="nav-menu nav-link">
        <li className='nav-items'>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className='nav-items'>
            <Link to="/auctiontypes" className="nav-link">
            Auction Types
            </Link>
          </li>
          <li className='nav-items'>
            <Link to="/about" className="nav-link">
            About
            </Link>
          </li>
          <li className='nav-items'>
            <Link to="/contact" className="nav-link">
            Contact
            </Link>
          </li>
          <li className='nav-items'>
            <Link to="/help" className="nav-link">
            Help
            </Link>
          </li>
        </ul>
        </div>
        <button
          type="button"
          className="logout-desktop-btn"
          // onClick={onClickLogout}
        >
          Logout
        </button>
        </nav>
    </div>
  )
}

export default NavBar;