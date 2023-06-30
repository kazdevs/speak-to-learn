import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import './projectDetail.css'
// import { PopupModal } from 'react-calendly'

const ProjectDetail = () => {
  // for Navigate back
  const history = useNavigate()
  // const { width, height } = useWindowSize()

  return (
    <div id='project-detail'>
      <section className='project__details__header'>
        <div className='header__container'>
          <h1>Confirmed!</h1>
          <Confetti opacity={0.8} />
          <p>You are scheduled with Speak To Learn</p>
          <p>Check your email for your class schedule</p>
          {/* <div className='btns'>
            <a href='#' target='_blank' className='btn btn-extra'>
              Click Here To Go Home
            </a>
          </div> */}
          <div className='btns'>
            <a href='#' target='_blank' className='btn btn-extra'>
              Close the modal to return to home page
            </a>
          </div>
          {/* <PopupModal
            onModalClose={() => this.setState({ isOpen: false })}
            rootElement={document.getElementById('root')}
          /> */}
        </div>
      </section>
    </div>
  )
}

export default ProjectDetail
