import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
// import { AiOutlineTwitter } from 'react-icons/ai'
// import { AiOutlineDribbble } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { GrLinkedinOption } from 'react-icons/gr'
// import { BsBehance } from 'react-icons/bs'

// import { TfiLinkedin } from 'react-icons/tf'
import './footer.css'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='container footer__container'>
        <div className='footer__text'>
          <h2>Speak to learn</h2>
          <p>Come achieve professional fluency in English.</p>
          <p>&copy; speak to learn. All rights reserved.</p>
        </div>
        <div className='footer__socials'>
          <h2>Contact</h2>
          <div className='social__icons'>
            {/* <a href='https://www.linkedin.com/' target='_blank'>
              <GrLinkedinOption />
            </a>

            <a href='https://www.instagram.com/' target='_blank'>
              <AiOutlineInstagram />
            </a> */}
            <a href='mailto:speaktolearntoday@gmail.com' target='_blank'>
              <MdEmail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
