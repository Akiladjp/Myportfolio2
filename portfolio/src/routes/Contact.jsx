// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import Form from "../components/Form";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const openSocialMediaLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <Navbar />
      <Heroimg2
        heading="Contact"
        text="Hey, Do you need to contact me ? Sent me an email."
      />

      <div className="social" style={{display:"flex", justifyContent:"center"}}>
        <FaGithub
          size={30}
          style={{ color: "#fff", marginRight: "2rem" }}
          onClick={() => openSocialMediaLink("https://github.com/Akiladjp")}
        />
        <FaLinkedin
          size={30}
          style={{ color: "#fff", marginRight: "2rem" }}
          onClick={() =>
            openSocialMediaLink(
              "https://www.linkedin.com/in/akila-piyumal-27948a253/"
            )
          }
        />
        <FaTwitter
          size={30}
          style={{ color: "#fff", marginRight: "2rem" }}
          onClick={() =>
            openSocialMediaLink("https://twitter.com/PiyumalAkila")
          }
        />
        <FaFacebook
          size={30}
          style={{ color: "#fff", marginRight: "2rem" }}
          onClick={() =>
            openSocialMediaLink(
              "https://www.facebook.com/profile.php?id=100008942893670"
            )
          }
        />
      </div>

      <Form />

      <Footer />
    </div>
  );
};

export default Contact;
