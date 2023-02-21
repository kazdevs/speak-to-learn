import React from 'react'
import './about.css'
import AboutImg from '../../assets/communicate1.jpg'

const About = () => {
  return (
    <section id='about'>
      <div className='container about__container'>
        <div className='section__title'>
          <h2>About</h2>
          <div className='underline'></div>
        </div>
        <div className='about__top'>
          <div className='about__left'>
            <h4>The Gist!</h4>
            <div className='about__left-paragraphs'>
              <p>
                We believe you can learn a language faster by speaking the
                language. Join a one-on-one session with an English speaker to
                converse, speak and perfect your English speaking to
                professional level.
              </p>
              <p>
                Join any of the sessions in the plans section to begin. Speak to
                learn is fun. I promise.
              </p>
              <p>
                Note: All the speaking sessions are mutually exclusive to each
                other. That means, you can start from any session. Yes, its that
                fun.
              </p>
            </div>
            <a href='#contact' className='btn'>
              Contact Us
            </a>
          </div>
          <div className='about__right'>
            <div className='about__portrait'>
              <img src={AboutImg} alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
