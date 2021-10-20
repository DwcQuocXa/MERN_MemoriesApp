import React, { useState } from "react";

import { Grow, Grid, Container } from "@mui/material";
//import { Link } from "react-router-dom";

import Posts from "./Posts/Posts";
import Form from "./Form/Form";

export default function SearchAppBar({ searchTerm }) {
  return (
    <Grow in>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
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
  );
}
