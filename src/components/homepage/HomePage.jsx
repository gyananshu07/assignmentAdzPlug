import React from "react";
import "./homePage.css";

function HomePage() {
  return (
    <>
      <header className="homepage-container" id="header">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        <div className="container h-100 header-container">
          <div className="text-container">
            <h1 className="header-text">Discover. Connect. Collaborate</h1>
            <h3 className="body-text">
              An ecosystem for Social Media Influencer and Brands.
            </h3>

            <div className="button-container">
              <button className="button-cta">I'm an Influencer</button>
              <button className="button-cta">I'm a Brand</button>
            </div>
          </div>

          <div className="image-container">
            <img
              className="hero-image"
              src="https://www.freeskout.com/img/top-influencer-profiles/top-3.png"
              alt="heroImage-header"
            />
          </div>
        </div>

        <div className="waveWrapper waveAnimation">
          <div className="wave-inner-container image-top">
            <div className="wave wave-top"></div>
          </div>
          <div className="wave-inner-container image-middle">
            <div className="wave wave-middle"></div>
          </div>
          <div className="wave-inner-container image-bottom">
            <div className="wave wave-bottom"></div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HomePage;
