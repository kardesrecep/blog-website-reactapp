import React from "react";
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
       <div className="topbar-left">
        <i className="topbar-icon fab fa-facebook-square"></i>
        <i className="topbar-icon fab fa-instagram-square"></i>
        <i className="topbar-icon fab fa-pinterest-square"></i>
        <i className="topbar-icon fab fa-twitter-square"></i>
      </div>
      <div className="topbar-center">
        <ul className="topbarList">
          <li className="topbarlist-item">HOME</li>
          <li className="topbarlist-item">ABOUT</li>
          <li className="topbarlist-item">CONTACT</li>
          <li className="topbarlist-item">WRITE</li>
          <li className="topbarlist-item">LOGOUT</li>
        </ul>
      </div>
      <div className="topbar-right">
        <img className="topbar-img"  src="https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg" alt="" />
        <i class="topbarSearchIcons fas fa-search"></i>
      </div>
    </div>
  );
};

export default Topbar;
