import React from "react";
import useStyles from "./style";
import { Grid, CircularProgess } from "@mui/material";
import { useSelector } from "react-redux";
import Post from "./Post/Post";

function Posts() {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);
  return !posts.length ? (
    <CircularProgess />
  ) : (
    <Grid className={classes.mainContainer} alignItems="stretch" spacing={3}>
      {posts.map((post) => {
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} />
        </Grid>;
      })}
    </Grid>
  );
}

export default Posts;
