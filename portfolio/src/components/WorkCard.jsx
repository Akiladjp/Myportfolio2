/* eslint-disable no-unused-vars */
import React from 'react'
import './WorkCard.css'
import react from '../assets/react.jpg'
import flutter from '../assets/flutter.jpg'
import photoshop from '../assets/ps.webp'
import other from '../assets/java.jpg'

const WorkCard = () => {
  return (
    <div className='card'>
      <div className="web">
        <img src={react} alt="" />
        <h3>Web Projects</h3>
      </div>
      <div className="mobile">
        <img src={flutter} alt="" />
        <h3>Mobile App Projects</h3>
      </div>
      <div className="photoshop">
        <img src={photoshop} alt="" />
        <h3>Designing</h3>
      </div>
      <div className="other">
        <img src={other} alt="" />
        <h3>Other Projects</h3>
      </div>
    </div>
  )
}

export default WorkCard
