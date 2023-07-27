import React from 'react'

function Services() {
  return (
    <div>
        {/* ======= Services Section ======= */}
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p>Below are services i do and you can feel free to ask me more or consult about any of them.</p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div className="icon"><i className="bi bi-briefcase" /></div>
            <h4 className="title"><a href>Front-End development</a></h4>
            <p className="description"> I build the user interface (UI) and user experience (UX) of a website or web application. It involves creating the visual elements and interactions that users directly interact with when using a digital product. </p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={100}>
            <div className="icon"><i className="bi bi-card-checklist" /></div>
            <h4 className="title"><a href>Back-end development</a></h4>
            <p className="description"> I build and maintain the server-side of a website or web application. It focuses on managing data, processing requests, and handling the behind-the-scenes functionality that enables the front-end to function effectively. </p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={200}>
            <div className="icon"><i className="bi bi-bar-chart" /></div>
            <h4 className="title"><a href>UI & UX design</a></h4>
            <p className="description">UI (User Interface) and UX (User Experience) design are two essential components in creating successful digital products. They focus on crafting interfaces that are visually appealing, easy to use, and offer a positive overall user experience.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={300}>
            <div className="icon"><i className="bi bi-binoculars" /></div>
            <h4 className="title"><a href>Graphics design</a></h4>
            <p className="description">As a graphics designer, I am deeply passionate about the art of visual storytelling and using design elements to communicate messages effectively. With a keen eye for aesthetics and a strong sense of creativity, I craft compelling graphics that leave a lasting impact on audiences.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={400}>
            <div className="icon"><i className="bi bi-brightness-high" /></div>
            <h4 className="title"><a href>Dark-web</a></h4>
            <p className="description">The dark web is a part of the internet that is intentionally hidden and inaccessible through standard web browsers. It is a network of encrypted and anonymous websites that are not indexed by traditional search engines like Google. </p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={500}>
            <div className="icon"><i className="bi bi-calendar4-week" /></div>
            <h4 className="title"><a href>Web development</a></h4>
            <p className="description">I do teach various aspects concerning web development , both front-end and back-end</p>
          </div>
        </div>
      </div>
    </section>{/* End Services Section */}
    </div>
  )
}

export default Services