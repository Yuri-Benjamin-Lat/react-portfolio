import { useState } from 'react'
import stamp from './assets/stamp.PNG';
import bgcloud from './assets/bgcloud.jpg';
import dandy from './assets/dandy.png';
import smdf from './assets/SMDF.png';
import equicity from './assets/urban.jpeg';
import './App.css'

function App() {
  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  }
  
  function showPopup(popupId) {
      const overlay = document.querySelector('.overlay');
      const popup = document.getElementById(popupId);
      
      overlay.style.display = 'block';
      popup.style.display = 'block';
      
      // Trigger animation after a brief delay to ensure display is set
      setTimeout(() => {
          overlay.classList.add('show');
          popup.classList.add('show');
      }, 10);
  }
  
  function hidePopup() {
      const overlay = document.querySelector('.overlay');
      const popups = document.querySelectorAll('.popup');
      
      overlay.classList.remove('show');
      popups.forEach(popup => {
          popup.classList.remove('show');
      });
      
      // Hide elements after animation completes
      setTimeout(() => {
          overlay.style.display = 'none';
          popups.forEach(popup => {
              popup.style.display = 'none';
          });
      }, 300);
  }

    const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    
    // Form is valid
    alert('Form submitted successfully!');
    
    // Reset form
    setEmail('');
    setMessage('');
    setValidated(false);
  };

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    
    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        if (!form.checkValidity()) {
          event.stopPropagation();
          form.classList.add('was-validated');
          return;
        }
        
        // Form is valid - show alert
        alert('Form submitted successfully!');
        
        // Reset form
        form.reset();
        form.classList.remove('was-validated');
      });
    }
  });

  

  return (
    <>
      <header className="header-background all-padding">
        <section id="home">
          <div className=" ">
            <div className="flex my-navbar">
              <div>
                <img src={stamp} className="fphome w-32 flex-none" alt="logo" />
              </div>
              <div className="flex1">
                <a className="my-navbar-button" onClick={() => scrollToSection('home')}>Home</a>
                <a className="my-navbar-button" onClick={() => scrollToSection('about')}>About me</a>
                <a className="my-navbar-button" onClick={() => scrollToSection('skills')}>Skills</a>
                <a className="my-navbar-button" onClick={() => scrollToSection('projects')}>Projects</a>
                <a className="my-navbar-button" onClick={() => scrollToSection('contact')}>Contact</a>
              </div>
            </div>
          </div>
          

          <div className="flex hero-padding">
            <div className="colmd1">
              <br /><br /><br /><br />
              <p className="my-h1 text-lg">Let’s soar the skies of creativity together and craft wonders beyond the clouds. •°. *࿐</p>
              <br /><br />
              <p className="text-lg">Web Portfolio by Yuri Lat</p>
            </div>
            <div className="colmd2">

            </div>
          </div>
        </section>
      </header>

      {/* Body */}
      <div> 
        <section id="about">
          <div className="separation-margin">
            <p className="my-h1 my-caption-margin my-caption-padding">ABOUT ME</p>
            <div className="flex cloudbox-padding">
              <div className="temp-border1 col-md-4 cloud-bg image-fluid">
                <div className="inner-cloud-container1">
                  <p className="my-caption-font text-center">Personal Information</p>
                  <br />
                  <p className="my-description-font px-1">░ Name: Yuri Lat</p>
                  <p className="my-description-font px-1">░ Date of birth: Oct 22, 2004</p>
                  <p className="my-description-font px-1">░ Email: Yurilat3@gmail.com</p>
                  <p className="my-description-font px-1">░ Phone: 09686279192</p>
                  <p className="my-description-font px-1">░ City: Batangas</p>
                </div>
              </div>
              <div className="temp-border2 col-md-8 cloud-bg1 image-fluid">
                  <div className="inner-cloud-container">
                      <p className="my-caption-font px-2">Hello! I am Yuri Lat!</p><br />  
                      <p className="my-description-font px-2">A third year college student in Computer Science at De La Salle Lipa...</p>     
                  </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="separation-margin">
            <p className="my-h1 my-caption-margin2 my-caption-padding">SKILLS</p>
            <div className="flex cloudbox-padding">
              <div className="temp-border2 col-md-8 cloud-bg1 image-fluid">
                <div className="inner-cloud-container">
                  <p className="my-description-font text-justify px-4 py-3">░ I have over two years of experience developing responsive and user-friendly web applications using HTML, CSS, and JavaScript. My expertise includes working with modern front-end frameworks such as React.js, styled with Tailwind CSS and Bootstrap, and building projects efficiently using Vite. I also have a strong foundation in C++ for problem-solving and algorithmic tasks, and experience managing databases through phpMyAdmin. My focus is on creating clean, maintainable code and delivering polished user experiences.</p>
                </div>
              </div>
              <div className="temp-border1 col-md-4 cloud-bg image-fluid">
                <div className="inner-cloud-container1">
                  <p className="my-caption-font-skill px-2">Programming Langauges:</p>
                  <p className="my-description-font px-16">░ C++</p>
                  <p className="my-description-font px-16">░ HTML</p>
                  <p className="my-description-font px-16">░ Javascript</p>
                  <p className="my-description-font px-16">░ CSS</p>
                  <br />
                  <p className="my-caption-font-skill px-2">Front-End Frameworks:</p>
                  <p className="my-description-font px-16">░ React.js</p>
                  <p className="my-description-font px-16">░ Tailwind CSS</p>
                  <p className="my-description-font px-16">░ Bootstrap</p>
                  <p className="my-description-font px-16">░ Vite</p>
                  <br />
                  <p className="my-caption-font-skill px-2">Back-End Tools:</p>
                  <p className="my-description-font px-16">░ myPHPAdmin</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="separation-margin">
            <p className="my-h1 my-caption-margin my-caption-padding">PROJECTS</p>
            <div className="flex cloudbox-padding">
              <div className="temp-border1 col-md-4 cloud-bg1 image-fluid">
                <div className="inner-cloud-container1" onClick={() => showPopup('popup1')}>
                  <p className="my-caption-font text-center">░ Dandy's Trinkets ░</p> <br />
                  <img src={dandy} className="w-60 flex-none project-image" alt="Dandy's Trinkets" /> <br />
                  <p className="my-description-font text-justify px-3">A store-based program that lets you buy products from a shop which also provide multiple functionalities.</p>
                  <br /><br /><br />
                  <p className="text-center">click to view more</p>
                </div>
              </div>
              <div className="temp-border1 col-md-4 cloud-bg image-fluid">
                <div className="inner-cloud-container2" onClick={() => showPopup('popup2')}>
                  <p className="my-caption-font text-center">░ SMDF DTBS ░</p> <br />
                  <img src={smdf} className="w-60 flex-none project-image" alt="Dandy's Trinkets" /> <br />
                  <p className="my-description-font text-justify px-3">A customized database management system and application designed to efficiently store and track all vital records of a dairy farm.</p>
                  <br />
                  <p className="text-center">click to view more</p>
                </div>
              </div>
              <div className="temp-border1 col-md-4 cloud-bg1 image-fluid">
                <div className="inner-cloud-container1" onClick={() => showPopup('popup3')}>
                  <p className="my-caption-font text-center">░ Equicity ░</p> <br />
                  <img src={equicity} className="w-60 flex-none project-image" alt="Dandy's Trinkets" /> <br /> 
                  <p className="my-description-font text-justify px-3">A web-based application for urban planning based on traffic congestion.</p>
                  <br /><br /><br /><br />
                  <p className="text-center">click to view more</p>
                </div>
              </div>
            </div>
          </div>

          <div className="overlay" onClick={() => hidePopup()}></div>
        </section>

        <div id="popup1" className="popup" onClick={() => hidePopup()}>
          <span className="close"></span>
            <h2><span>Dandy's Trinkets</span></h2>
            <br />
            <img src={dandy} className="w-60 flex-none project-image" alt="Dandy's Trinkets" />
            <br />
            <p>Language: C++</p>
            <br />
            <p>A store-based program that lets you buy products from a shop which also provide multiple functionalities featuring the abilities to:</p>
              <ul>
                  <li>Add Items</li>
                  <li>Update Items</li>
                  <li>Remove Items</li>
                  <li>Display Items</li>
                  <li>Search Items</li>
                  <li>Sort Items</li>
                  <li>Display Items</li>
              </ul>
              <br />
              <p>click anywhere to close</p>
          </div>

        <div id="popup2" className="popup" onClick={() => hidePopup()}>
          <span className="close"></span>
            <h2><span>SMDF DTBS</span></h2>
            <br />
            <img src={smdf} className="w-60 flex-none project-image" alt="smdf dtbs" />
            <br />
            <p>Language: Html | CSS | JavaScript </p>
            <br />
            <p>customized database management system and application designed for dairy farms, featuring an all-in-one dashboard that efficiently tracks vital records such as revenue, expenses, profit, debt and loans, assets and equipment, budgeting, and taxes—while also integrating calendar-based notes, customized appointment schedules, and historical financial data for streamlined farm management.</p>
              <br />
              <p>click anywhere to close</p>
        </div>

        <div id="popup3" className="popup" onClick={() => hidePopup()}>
          <span className="close"></span>
            <h2><span>EquiCity</span></h2>
            <br />
            <img src={equicity} className="w-60 flex-none project-image" alt="smdf dtbs" />
            <br />
            <p>Type: Project</p>
            <br />
            <p>cThis web-based application is a smart location intelligence tool designed to guide commercial development in Lipa City through data-driven insights. By integrating real-time traffic data, population density, facility distribution, and land availability, it helps users identify optimal sites for new commercial hubs like malls, schools, and public service centers. Its interactive dashboard features a layered map, smart location recommendations, and a Commercial Hub Gauge to assess potential traffic impact. With tools for generating detailed reports and submitting development proposals to local authorities, EquiCity supports strategic, balanced urban growth and congestion relief across the city.</p>
              <br />
              <p>click anywhere to close</p>
        </div>


        <section id="contact">
          <div className="separation-margin">
            <p className="my-h1 text-right my-caption-margin2 my-caption-padding">CONTACT</p>
            <div className="flex cloudbox-padding">
              <div className="temp-border1 col-md-4 cloud-bg image-fluid">
                <div className="inner-cloud-container1">
                  <p className="my-caption-font text-center px-4">Ideas drifting like clouds in the open sky?</p><br />
                  <p className="my-caption-font text-center px-4">Let’s catch the winds of creativity and shape them into wonders that touch the horizon.</p>
                </div>
              </div>
              <div className="temp-border2 col-md-8 cloud-bg1 image-fluid">
                <div className="inner-cloud-container">
                  <p>Contact Form</p>
        <form 
          id="myForm"
          noValidate
          className={validated ? 'was-validated' : ''}
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              id="exampleInputEmail1" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby="emailHelp" 
              required 
            />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            <div className="invalid-feedback">Please provide a valid email address.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
            <textarea 
              className="form-control" 
              id="exampleFormControlTextarea1" 
              rows="3" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <div className="invalid-feedback">Please provide a message.</div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="footer-background separation-margin">
        <p>Footer</p>
      </div>
    </>
  )
}

export default App
/*
                <p>tilt animation on outer border</p>
                <p>Glass effect/blur on inner border</p>
*/