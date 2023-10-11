import React from "react";
import { NavLink } from "react-router-dom";
// import web from "../component/images/p1.png";

const Common = (props) => {
  return (
    <div>
      <section id="header" className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className=" col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                  <h1>
                    {props.name}
                   <strong>AviNaj</strong>
                  </h1>

                  <h2 className="my-3">
                    we are team of talented developer maling website.
                  </h2>

                  <div className=" mt-3">
                    <NavLink
                      to={props.visit}
                      className=" btn-get-started alert-danger"
                    >
                     {props.btname}
                    </NavLink>
                  </div>
                </div>

                <div className=" my-lg-6 order-1 order-lg-2 header-img">
                  <img src={props.imgsrc} alt="" className=" img-fluid animated" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Common;
