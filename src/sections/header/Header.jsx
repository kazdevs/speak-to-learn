import React from 'react'
import './header.css'
import videoBg from '../../assets/video1.mp4'

import { delay, motion, easeOut, easeIn, easeInOut } from 'framer-motion'

const Header = () => {
  return (
    <header id='header'>
      <div className='container header__container'>
        <video src={videoBg} autoPlay loop muted />
        <div className='overlay'></div>
        <div className='content'>
          <div className='hey-div'>
            <motion.h1
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{ delay: '0.2', duration: 1.4 }}
            >
              Speak To Learn.
            </motion.h1>
          </div>

          <div className='p__container'>
            <motion.p
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{ delay: '0.4', duration: 1.4 }}
            >
              We make learning fun. Come learn English the fun way and gain
              professional fluency.
            </motion.p>
          </div>
          <div className='header__link-wrapper'>
            <motion.a
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              transition={{ delay: '0.4', duration: 1 }}
              href='#plans'
              className='btn'
            >
              Get Started
            </motion.a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
