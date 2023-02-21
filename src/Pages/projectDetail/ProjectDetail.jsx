import React, { useState, useEffect } from 'react'
import data from '../../sections/projects/data'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Skills from '../../components/skills/Skills'
import Navbar from '../../sections/navbar/Navbar'
// import Header from '../../sections/header/Header'
import Footer from '../../sections/footer/Footer'
import './projectDetail.css'
import { motion } from 'framer-motion'
import { HashLink } from 'react-router-hash-link'

const ProjectDetail = () => {
  const [title, setTitle] = useState('')
  const [projectOverview, setProjectOverview] = useState('')
  const [image, setImage] = useState('')
  const [smallText, setsmallText] = useState('')
  const [caseStudyLink, setCaseStudyLink] = useState('')
  const [liveLink, setLiveLink] = useState('')
  const [prototypeLink, setPrototypeLink] = useState('')
  const [paragraphs, setParagraphs] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id))
    setTitle(newPerson.title)
    setImage(newPerson.image)
    setProjectOverview(newPerson.projectOverview)
    setsmallText(newPerson.smallText)
    setLiveLink(newPerson.liveLink)
    setPrototypeLink(newPerson.prototypeLink)
    setCaseStudyLink(newPerson.caseStudyLink)
    setParagraphs(newPerson.paragraphs)
    // alert(typeof paragraphs)
  }, [])

  // for Navigate back
  const history = useNavigate()

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: '0%' }}
      transition={{ duration: 0.75 }}
      exit={{ opacity: 1 }}
      id='project-detail'
    >
      <section className='project__details__header'>
        <div className='header__container'>
          <h1>{title}</h1>
          <p>{smallText}</p>
          <div className='btns'>
            <a href={caseStudyLink} target='_blank' className='btn'>
              Case Study
            </a>
            <a href={prototypeLink} target='_blank' className='btn white'>
              View Prototype
            </a>
          </div>
        </div>
      </section>
      <div className='container project__detail__container'>
        <section className='project__detial-container'>
          <div className='project__detail__wrapper'>
            <div className='project__detail-image'>
              <img src={image} alt='' />
            </div>
          </div>
        </section>

        <section className='container project__overview'>
          <h2>Project Overview</h2>
          <p>{projectOverview}</p>
          <a href={caseStudyLink} target='_blank' className='btn'>
            Case Study
          </a>
        </section>
        <section className='container tools__used'>
          <h2>tools used</h2>
          <Skills paragraphs={paragraphs}></Skills>
        </section>
        <section className='container see__prototype'>
          <h2>see prototype</h2>
          <div className='btns'>
            <a href={liveLink} target='_blank' className='btn'>
              View Prototype
            </a>
            <a href='#home' className='btn white' onClick={() => history(-1)}>
              go back
            </a>
          </div>
        </section>
      </div>
      {/* <Footer></Footer> */}
    </motion.div>
  )
}

export default ProjectDetail
