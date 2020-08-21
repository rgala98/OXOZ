import React from "react";

import "./SearchPage.css";
import { useStateValue } from "../../context/StateProvider";
import useGoogleSearch from "../../helpers/useGoogleSearch";
import Response from "../../helpers/response";

import SearchHeader from "../../components/SearchHeader";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();

  // LIVE DATA
  const { data } = useGoogleSearch(term);
  // console.log(data);

  // const data = Response;

  return (
    <div className="searchPage">
      <SearchHeader />

      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results in 
            {data?.searchInformation.searchTime} seconds for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link} target="_">
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={item.pagemap?.cse_image[0]?.src}
                      alt="search"
                    />
                  )}

                {item.displayLink}
              </a>
              <a
                href={item.link}
                target="_"
                className="searchPage__resultTitle"
              >
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
