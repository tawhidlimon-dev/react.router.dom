import React from "react";
import "./home.css"
import BannerImage from "../../images/banner_botthom_shafe.png"

const Home = () =>{
  return(
    <>
    <section id="banner">
    <div className="container">
      <div className="banner_content">
          <h1>Experience The Spirit Of Adventure Sports</h1>
        <div className="banner_btn">
          <a href="#" className="common_btn">Explor Activities</a>
          <a href="#" className="common_btn">Who We Are</a>
        </div>
      </div>
    </div>
    <div className="banner_shafe">
      <img src={BannerImage} alt="Not Found" />
    </div>
    </section>
    </>
  )
}

export default Home