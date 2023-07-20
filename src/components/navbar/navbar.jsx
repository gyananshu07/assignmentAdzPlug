import React from "react";
import "./navbar.css";

import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="navbar-container"
      >
        <div className="container my-2">
          <div className="logo-container">
            <a href="#">
              <img
                className="logo"
                src="https://www.freeskout.com/img/freeskout.png"
                alt="logo"
              />
            </a>
          </div>

          <div className="links-container">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link " href="#brands">
                  Brands
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#influencers">
                  Influencers
                </a>
              </li>
              <li class="nav-item">
                <a href="#pricing" class="nav-link">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#blogs">
                  Blogs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
