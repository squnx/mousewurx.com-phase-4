import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <NavLink to="/" activeclassname="active" className="logo d-flex align-items-center"><h1 className="sitename">mousewurx</h1></NavLink>
        {/* <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> --> */}
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
            <li><NavLink to="/about" activeclassname="active">About</NavLink></li>
            <li><NavLink to="/services" activeclassname="active">Services</NavLink></li>
            <li><NavLink to="/portfolio" activeclassname="active">Portfolio</NavLink></li>
            <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </header>
  )
}

export default Header