import React, { useState } from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../../dummyData";

const Post = ({post}) => {
  const [like, setLike]=useState(post.like)
  const [isliked, setisLiked]=useState(false)
  const likeHandler=()=>{
      setLike(isliked? like-1:like+1)
      setisLiked(!isliked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u)=>u.id===post?.userId)[0].profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">{Users.filter((u)=>u.id===post?.userId)[0].username}</span>
            <spna className="postDate">{post.date}</spna>
          </div>
          {/* postTopLeft  postTopRight css not avilable */}
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          {/* postText css not apply */}
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="LikeIcon"
              src="src\assets\person\like.png" 
              onClick={likeHandler}
              alt=""/>
            <img  className="LikeIcon"
              src="src\assets\person\heart.png"
              onClick={likeHandler}
              alt=""/>
            <span className="postLikeCounter">{like}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
// import in post

// during normal css - backword \
// pexels - from hd img
