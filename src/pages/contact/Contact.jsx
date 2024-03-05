import React from "react";
import "./contact.css"

import LogoWhite from "../../images/logo-white _1.png"

const Contact = () =>{
  return(
    <>
    <section id="video_box">
    <div className="container">
      <div className="video_box_content">
        <img src={LogoWhite}  alt="Not Found" />
        <div className="content">
          <h2>Extreme Sports Will Test Your Limits And Push The Boundaries To The Max</h2>
          <h6>Be Prepared To Experience The New Adventures</h6>
        </div>
        <div className="video_box_button">
          <button className="common_btn">Discover More</button>
          <button className="common_btn"><i className="fa-solid fa-play"></i>View The Demo</button>
        </div>
      </div>

      <div className="video_box_item">
        <div className="video_item">
          <h2>Sports Videos</h2>
          <h3>Get inspired</h3>
          <div className="video_item_icon">
            <h6>Dolor sit amet magna</h6>
          </div>
        </div>
        <div className="video_item">
          <h2>Sports Videos</h2>
          <h3>Get inspired</h3>
          <div className="video_item_icon">
            <h6>Dolor sit amet magna</h6>
          </div>
        </div>
        <div className="video_item">
          <h2>Sports Videos</h2>
          <h3>Get inspired</h3>
          <div className="video_item_icon">
            <h6>Dolor sit amet magna</h6>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Contact