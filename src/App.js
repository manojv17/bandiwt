import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { Redirect, Route, Switch } from "react-router-dom";
import Home from './Home';
import Publication from './Publications';
import Team from './Team';
import Research from './Research';
import Navbar from './Navbar';
import Footer from './Footer';


const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/publications" component={Publication} />
        <Route exact path="/research" component={Research} />
        <Route exact path="/team" component={Team} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;