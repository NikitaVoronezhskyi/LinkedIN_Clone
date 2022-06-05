import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import Post from "./Post";
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import AdbOutlinedIcon from '@mui/icons-material/AdbOutlined';
import InputOption from "./InputOption";
import { db } from "./firebase";
const Feed = () => {

const [posts,setPosts] = useState([])

useEffect(()=>{

},[])

const sendPost = (e) =>{
  e.preventDefault();

  
}

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input  placeholder="What's new?" type="text" />
            <button type="submit" onClick={sendPost}>Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Title="Photo" Icon={BrokenImageOutlinedIcon} Color="#70b5f9"/>
          <InputOption Title="Video" Icon={VideoCameraBackOutlinedIcon} Color="#7fc15e"/>
          <InputOption Title="Event" Icon={EventNoteOutlinedIcon} Color="#c0cbcd"/>
          <InputOption Title="Memes" Icon={AdbOutlinedIcon} Color="#e7a33e"/>
        </div>
      </div> 
      {posts.map((singlePost)=>{
        return <Post/>
      })}
      <Post/>
    </div>
  );
};

export default Feed;
