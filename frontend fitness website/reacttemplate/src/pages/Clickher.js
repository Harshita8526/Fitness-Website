import React from "react";
import NavBar from "./NavBar";

function Clickher() {
  return (
    <div id="home_page ">
      <NavBar />
      <div className="container-fluid click_here_block">
        <div className="row">
          <div className="col-11 col-md-10 mx-auto">
            <div className="row">
              <div className="col-md-6 col-12  click_here_paragraph">
                <div class="boost_power_now">
                <p className="header_text ">
                  BOOST
                  <br className="power" />
                  YOUR POWER
                  <br />
                  NOW
                </p>
                </div>
                <p className="header_text2">
                <div>
                  Welcome to our wellness sanctuary, a digital oasis designed to nurture every
                   facet of your health and well-being. We understand that achieving and maintaining a balanced, 
                   vibrant life can be a complex journey, and that's why we're here to offer you expert guidance every step of the way.
                   </div>
                </p>
                
              </div>
              <div className="col-md-6 col-12">
                <div className="float-end cycle">
                  <figure>
                    <img
                      src="assets/images/race-img1.png"
                      className="image-fluid"
                      alt="Race Image 1"
                    />
                  </figure>
                  <div className="cycle2">
                    <img
                      src="assets/images/race-img1 copy.png"
                      className="image-fluid"
                      alt="Race Image 1 Copy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default Clickher;
