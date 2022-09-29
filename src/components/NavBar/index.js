import './index.css'
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <>
    <div className='navbar-container shadow'>
        <nav className='nav-header'>
        <div className='logo-container'>
          <img src="https://res.cloudinary.com/dqsporrgm/image/upload/v1663148083/240_F_251658510_kMapfCr1UZWiu5Nv8g6QWAo9gMWqhheI_anvjre.jpg" 
          alt="website logo" className='website-logo' />
          <h1 className='logo-text'>VIA</h1>
        </div>
        <div className="nav-content">
        <ul className="nav-menu nav-link">
        <li className='nav-items'>
            {/* <Link to="/" className="nav-link"> */}
              Home
            {/* </Link> */}
          </li>
          <li className='nav-items'>
            {/* <Link to="/products" className="nav-link"> */}
            Home
            {/* </Link> */}
          </li>
          <li className='nav-items'>
            {/* <Link to="/products" className="nav-link"> */}
            Home
            {/* </Link> */}
          </li>
          <li className='nav-items'>
            {/* <Link to="/cart" className="nav-link"> */}
            Home
            {/* </Link> */}
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
    {/* <div className='navbar-container'>
    <nav className="nav-header">
      <div className="nav-content">
        <Link to="/" className="nav-link">
        <div className='logo-container'>
          <img
            className="website-logo"
            src="https://res.cloudinary.com/dqsporrgm/image/upload/v1663148083/240_F_251658510_kMapfCr1UZWiu5Nv8g6QWAo9gMWqhheI_anvjre.jpg"
            alt="website logo"
          />
          <h1 className='logo-text'>VIA</h1>
          </div>
        </Link>
        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">
              Cart
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="logout-desktop-btn"
          // onClick={onClickLogout}
        >
          Logout
        </button>
      </div>
      </nav>
    </div> */}
    </>
  )
}

export default NavBar;