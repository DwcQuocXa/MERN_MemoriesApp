import React, { useState } from "react";
import memories from "../../images/memories.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Grow,
  Grid,
  Container,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import useStyles from "./style";
import BackToTop from "./BackToTop";
import SearchBar from "./Search/Search";

const theme = createTheme();

export default function SearchAppBar() {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <BackToTop />
      <Container maxidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Toolbar>
            <Typography className={classes.heading} variant="h2" align="center">
              Memories
              <img
                className={classes.image}
                src={memories}
                alt="memories"
                height="60"
              />
            </Typography>
            <SearchBar setSearchTerm={setSearchTerm} />
          </Toolbar>
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
              className={classes.mainContainer}
            >
              <Grid item xs={12} sm={7}>
                <Posts searchTerm={searchTerm} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </ThemeProvider>
  );
}
