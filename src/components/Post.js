import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import InputOption from "./InputOption";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const Post = ({ name, description, message, photoURL }) => {
  const user = useSelector(selectUser);
  return (
    <div className="post">
      <div className="post__haeder">
      <Avatar alt="Avatar" src={photoURL}>{user?.email[0]}</Avatar>
        <div className="post__info">
          <h2 className="post__info-title">{name}</h2>
          <p className="post__info-text">{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p className="post__body-text">{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpOutlinedIcon} Title="Like" Color="grey" />
        <InputOption
          Icon={InsertCommentOutlinedIcon}
          Title="Comment"
          Color="grey"
        />
        <InputOption Icon={ShareOutlinedIcon} Title="Share" Color="grey" />
        <InputOption Icon={SendOutlinedIcon} Title="Send" Color="grey" />
      </div>
    </div>
  );
};

export default Post;
