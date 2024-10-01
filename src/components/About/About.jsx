import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_anupam from '../../assets/about_anupam.jpg'

const About = () => {
  return (
    <div className='about'id='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={about_anupam} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a web developer who specializes in building the user-facing part of websites and web applications</p>
                    <p>My primary responsibility is to ensure that the visual elements of a website, including layout, design, and interactive features, are functional, efficient, and provide a seamless user experience.I work closely with backend developers, UX/UI designers, and project managers to bring designs to life and ensure that the application works across different devices and browsers.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML,CSS</p><hr style={{width:"50%"}} />
                    </div>
                    <div className="about-skill">
                        <p>REACT JS</p><hr style={{width:"60%"}} />
                    </div>
                    <div className="about-skill">
                        <p>JAVASCRIPT</p><hr style={{width:"70%"}} />
                    </div>
                    <div className="about-skill">
                        <p>PYTHON</p><hr style={{width:"60%"}} />
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>1o+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>6+</h1>
                <p>CUSTOMERS ARE HAPPY</p>
            </div>
        </div>
      
    </div>
  )
}

export default About
