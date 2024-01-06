// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
// import WorkCard from '../components/WorkCard'
// import CardView from '../components/CardView'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="PROJECTS"  text="Some of my recent works" />
      <Work />
      <Footer/>
    </div>
 )
}

export default Project
