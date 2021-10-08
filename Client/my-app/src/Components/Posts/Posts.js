import React from "react";
import useStyles from "./style";
import { Grid, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import Post from "./Post/Post";

function Posts({ searchTerm }) {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts
        .filter((post) => {
          if (searchTerm === "") {
            return post;
          } else if (
            post.creator.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return post;
          }
        })
        .map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} />
          </Grid>
        ))}
    </Grid>
  );
}

export default Posts;
