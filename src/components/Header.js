import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderList from "./HeaderList";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useDispatch } from "react-redux";
import { auth } from "./Firebase";
import { logout } from "../features/userSlice";




const Header = () => {
  const dispatch = useDispatch();
  const logoutApp = ()=>{
    if (window.confirm("Are you sure you want to logout?")) {
      console.log("LogOut");
      dispatch(logout())
      auth.signOut()
    } 
    }



  return (
    <header className="header">
      <div className="container">
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
          <HeaderList avatar={true} onClick={logoutApp} title="Logout" />
        </ul>
      </div>
      </div>
    </header>
  );
};

export default Header;
