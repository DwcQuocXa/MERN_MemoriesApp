import React, { useState } from "react";
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
import EditIcon from "@mui/icons-material/Edit";
import Moment from "react-moment";
import { useDispatch } from "react-redux";

import useStyles from "./style";
import { setCurrentId } from "../../../../actions/currentId";
import { deletePost, likePost } from "../../../../actions/posts";
import DeleteModal from "./DeleteModal/DeleteModal";

function Post({ post, setSnackBar }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [deleteModal, setDeleteModal] = useState(false);

  const handleUpdate = () => {
    dispatch(setCurrentId(post._id));
    console.log(post._id);
  };

  const handleDelete = () => {
    dispatch(deletePost(post._id));
    setSnackBar(true);
  };

  const handleLike = () => {
    dispatch(likePost(post._id));
  };

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find(
        (like) => like === (user.result.googleId || user.result._id)
      ) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={post.selectedFile}
          title={post.title}
        />
        <div className={classes.overlay}>
          <Typography variant="h6">{post.name}</Typography>
          <Typography variant="body2">
            <Moment parse="YYYY-MM-DD HH:mm">{post.createDate}</Moment>
          </Typography>
        </div>
        <div className={classes.overlay2}>
          <Button
            style={{ color: "white", paddingLeft: 50 }}
            size="small"
            onClick={() => {
              handleUpdate();
            }}
          >
            <EditIcon fontSize="small" />
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
          <Button
            size="small"
            color="primary"
            onClick={() => setDeleteModal(true)}
          >
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        </CardActions>
      </Card>
      <DeleteModal
        deleteModal={deleteModal}
        setDeleteModal={setDeleteModal}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default React.memo(Post);
