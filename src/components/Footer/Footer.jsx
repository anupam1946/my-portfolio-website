import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>I am Anupam k.c, i am from bhairahwa and i have been working in this sector for 5 years now.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
                
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">2024! All rights reserved</p>
            <div className="footer-bottom-right">
              <p>Term of services</p>
              <p>privacy and policy</p>
              <p>Get connect with me</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
