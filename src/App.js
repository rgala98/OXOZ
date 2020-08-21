import React from "react";
import "./App.css";
import Home from "./pages/HomePage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        {/* SEARCH RESULTS PAGE */}
      </Router>
    </div>
  );
};

export default App;
