import React from "react";
import "./service.css";

const Service = () =>{
  return(
    <>
    <section id="service_wrapper">
      <div className="container">
        <div className="box_wrapper">
          <div className="box">
            <span className="counter">10+</span>
            <h6 className="paragraph">Sports Activities</h6>
          </div>
          <div className="box">
            <span className="counter">3K+</span>
            <h6 className="paragraph">Registered Enthusiasts</h6>
          </div>
          <div className="box">
            <span className="counter">15+</span>
            <h6 className="paragraph">Years of Experience</h6>
          </div>
          <div className="box">
            <span className="counter">9.5</span>
            <h6 className="paragraph">Average Rating</h6>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Service