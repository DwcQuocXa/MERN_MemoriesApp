import React, { useState, useEffect } from "react";
import useStyles from "./style";
import { Paper, Typography, TextField, Button } from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import { setCurrentId } from "../../actions/currentId";
import CusSnackbars from "../Snackbar/Snackbar";

function Form() {
  const [snackBar, setSnackBar] = useState(false);
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();
  const currentId = useSelector((state) => state.currentId);
  const postToUpdate = useSelector((state) =>
    currentId ? state.posts.find((post) => post._id === currentId) : null
  );

  useEffect(() => {
    if (postToUpdate) {
      setPostData(postToUpdate);
    }
  }, [postToUpdate]);

  const handleClear = () => {
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
    dispatch(setCurrentId(null));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
      handleClear();
    } else {
      dispatch(createPost(postData));
      setSnackBar(true);
      handleClear();
    }
  };

  console.log("Form rendering");
  const classes = useStyles();

  return (
    <div>
      <Paper className={`${classes.root} ${classes.paper}`} elevation={3}>
        <Typography variant="h6">Create a memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          margin="10px"
          onClick={(e) => handleSubmit(e)}
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          margin="10"
          onClick={() => handleClear()}
          fullWidth
        >
          Clear
        </Button>
      </Paper>
      <CusSnackbars
        snackBar={snackBar}
        setSnackBar={setSnackBar}
        message="Create a memory successfully"
      />
    </div>
  );
}

export default Form;
