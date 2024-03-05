import React from "react";
import "./about.css"

import ItemIcon from "../../images/item_icon.svg"
import ExcitementImageOne from "../../images/excitement_img1.jpg"
import ExcitementImageTwo from "../../images/excitement_img2.jpg"

const About = () =>{
  return(
    <>
    <section id="excitement">
        <div className="container">
          <div className="excitement_wrapper">
            <div className="excitement_content">
              <h3 className="sub_heading">Feel The Excitement</h3>
              <h2 className="heading">Join Us And Embark On New Adventures</h2>
              <p className="paragraph">Dolor sit amet consectetur adipiscing elits eiusmod tempor incididunts laboreyse dolore mag aliqua. Quis ipsum supendise ultrices gravid. Risus commodo viverra sed ipsum maecenas.</p>
              <div className="excitement_content_item">
                <ul>
                  <li>
                    <img src={ItemIcon} alt="Not Found" />
                  </li>
                  <li className="paragraph">
                    Unde omnis iste natus error sit voluptatem dolore
                  </li>
                </ul>
                <ul>
                  <li>
                    <img src={ItemIcon} alt="Not Found" />
                  </li>
                  <li className="paragraph">
                    Eaque ipsa quae ab illo inventore veritatis quasi que
                  </li>
                </ul>
                <ul>
                  <li>
                    <img src={ItemIcon} alt="Not Found" />
                  </li>
                  <li className="paragraph">
                    Accusantium dolore que laudantium totamrem periam
                  </li>
                </ul>
              </div>
              <div className="excitement_btn">
                <button className="common_btn">Discover More</button>
              </div>
            </div>
            <div className="excitement_img">
              <div className="excitement_img_item">
                <img src={ExcitementImageOne} alt="Not Found" />
              </div>
              <div className="excitement_img_item">
                <img src={ExcitementImageTwo} alt="Not Found" />
              </div>
            </div>
          </div> 
        </div>
     </section>
    </>
  )
}
  

export default About
