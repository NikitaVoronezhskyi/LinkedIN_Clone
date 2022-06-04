import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "./SidebarUser.css";
const SidebarUser = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="../public/GradientUser.jpg" alt="" />
        <div className="sidebar__top-user">
          <AccountCircleIcon />
          <h2>Nikita Voronezshkyi</h2>
          <p>Junior Front-End Developer</p>
          <p>balanar99@outlook.com</p>
          <div className="sidebar__top-stats">
            <div className="sidebar__top-stats-views">
              <p>Who viewed you</p>
              <p className="sidebar__top-stats-views-static<">2555</p>
            </div>
            <div className="sidebar__top-stats-views">
              <p>Views on post</p>
              <p className="sidebar__top-stats-views-static<">3200</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  );
};

export default SidebarUser;
