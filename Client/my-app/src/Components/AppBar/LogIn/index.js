import React, { useEffect } from "react";

import { Toolbar, Typography, Avatar, Button } from "@mui/material";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import useStyles from "./style";

export default function LogIn({ user, setUser }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

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
            onClick={logout}
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
