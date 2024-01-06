/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import project from '../assets/project.jpg'
import PropTypes from 'prop-types';
import './Heroimg2.css';

class Heroimg2 extends Component {
  render() { 
    return (
    <div className="hero-img">
      <div className="heading">
        <h1>{this.props.heading}</h1>
        <p>{this.props.text}</p>
      </div>
    </div>
    );
  }
}

Heroimg2.propTypes = {
    heading: PropTypes.string.isRequired, // heading should be a required string
    text: PropTypes.string.isRequired,    // text should be a required string
  };

export default Heroimg2
