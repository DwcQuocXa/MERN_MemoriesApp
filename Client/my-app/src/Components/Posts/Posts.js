import React, { useState } from "react";
import { Grid, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import CusSnackbars from "../Snackbar/Snackbar";
import useStyles from "./style";

function Posts({ searchTerm }) {
  const posts = useSelector((state) => state.posts);
  const [snackBar, setSnackBar] = useState(false);
  const classes = useStyles();

  console.log("Posts rendering");

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <div>
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
              <Post post={post} setSnackBar={setSnackBar} />
            </Grid>
          ))}
      </Grid>
      <CusSnackbars
        snackBar={snackBar}
        setSnackBar={setSnackBar}
        message="Delete a memory successfully"
      />
    </div>
  );
}

export default Posts;
