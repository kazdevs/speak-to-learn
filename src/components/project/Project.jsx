import React from 'react'
import './project.css'
import ProjectImg from '../../assets/bawo.jpg'
// import { Link } from 'react-router-dom'
// import { HashLink as Link } from 'react-router-hash-link'

const Project = ({ id, number, price, title, mainText, link }) => {
  return (
    <div className='project'>
      <h1 className='back__number'>{number}</h1>
      <div className='project__item'>
        <div className='project__image-container'>
          <div id='plans__overlay'></div>
          {/* <img src={image} alt='' /> */}
          <h1 className='project__image__text'>{title}</h1>
        </div>
        <div className='project__details'>
          <h3>{price}</h3>
          <p>{mainText}</p>
          {/* <Link to={`/project-detail/${id}/#`} className='btn white'>
            Learn More
          </Link> */}
          <a
            href={link}
            // target='_blank'
            rel='noopener noreferrer'
            className='btn'
          >
            {' '}
            Join Class
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
