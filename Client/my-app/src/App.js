import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Container } from "@mui/material";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { getPosts } from "./actions/posts";
import Home from "./Components/Home";
import NavBar from "./Components/AppBar/NavBar";
import Auth from "./Components/Auth/Auth";

function App() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <NavBar setSearchTerm={setSearchTerm} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home searchTerm={searchTerm} />}
          />
          <Route exact path="/auth" render={() => <Auth />} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
