import React, { Component } from 'react'
import { Link } from "react-router-dom"; 
export class NavBar extends Component {
  render() {
    return (
      <div style={{ color: "white" }}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid" style={{ backgroundColor: "#301b30", color: "white" }}>
            <h3 className="font-weight-bold" to="/" style={{ fontWeight: "10px", padding: "10px" }}>NewsMonkey</h3>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ color: "white" }}>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" style={{ color: "white" }}>
                  <Link className="nav-link" to="/business" style={{ color: "white" }}>Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment" style={{ color: "white" }}>Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general" style={{ color: "white" }}>General</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health" style={{ color: "white" }}>Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science" style={{ color: "white" }}>Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports" style={{ color: "white" }}>Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology" style={{ color: "white" }}>Technology</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar;