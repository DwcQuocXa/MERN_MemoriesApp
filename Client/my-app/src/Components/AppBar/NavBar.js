import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import memories from "../../images/memories.png";
import { Grow, Grid, Container } from "@mui/material";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import useStyles from "./style";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BackToTop from "./BackToTop";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#DCDCDC",
  "&:hover": {
    backgroundColor: "#CCCCCC",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const ResponsiveForm = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
  },
}));

const styles = (theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
});

const theme = createTheme();

export default function SearchAppBar() {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ThemeProvider theme={theme}>
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
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
            </Search>
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
        <BackToTop />
      </Container>
    </ThemeProvider>
  );
}
