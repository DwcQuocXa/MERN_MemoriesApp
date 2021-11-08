import React, { useState } from "react";
import memories from "../../images/memories.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppBar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import useStyles from "./style";
import BackToTop from "./BackToTop";
import SearchBar from "./Search/Search";
import LogIn from "./LogIn";

const theme = createTheme();

export default function SearchAppBar({ setSearchTerm }) {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  return (
    <ThemeProvider theme={theme}>
      <BackToTop />
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
          <Typography
            component={Link}
            to="/"
            className={classes.heading}
            variant="h2"
            align="center"
          >
            Memories
            <img
              className={classes.image}
              src={memories}
              alt="memories"
              height="60"
            />
          </Typography>
          <SearchBar setSearchTerm={setSearchTerm} />
          <LogIn user={user} setUser={setUser} />
        </div>
      </AppBar>
    </ThemeProvider>
  );
}
