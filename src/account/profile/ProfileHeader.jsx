import react, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { MDBIcon } from 'mdb-react-ui-kit';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { LuGripHorizontal } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import "./ProfileHeader.css";

const ProfileHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{ backgroundColor: '#75DBD0' }}>
            <div className="container-fluid ">
                <a className="navbar-brand " href="#" style={{ paddingLeft: '250px', color: '#75DBD0' }}>
                    LabEase
                </a>

                <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                    <span className="navbar-toggler-icon">
                        <FontAwesomeIcon icon={faBars} />
                    </span>
                </button>

                <div className={`collapse navbar-collapse${isMenuOpen ? ' show' : ''}`} id="navbarSupportedContent">
                    <form className="d-flex">
                        <div className="input-group input-search"  >
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
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0" style={{ paddingLeft: '150px' }}>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/" style={{ color: '#000' }}>Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link active" to="/about" style={{ color: '#000' }}>About</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link active" to="/test" style={{ color: '#000' }}>Test</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link active" to="/contact" style={{ color: '#000' }}>Contact Us</Link>
                        </li>
                    </ul>
                    <div className="d-flex flex-grow-1 justify-content-end">
  
    <Link to="/more" className="me-2">
        <BsFillGrid3X3GapFill fas />
    </Link>
    <Link to="/profile" className="me-2">
        <CgProfile />
    </Link>
</div>

                </div>
            </div>
        </nav>
    );
};

export default ProfileHeader;



/*
     <div className="d-flex flex-grow-1 justify-content-end">
            <Link to ="/cart">
                  <MDBBtn className='me-1' style={{ color: '#f8f9fa', backgroundColor: '#75DBD0' }}>
                       Cart
                </MDBBtn>
             </Link>
                  <Link to="/profile">
                          <MDBBtn className='me-1' color='secondary' style={{ color: '#f8f9fa', backgroundColor: '#75DBD0' }}>
                            Profile  
                          </MDBBtn>
                  </Link>
          </div>
*/ 