import React, { useEffect } from "react";
import NavBar from "./Components/AppBar/NavBar";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return <NavBar />;
}

export default App;
