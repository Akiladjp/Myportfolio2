// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Heroimg.css'
import intro from '../assets/intro.jpg'
import { Link } from 'react-router-dom'


const Heroimg = () => {
  return (
    <div className='hero'>
        <div className="mask">
            <img src={intro} alt="" className="intro-img" />
        </div>
        <div className="content">
            <h2>Hello... ☺</h2>
            <h1>I  AM  AKILA PIYUMAL</h1>
            <p>Mobile and Web developer</p>
            <div className='content-btn'>
                <Link to='/project' className='btn'>PROJECTS</Link>
                <Link to='/contact' className='btn btn-light'>CONTACT</Link> 
            </div>
        </div>
    </div>
  )
}

export default Heroimg
