import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderList from "./HeaderList";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";



const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <a href="#">
          <img
            className="header__left-logo"
            loading="lazy"
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="Logo"
          />
        </a>
        <div className="header__left-search">
          <SearchIcon />
          <input
            className="header__left-search-input"
            placeholder="Search"
            type="text"
          />
        </div>
      </div>
      <div className="header__right">
        <ul className="header__right-list">
          <HeaderList Icon={HomeIcon} title="Home" />
          <HeaderList Icon={PeopleIcon} title="Network" />
          <HeaderList Icon={WorkIcon} title="Jobs" />
          <HeaderList Icon={MessageIcon} title="Message" />
          <HeaderList Icon={NotificationsNoneIcon} title="Notification" />
          <HeaderList Avatar={AccountCircleIcon} />
        </ul>
      </div>
    </header>
  );
};

export default Header;
