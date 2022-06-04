import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "./SidebarUser.css";
const SidebarUser = () => {

  const recentItems = (topic) =>{
    return <div className="sidebar__bottom-recent">
    <span className="sidebar__bottom-recent-hash">#</span>
    <a href="#">{topic}</a>
  </div>
  }


  return (
    <div className="sidebar">
      <div className="sidebar__top">
      <img className="sidebar__top-img" src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb" alt="Gradient" />
            <div className="sidebar-top-avatar">
            <AccountCircleIcon/>
            <h2 className="sidebar__top-avatar-name">Nikita Voronezshkyi</h2>
            <p className="sidebar__top-avatar-email">balanar99@outlook.com</p>
            </div>
          <div className="sidebar__top-stats">
            <div className="sidebar__top-stats-views">
              <p className="sidebar__top-stats-views-text">Who viewed you</p>
              <p className="sidebar__top-stats-views-number<">2555</p>
            </div>
            <div className="sidebar__top-stats-views">
              <p className="sidebar__top-stats-views-text">Views on post</p>
              <p className="sidebar__top-stats-views-number<">3200</p>
            </div>
          </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItems("ReactJS")}
        {recentItems(`Design`)}
        {recentItems(`Software Engeneer`)}
        {recentItems(`Developer`)}
        {recentItems(`Data Structure`)}
      </div>
    </div>
  );
};

export default SidebarUser;
