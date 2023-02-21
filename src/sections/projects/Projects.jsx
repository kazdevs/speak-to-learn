import React from 'react'
import data from './data'
import Project from '../../components/project/Project'
import { motion } from 'framer-motion'

import './projects.css'

const Projects = () => {
  return (
    <section id='plans'>
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.75 }}
        exit={{ opacity: 1 }}
        className='container projects__container'
      >
        <div className='section__title'>
          <h2>Plans</h2>
          <div className='underline'></div>
        </div>
        <p className='projects__first-p'>Choose a suitable plan.</p>
        <div className='projects__wrapper'>
          {data.map((item) => {
            return <Project key={item.id} {...item} />
          })}
        </div>
        {/* <div className='behance__and__dribbble'>
          <p>
            want to see some more amazing projects? Check my <span> </span>
            <span className='.behance__link'>
              <a href='https://www.behance.net/bawootaigho/' target='_blank'>
                Behance
              </a>
            </span>
          </p>
        </div> */}
      </motion.div>
    </section>
  )
}

export default Projects
