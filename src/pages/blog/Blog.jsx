import React from "react";
import "./blog.css"

import SportsImage from "../../images/sports_image_item.jpg"
import SportsBottomShape from "../../images/sports_bottom_shape.png"

const Blog = () =>{
  return(
    <>
    <section id="Sports">
    <div className="container">
        <div className="sports_contant">
          <div>
            <h3 className="sub_heading">Live The Excitement</h3>
            <h2 className="heading">Extreme Sports Activities</h2>
          </div>
          <div className="paragraph">
            <p>Dolor sit amet consectetur adipiscing elit sed con eiusmod tempor     incididunt labore etys dolore magna aliqua. Quis ipsum suspendisse ultrices gravida risus ipsum dolore commodo viverra maecenas.</p>
          </div>
        </div>
        <div className="sports_wrapper">
          <div className="sports_item">
            <div className="sports_image_item">
              <img src={SportsImage} alt="Not Found" />
            </div>
            <h2>Mountain Biking</h2>
            <h6>Dolor sit amet magna</h6>
          </div>
          <div className="sports_item">
            <div className="sports_image_item">
              <img src={SportsImage} alt="Not Found" />
            </div>
            <h2>Mountain Biking</h2>
            <h6>Dolor sit amet magna</h6>
          </div>
          <div className="sports_item">
            <div className="sports_image_item">
              <img src={SportsImage} alt="Not Found" />
            </div>
            <h2>Mountain Biking</h2>
            <h6>Dolor sit amet magna</h6>
          </div>
          <div className="sports_item">
            <div className="sports_image_item">
              <img src={SportsImage} alt="Not Found" />
            </div>
            <h2>Mountain Biking</h2>
            <h6>Dolor sit amet magna</h6>
          </div>
          <div className="sports_item">
            <div className="sports_image_item">
              <img src={SportsImage} alt="Not Found" />
            </div>
            <h2>Mountain Biking</h2>
            <h6>Dolor sit amet magna</h6>
          </div>
          <div className="sports_item">
            <div className="sports_image_item">
              <img src={SportsImage} alt="Not Found" />
            </div>
            <h2>Mountain Biking</h2>
            <h6>Dolor sit amet magna</h6>
          </div>
          <div className="shape">
            <shape>Extreme Sports</shape>
          </div>   
        </div>
    </div>
    <div className="sports_bottom_shape">
      <img src={SportsBottomShape} alt="Not Found"/>
    </div>
  </section>
    </>
  )
}

export default Blog