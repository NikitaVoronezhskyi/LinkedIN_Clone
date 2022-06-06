import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import Post from "./Post";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";
import VideoCameraBackOutlinedIcon from "@mui/icons-material/VideoCameraBackOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import AdbOutlinedIcon from "@mui/icons-material/AdbOutlined";
import InputOption from "./InputOption";
import { db } from "./Firebase.js";
import firebase from "firebase/compat/app";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';




const Feed = () => {
  const user = useSelector((selectUser))
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
    .orderBy(`timestamp`,`desc`)
    .onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoURL: user.photoURL || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="What's new?"
              type="text"
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption
            Title="Photo"
            Icon={BrokenImageOutlinedIcon}
            Color="#70b5f9"
          />
          <InputOption
            Title="Video"
            Icon={VideoCameraBackOutlinedIcon}
            Color="#7fc15e"
          />
          <InputOption
            Title="Event"
            Icon={EventNoteOutlinedIcon}
            Color="#c0cbcd"
          />
          <InputOption Title="Memes" Icon={AdbOutlinedIcon} Color="#e7a33e" />
        </div>
      </div>
      {posts.map(({ id, data: { name, description, message, photoURL } }) => {
        return (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoURL={photoURL}
          />
        );
      })}
    </div>
  );
};

export default Feed;
