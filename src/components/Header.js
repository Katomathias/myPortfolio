import React from 'react'
import weed from './images/profile.jpg';

function Header() {
  return (
    <div>
    {/* ======= Mobile nav toggle button ======= */}
  <i className="bi bi-list mobile-nav-toggle d-xl-none" />
  {/* ======= Header ======= */}
  <header id="header">
    <div className="d-flex flex-column">
      <div className="profile">
        <div >
        <img src={weed} alt className="img-fluid rounded-circle" />
        </div>

        <h1 className="text-light"><a href="index.html">Kato Mathias</a></h1>
        <div className="social-links mt-3 text-center">
          <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
          <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
          <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
          <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
          <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
        </div>
      </div>
      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home" /> <span>Home</span></a></li>
          <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user" /> <span>About</span></a></li>
          <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank" /> <span>Resume</span></a></li>
          <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content" /> <span>Portfolio</span></a></li>
          <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server" /> <span>Services</span></a></li>
          <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope" /> <span>Contact</span></a></li>
        </ul>
      </nav>{/* .nav-menu */}
    </div>
  </header>{/* End Header */}
  {/* ======= Hero Section ======= */}
  <div className="hero1">
  <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
    <div className="hero-container" data-aos="fade-in">
      <h1>Kato Mathias</h1>
      <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer" /></p>
    </div>
  </section>{/* End Hero */}
  </div>
     
 
    </div>
  )
}

export default Header