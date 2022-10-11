import React from "react";
import "./header.css";

const Header = () => {
  return (
    // <section className="head">
    //   <div className="main-head">
    //     <div className="logo">
    //       {" "}
    //       <h2 className="logo-name">Ak techs</h2>
    //     </div>
    //     <div className="menu-bar">
    //       <span className="home">Home</span>
    //       <span className="contactus">Contactus</span>
    //       <span className="gallery">Gallery</span>
    //       <span className="aboutus">Aboutus</span>
    //       <span className="Testimonials">Testimonials</span>
    //     </div>
    //   </div>
    // </section>
    <section className="head">
      <div className="main-head">
        <div className="hdname">
          <h2>NETFLIX</h2>
        </div>
        <div className="menubar">
          <button className="btn">English</button>
          <button
            className="btn"
            style={{ color: "white", backgroundColor: "red", height: "30px" }}
          >
            Signin
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
