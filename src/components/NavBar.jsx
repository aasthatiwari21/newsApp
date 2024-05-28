import React, { useState } from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <div style={{ color: "white" }}>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" style={{ padding: "0px" }}>
        <div className="container-fluid" style={{ backgroundColor: "#301b30", color: "white" }}>
          <h3 className="font-weight-bold" to="/" style={{ fontWeight: "10px", padding: "10px" }}>NewsMonkey</h3>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ color: "white" }}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" style={{ color: "white" }}>
                <Link
                  className="nav-link"
                  to="/business"
                  style={{ color: "white", textDecoration: activeLink === 'business' ? 'underline' : 'none' }}
                  onClick={() => handleSetActiveLink('business')}
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/entertainment"
                  style={{ color: "white", textDecoration: activeLink === 'general' ? 'underline' : 'none'}}
                  onClick={() => handleSetActiveLink('entertainment')}
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/general"
                  style={{ color: "white", textDecoration: activeLink === 'general' ? 'underline' : 'none' }}
                  onClick={() => handleSetActiveLink('general')}
                >
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/health"
                  style={{ color: "white", textDecoration: activeLink === 'health' ? 'underline' : 'none' }}
                  onClick={() => handleSetActiveLink('health')}
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/science"
                  style={{ color: "white", textDecoration: activeLink === 'science' ? 'underline' : 'none' }}
                  onClick={() => handleSetActiveLink('science')}
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/sports"
                  style={{ color: "white", textDecoration: activeLink === 'sports' ? 'underline' : 'none' }}
                  onClick={() => handleSetActiveLink('sports')}
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/technology"
                  style={{ color: "white", textDecoration: activeLink === 'technology' ? 'underline' : 'none' }}
                  onClick={() => handleSetActiveLink('technology')}
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
