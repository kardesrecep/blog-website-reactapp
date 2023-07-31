import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-title">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/4069292/pexels-photo-4069292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
          asperiores nam quidem facilis itaque quos doloremque nostrum provident
          quia ut! Rem illum dolor dolore tempora ratione, veniam minus dicta
          modi.
        </p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">CATEGORIES</span>
        <ul className="sidebar-list">
          <li className="sidebarlist-item">Life</li>
          <li className="sidebarlist-item">Music</li>
          <li className="sidebarlist-item">Style</li>
          <li className="sidebarlist-item">Sport</li>
          <li className="sidebarlist-item">Tech</li>
          <li className="sidebarlist-item">Cinema</li>
        </ul>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">FOLLOW US</span>
        <div className="sidebar-social">
          <i className="sidebar-icon fab fa-facebook-square"></i>
          <i className="sidebar-icon fab fa-instagram-square"></i>
          <i className="sidebar-icon fab fa-pinterest-square"></i>
          <i className="sidebar-icon fab fa-twitter-square"></i>
          </div>
      </div>
    </div>
  );
};

export default Sidebar;
