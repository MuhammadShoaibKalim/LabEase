import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { MDBBtn } from 'mdb-react-ui-kit';
import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{ backgroundColor: '#75DBD0' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ paddingLeft: '250px', color:'#75DBD0'}}>
          Logo
        </a>

        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon">
            <FontAwesomeIcon icon={faBars} />
          </span>
        </button>

        <div className={`collapse navbar-collapse${isMenuOpen ? ' show' : ''}`} id="navbarSupportedContent">
          <form className="d-flex">
            <div className="input-group" style={{ paddingLeft: '120px' }}>
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn " type="submit" >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </form>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0" style={{ paddingLeft: '170px' }}> 
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" style={{ color: '#000' }}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#about" style={{ color: '#000' }}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#test" style={{ color: '#000' }}>Test</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#contact" style={{ color: '#000' }}>Contact Us</a>
            </li>
          </ul>
          <div className="d-flex flex-grow-1 justify-content-end">
            <MDBBtn className='me-1' style={{ color: '#f8f9fa', backgroundColor: '#75DBD0' }}>
              Cart
            </MDBBtn>
            <MDBBtn className='me-1' color='secondary' style={{ color: '#f8f9fa', backgroundColor: '#75DBD0' }}>
              Profile
            </MDBBtn>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;