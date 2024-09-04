import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    
  


  return (
    <header className="container-fluid nav_style mx-auto bg-dark">
      <div className="row">
        <div className="col-md-10 col-11 mx-auto ">
          <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src="assets/images/Logo.png" className="image-fluid" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/" className="nav-link" href="#">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/company"
                      offset={-100}
                      className="nav-link"
                      href="#"
                    >
                      Company
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/stars" offset={30} className="nav-link" href="#">
                      Sports Stars
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/pro" offset={-24} className="nav-link" href="#">
                      Products
                    </Link>
                  </li>
                  <li className="nav-item">
                   
                    <Link to="/contactus" offset={-100}  className="nav-link">Contact </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" offset={-100} className="nav-link" href="#">
                      Sign In
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="line">
            <img src="assets/images/dot_line.png" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
