import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/forever.png'
import IMG2 from '../../assets/refokus.png'
import IMG4 from '../../assets/portolio.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Forever</h3>
            <small className='text-light'>Taiwind CSS | ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/chintu72100/Forever-Ecommerce-" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://courageous-nasturtium-3d2738.netlify.app/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a> 
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Refokus Clone</h3>
            <small className='text-light'>ReactJs | Tailwind CSS | JS | GSAP | Locomotive Scroll</small>
            <div className="portfolio__item-cta">
              <a href="/" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://app.netlify.com/sites/refocusclonebychintu/overview" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a> 
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>My Portfolio(This website)</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Thakshila-Bandara/my-portfolio" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://thakshila-bandara.github.io/my-portfolio/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Myprojects