import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

import AppsIcon from "@material-ui/icons/Apps";
import { Avatar} from "@material-ui/core";
import SearchBar from "../../components/SearchBar";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__header--left">
          <Link to="about">About</Link>
          <Link to="store">Store</Link>
        </div>

        <div className="home__header--right">
          <Link to="gmail" >Gmail</Link>
          <Link to="images">Images</Link>
          <AppsIcon fontSize="large" />
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        <img src="logo.png" alt="logo"></img>

        <div className="home__inputContainer">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Home;
