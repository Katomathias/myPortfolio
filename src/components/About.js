import React from 'react'
import weed from './images/profile.jpg';

function About() {
  return (
    
    <div>{/* ======= About Section ======= */}
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>Hello, I'm Kato Mathias, a Passionate Software Engineer

With over 3 years of experience in software development, I am deeply passionate about building innovative solutions that make a positive impact on people's lives. My journey in the world of technology began with a love for problem-solving and a fascination for how software can transform ideas into reality.</p>
        </div>
        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
          <div >
          <img src={weed} className="img-fluid" alt />
          </div>
           
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>UI/UX Designer &amp; Web Developer.</h3>
            <p className="fst-italic">
            Throughout my career, I have honed my skills in web development, focusing on both frontend and backend technologies. I am proficient in JavaScript, React, Node.js, and have a solid understanding of database management with SQL and NoSQL solutions. I have also dabbled in mobile app development using React Native, which has allowed me to create engaging cross-platform experiences.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right" /> <strong>LinkedIn:</strong> <span>mathias-kato-8a1351245</span></li>
                  <li><i className="bi bi-chevron-right" /> <strong>Email:</strong> <span>mathiaskato5@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right" /> <strong>Phone:</strong> <span>+256 700158229</span></li>
                  <li><i className="bi bi-chevron-right" /> <strong>City:</strong> <span>Kampala, UG</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right" /> <strong>Instagram:</strong> <span>KatoKibirigeMathias</span></li>
                  <li><i className="bi bi-chevron-right" /> <strong>Degree:</strong> <span>Bachelors</span></li>
                  <li><i className="bi bi-chevron-right" /> <strong>Whatsapp:</strong> <span>+256 700158229</span></li>
                  <li><i className="bi bi-chevron-right" /> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
              
            </div>
            <p>
            Let's Connect!

I'm always excited to connect with fellow tech enthusiasts, potential clients, and collaborators. Whether you have a project in mind, want to discuss ideas, or just share your passion for technology, feel free to reach out to me. You can contact me via the email above.

Thank you for visiting my website, and I look forward to the opportunity of working together to bring your ideas to life!
            </p>
          </div>
        </div>
      </div>
    </section>{/* End About Section */}
     {/* ======= Facts Section ======= */}
     <section id="facts" className="facts">
      <div className="container">
        <div className="section-title">
          <h2>Facts</h2>
          <p>When I'm not coding, I'm an avid gamer and a photography enthusiast. Exploring new places and capturing moments fuel my creativity and help me approach challenges from fresh perspectives.</p>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
            <div className="count-box">
              <i className="bi bi-emoji-smile" />
              <span data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={1} className="purecounter" />
              <p><strong>Happy Clients</strong></p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay={100}>
            <div className="count-box">
              <i className="bi bi-journal-richtext" />
              <span data-purecounter-start={0} data-purecounter-end={521} data-purecounter-duration={1} className="purecounter" />
              <p><strong>Projects</strong></p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay={200}>
            <div className="count-box">
              <i className="bi bi-headset" />
              <span data-purecounter-start={0} data-purecounter-end={1453} data-purecounter-duration={1} className="purecounter" />
              <p><strong>Hours Of Support</strong> 24/7</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay={300}>
            <div className="count-box">
              <i className="bi bi-people" />
              <span data-purecounter-start={0} data-purecounter-end={32} data-purecounter-duration={1} className="purecounter" />
              <p><strong>Hard Workers</strong> 6</p>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Facts Section */}
    {/* ======= Skills Section ======= */}
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>Throughout my career, I have honed my skills in web development, focusing on both frontend and backend technologies. I am proficient in JavaScript, React, Node.js, and have a solid understanding of database management with SQL and NoSQL solutions. I have also dabbled in mobile app development using React Native, which has allowed me to create engaging cross-platform experiences.</p>
        </div>
        <div className="row skills-content">
          <div className="col-lg-6" data-aos="fade-up">
            <div className="progress">
              <span className="skill">HTML <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress">
              <span className="skill">CSS <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress">
              <span className="skill">JavaScript <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
            <div className="progress">
              <span className="skill">PHP <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress">
              <span className="skill">WordPress/CMS <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress">
              <span className="skill">Photoshop <i className="val">55%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Skills Section */}

    
    </div>
    
  )
}

export default About