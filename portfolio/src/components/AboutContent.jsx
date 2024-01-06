/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./AboutContent.css";
import aboutPic from '../assets/about.jpg'
import { FaJava, FaReact } from "react-icons/fa";

const AboutContent = () => {
  return (
    <div className="about-content">
      <div className="left">
        <div className="about-header">
          <h1>Hi, I am Akila Piyumal</h1>
          <p>
            Computer Science Graduate | Mobile & Web Developer | Photoshop
            Enthusiast
          </p>
        </div>
        <div className="about-details">
          <div className="about-section">
            <h2>Education</h2>
            <p>
              Graduated from the University of Jaffna with a degree in BCS
              Computer Science.
            </p>
          </div>
          <div className="about-section">
            <h2>Skills</h2>
            <p>
              Passionate about Mobile App Development, Web Development, and
              Photoshop Designing.
            </p>
          </div>
          <div className="about-section">
            <h2>Interests</h2>
            <p>
              Exploring the world of technology, staying updated with the latest
              trends, and creating visually appealing designs.
            </p>
          </div>
        </div>
        <div className="about-cta">
          <p>Let's collaborate and create something amazing together!</p>
          {/* You can add your contact links, such as LinkedIn or GitHub, here */}
          <div className="social-links">
            <a href="/contact">CONTACT ME</a>
          </div>
        </div>
      </div>
      <div className="right">
      </div>
    </div>
  );
};

export default AboutContent;
