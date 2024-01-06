// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {

  const openSocialMediaLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Badulla</p>
              <p>Sri Lanka.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />{" "}
              071 - 111 5856
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              Akilapiyumal11@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <p>MY SOCIAL MEDIA LINK</p>
          <div className="social">
            <FaGithub
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
              onClick={() => openSocialMediaLink("https://github.com/Akiladjp")}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
              onClick={() => openSocialMediaLink("https://www.linkedin.com/in/akila-piyumal-27948a253/")}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
              onClick={() => openSocialMediaLink("https://twitter.com/PiyumalAkila")}
            />
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
              onClick={() => openSocialMediaLink("https://www.facebook.com/profile.php?id=100008942893670")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
