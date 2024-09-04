import React from "react";
import axios from "axios";

const Home = () => {
  return (
    <div id="home_page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-11 col-md-10 mx-auto">
            <div className="row">
              <div className="col-md-6 col-12">
                <p className="header_text">
                  BOOST
                  <br className="power" />
                  YOUR POWER
                  <br />
                  NOW
                </p>
                <p className="header_text2">
                  Welcome to our wellness website, where we offer expert
                  guidance on fitness, nutrition, and overall well-being. Join
                  us on the path to a healthier, happier you.
                </p>
                <div className="click">
                  Click Here
                  <img src=" assets/images/click_rect.png" />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="float-end cycle">
                  <figure>
                    <img
                      src="assets/images/race-img1.png"
                      className="image-fluid"
                    />
                  </figure>
                  <div className="cycle2">
                    <img
                      src="assets/images/race-img1 copy.png"
                      className="image-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dots">
          <div className="dot1"></div>
          <div className="dot2"></div>
          <div className="dot3"></div>
          <div className="dot4"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
