import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <ul className="header-container">
    <li className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo-image"
      />
      <h1 className="logo-text">Wave</h1>
    </li>
    <li className="navigation-container">
      <Link className="navigation-button" to="/">
        Home
      </Link>
      <Link className="navigation-button" to="/about">
        About
      </Link>
      <Link className="navigation-button" to="/contact">
        Contact
      </Link>
    </li>
  </ul>
)

export default Header
