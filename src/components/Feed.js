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



const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
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
      Name: "Nikita Voronezhskyi",
      Description: "This is It",
      Message: input,
      photoUrl: "",
      Timestamp: firebase.firestore.FieldValue.serverTimestamp(),
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
      {posts.map(({ id, data: { Name, Description, Message, photoUrl } }) => {
        return (
          <Post
            key={id}
            Name={Name}
            Description={Description}
            Message={Message}
            photoUrl={photoUrl}
          />
        );
      })}
    </div>
  );
};

export default Feed;
