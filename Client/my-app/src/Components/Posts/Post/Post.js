import React from "react";
import useStyles from "./style";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Moment from "react-moment";
import { useDispatch } from "react-redux";
import { setCurrentId } from "../../../actions/currentId";
import { deletePost, likePost } from "../../../actions/posts";

function Post({ post }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleUpdate = () => {
    dispatch(setCurrentId(post._id));
    console.log(post._id);
  };

  const handleDelete = () => {
    dispatch(deletePost(post._id));
  };

  const handleLike = () => {
    dispatch(likePost(post._id));
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          <Moment parse="YYYY-MM-DD HH:mm">{post.createDate}</Moment>
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => {
            handleUpdate();
          }}
        >
          <MoreHorizIcon />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => handleLike()}>
          <ThumbUpAltIcon fontSize="small" /> Like {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => handleDelete()}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;
