import React,{useState} from 'react'
import{useTypewriter, Cursor} from 'react-simple-typewriter'
import weed from './images/profile.jpg';
import { Link } from 'react-router-dom';
import {Route, Routes} from "react-router-dom";
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Services from './Services';
import Contact from './Contact';


const DashboardComponent = () => {
    const [text]=useTypewriter({
      words: [' Developer', ' Designer', ' FreeLancer'],
      loop:{},
      typeSpeed:120,
      deleteSpeed:80,
    });
    return(
      <>
      {/* ======= Hero Section ======= */}
    <div className="hero1">
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
      <div className="hero-container" data-aos="fade-in">
        <h1>Kato Mathias</h1>
        <p style={{margin: '50px'}}>I'm a
        <span style={{fontWeight:'bold', color:'white'}}>
      {text}
      </span>
      <span style={{color:'blue'}}>
      <Cursor/>
      </span>
        </p>
      </div>
      <div>
      <h1 >
      I'm a
      <span style={{fontWeight:'bold', color:'white'}}>
      {text}
      </span>
      <span style={{color:'blue'}}>
      <Cursor/>
      </span>
      
      </h1>
    </div>
    </section>{/* End Hero */}
    </div>
    </>
    )
  
  
  }
function Homepage() {
    const [current, setCurrent] = useState("initial");
  return (
    <div>
        <div>
    {/*<Routes>
      <Route path="/" element={<Header/>}/>
     
  </Routes>  */}
  
      
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
          <a href="https://instagram.com/katokibirigemathias?igshid=ZDc4ODBmNjlmNQ==" className="instagram"><i className="bx bxl-instagram" /></a>
          <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
          <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
        </div>
      </div>
      <nav id="navbar" className="nav-menu navbar">
        <ul>
        
          <li><a  className="nav-link scrollto active" onClick={() => setCurrent("initial")}><i className="bx bx-home" /> <span>Home</span></a></li>
          <li><a  className="nav-link scrollto" onClick={() => setCurrent("about")}><i className="bx bx-user" /> <span>About</span></a></li>
          <li><a  className="nav-link scrollto" onClick={() => setCurrent("resume")}><i className="bx bx-file-blank" /> <span>Resume</span></a></li>
          <li><a  className="nav-link scrollto" onClick={() => setCurrent("portfolio")}><i className="bx bx-book-content" /> <span>Portfolio</span></a></li>
          <li><a  className="nav-link scrollto" onClick={() => setCurrent("services")}><i className="bx bx-server" /> <span>Services</span></a></li>
          <li><a className="nav-link scrollto" onClick={() => setCurrent("contact")}><i className="bx bx-envelope" /> <span>Contact</span></a></li>
        </ul>
      </nav>{/* .nav-menu */}
    </div>
  </header>{/* End Header */}
  {current === 'initial' && <DashboardComponent/>}
  <main id="main">
  
                {current === 'about' && <About />}
                {current === 'resume' && <Resume />}
                {current === 'portfolio' && <Portfolio />}
                {current === 'services' && <Services />}
                {current === 'contact' && <Contact />}
  {/*<Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>/
</Routes> */}
  </main>{/* End #main */}
  {/* ======= Footer ======= */}
  <footer id="footer">
    <div className="container">
      
      <div className="credits">
       
        Designed by Kato Mathias
      </div>
    </div>
  </footer>{/* End  Footer */}
  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
  {/* Vendor JS Files */}
  {/* Template Main JS File */}
</div>

      
    </div>
  )
}

export default Homepage