import React from "react";
//import useStyles from "./style";
import { useSelector } from "react-redux";

function Posts() {
  const posts = useSelector((state) => state.posts);
  //const classes = useStyles();

  console.log(posts);
  return (
    <div>
      <h2>Posts</h2>
    </div>
  );
}

export default Posts;
