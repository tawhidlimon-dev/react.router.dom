import React from 'react'
import "./footer.css"
import FooterLogo from "../images/logo.png"
import FooterImage from "../images/footer-image.jpg"

const Footer = () => {
  return (
    <>
    <footer id="footer">
    <div className="footer_wrapper">
      <div className="footer_img">
        <img src={FooterImage} alt="Not Found" />
      </div>
      <div className="footer_text">
        <div className="text_item">
          <div className="footer_logo">
            <img src={FooterLogo} alt="Not Found" />
          </div>
          <div className="footer_content_item">
            <button className="common_btn">Join Our Club</button>
            <p>Dolor sit amet ipsum consectetur adipiscing elit sed eiusmod tempor 
              incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse 
              ultrices ipsum sed dolor.</p>
          </div>
        </div>
        <div className="footer_contact_wrapper">
          <h2>Contact Us</h2>
          <div className="address">
            <h6>586 Avada Avenue, Avadaville 30221 – USA</h6>
            <h6>Email: ext-sports@my-domain.com</h6>
            <h6>Phone: (555) 802-1234</h6>
          </div>
        </div>
        <div className="copyright">
          <h6>© 2021 | Avada Theme by ThemeFusion | All Rights Reserved.</h6>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer
