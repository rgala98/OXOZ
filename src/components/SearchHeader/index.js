import React from "react";

import "./SearchHeader.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";

import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreIcon from "@material-ui/icons/More";

const SearchHeader = () => {
  return (
    <div className="searchPage__header">
      <Link to="/">
        <img className="searchPage__logo" src="logo.png" alt="logo" />
      </Link>

      <div className="searchPage__headerBody">
        <SearchBar hideButtons />

        <div className="searchPage__options">
          <div className="searchPage__optionsLeft">
            <div className="searchPage__option">
              <SearchIcon />
              <Link to="/all">All</Link>
            </div>

            <div className="searchPage__option">
              <DescriptionIcon />
              <Link to="/news">News</Link>
            </div>

            <div className="searchPage__option">
              <ImageIcon />
              <Link to="/images">Images</Link>
            </div>

            <div className="searchPage__option">
              <LocalOfferIcon />
              <Link to="/shopping">Shopping</Link>
            </div>

            <div className="searchPage__option">
              <RoomIcon />
              <Link to="/maps">Maps</Link>
            </div>

            <div className="searchPage__option">
              <MoreIcon />
              <Link to="/more">More</Link>
            </div>
          </div>

          <div className="searchPage__optionsRight">
            <div className="searchPage__option">
              <Link to="/settings">Settings</Link>
            </div>

            <div className="searchPage__option">
              <Link to="/tools">Tools</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
