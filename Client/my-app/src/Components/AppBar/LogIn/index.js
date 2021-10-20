import React from "react";

import { Toolbar, Typography, Avatar, Button } from "@mui/material";
import { Link } from "react-router-dom";

import useStyles from "./style";

export default function LogIn({ user }) {
  const classes = useStyles();

  return (
    <Toolbar className={classes.toolbar}>
      {user ? (
        <div className={classes.profile}>
          <Avatar
            className={classes.purple}
            alt={user.result.name}
            src={user.result.imageUrl}
          >
            {user.result.name.charAt(0)}
          </Avatar>
          <Typography className={classes.userName} variant="h6">
            {user.result.name}
          </Typography>
          <Button
            variant="contained"
            className={classes.logout}
            color="secondary"
            //onClick={logout}
          >
            Logout
          </Button>
        </div>
      ) : (
        <Button component={Link} to="/auth" variant="contained" color="primary">
          Sign in
        </Button>
      )}
    </Toolbar>
  );
}
