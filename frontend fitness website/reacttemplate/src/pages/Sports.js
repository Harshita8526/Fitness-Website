import React from "react";
import NavBar from "./NavBar";
import { Footer } from "./Footer";

const Sports = () => {
  return (
    <div id="stars">
      <NavBar />
      <div className="container images4">
        <div className="row">
          {/* <!-- First Div --> */}
          <div className="col-md-6 mt-md-5">
            <div>
              <img src="assets/images/s1_box.png" className="img-fluid" />
            </div>
          </div>

          {/* <!-- Second Div --> */}
          <div className="col-md-6 mt-md-5">
            <div>
              <img src="assets/images/s2_box.png" className="img-fluid" />
            </div>
          </div>
        </div>

        <div className="row mt-4">
          {/*  <!-- Third Div --> */}
          <div className="col-md-6 mb-md-5 special2">
            <div>
              <img src="assets/images/s3_box.png" className="img-fluid" />
            </div>
          </div>

          {/* <!-- Fourth Div --> */}
          <div className="col-md-6 mb-md-5">
            <div className="">
              <img src="assets/images/s4_box.png" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Sports;
