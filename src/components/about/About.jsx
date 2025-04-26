import React from 'react'
import './about.css'
import myImage from '../../assets/WhatsApp Image 2025-04-25 at 19.39.17_4f9c2ff6.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>BCA(UG) <br /><i>Indira Gandhi National Open University.</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Current Enrolled</h5>
                  <small>Full Stack Development Bootcamp "Sheryians Coding School"</small>
              </article>

              

              

            </div>
            <p>
    I am a <b>Full Stack Web Development Student</b> currently enrolled in a bootcamp at Sheryians Coding School.  
    I’m a passionate and motivated developer actively seeking opportunities to apply and grow my technical skills in real-world projects.  
    With a strong foundation from my <b>BCA degree from IGNOU</b> and hands-on experience in building full-stack applications using the MERN stack,  
    I’m eager to contribute to impactful projects and learn from experienced professionals in the industry.  
    I’m a quick learner, adaptable, and always ready to take on new challenges in the field of web development.
</p>



          </div>
      </div>
    </section>
  )
}

export default About