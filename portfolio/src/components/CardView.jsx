/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import "./CardView.css";
import { NavLink } from "react-router-dom";

const CardView = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="" />
      <h2 className="project-title" style={{margin:"12px 0", display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"underline"}}>{props.title}</h2>
      <div className="pro-details" style={{margin:"12px 0"}}>
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} style={{background:"#ffef13", color:"#000", padding:" 0.6rem 1rem", margin:"50px 120px", borderRadius:"10px"}}>View</NavLink>
        </div>
      </div>
    </div>
  );
};


CardView.propTypes = {
    imgsrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired,
  };

export default CardView;
