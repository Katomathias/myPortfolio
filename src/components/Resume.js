import React from 'react'

function Resume() {
  return (
    <div>
        {/* ======= Resume Section ======= */}
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>I am a continuing Student of Bachelors of Science in Software Engineering at Makerere 
University currently in year 4 who has passion for Data Analysis / Science and programming with 
java and Python as well.</p>
        </div>
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Kato Mathias</h4>
              <p><em>Innovative and deadline-driven Web and Mobile developer with 2+ years of experience designing and developing user-centered web  and Mobile Apps from initial concept to final, polished deliverable.</em></p>
              <ul>
                <li>Makerere, Kikoni</li>
                <li>(256) 700-158229</li>
                <li>mathiaskato5@gmail.com</li>
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Science in Software Engineering &amp; Graphic Design</h4>
              <h5>2020 - 2024</h5>
              <p><em>Makerere University, Kampala-Uganda</em></p>
              <p>Its still pending as i edge closer towards the end of my studies for this degree.</p>
            </div>
            <div className="resume-item">
              <h4> Uganda Advanced Certificate of Education&amp; Graphic Design</h4>
              <h5>2018-2019</h5>
              <p><em> St. Henry’s College Kitovu, Masaka-Uganda</em></p>
              <p>I offered The Physics, Chemistry and Mathematics (PCM) combination at this level in order to be able to get this Course at University. </p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Uganda Certificate of Education</h4>
              <h5>2014-2017 </h5>
              <p><em>St. Henry’s College Kitovu, Masaka-Uganda </em></p>
              <ul>
                <li>It was a very crucial level which determined what combination i would do based on the my performance.</li>
                <li>Studied various subjects all mixed i.e. Arts & Sciences </li>
                
              </ul>
            </div>
            <div className="resume-item">
              <h4>FreeLancer</h4>
              <h5>2020-present</h5>
              <p><em>Makerere, Kikoni</em></p>
              <ul>
                <li>Developed numerous web programs (individually and as a group).</li>
                <li>Managed up to 3 projects or tasks at a given time while under pressure</li>
                <li>Recommended and consulted with clients on the most appropriate web designs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Resume Section */}
    </div>
  )
}

export default Resume