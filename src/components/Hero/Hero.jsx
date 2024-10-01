import React from 'react'
import './Hero.css'
import anupam from '../../assets/anupam.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
  return (
    <div className='hero'id='home'>
      <img src={anupam} style={{height:"300px",width:"300px",  borderRadius:"50%",objectFit:"cover"}} alt="" />
      <h1><span>Hello!</span> I am Anupam Pratap singh k.c, From Bhairahwa</h1>
      <p><span>I am Web-developer </span>,and i completed my internship from Xdezo technology,pokhara.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Get connected</AnchorLink></div>
        <div className="hero-resume"><AnchorLink className='anchor-link' offset={50} href='#'>My resume</AnchorLink></div>
      </div>
    </div>
  )
}

export default Hero
