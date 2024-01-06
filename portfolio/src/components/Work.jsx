/* eslint-disable no-unused-vars */
import React from 'react'
import './CardView.css'
import menuCard from '../assets/menuCard.jpg'
import { NavLink } from 'react-router-dom'
import CardView from './CardView'
import WorkCardData from './WorkCardData'

const Work = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Web Projects</h1>
      <div className="project-container">
        {WorkCardData.map((val, ind) => {
            return (
                <CardView
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                />
            )
        })}
      </div>
    </div>
  )
}

export default Work;
