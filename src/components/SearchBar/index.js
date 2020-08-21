import React, { useState } from "react";
import "./SearchBar.css";

import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";

const SearchBar = ({ hideButtons = false}) => {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon fontSize="large" className="search__inputIcon" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search.."
        />
        <MicIcon fontSize="large" />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Oxoz Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttons--hidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Oxoz Search
          </Button>
          <Button className="search__buttons--hidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default SearchBar;
