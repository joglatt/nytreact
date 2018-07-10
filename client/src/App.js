import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Saved from "./pages/Saved";
import Home from "./pages/Home";

import { BrowserRouter as Router, Route } from "react-router-dom";
const App = () => (
  <Router>
    <div className="App">
      <Nav />
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/saved" component={Saved} />
    </div>
  </Router>
);

export default App;
