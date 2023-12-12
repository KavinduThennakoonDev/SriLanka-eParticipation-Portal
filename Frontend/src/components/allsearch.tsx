
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Icon from "react-bootstrap-icons";
import { API_BASE_URL } from "../utils/constants";

const SearchComponent: React.FC = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/allsearch/search-all`, {
        params: {
          query: searchQuery,
        },
      });
      console.log(response.data);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      handleSearch();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (

    <div>
      <center>
      <div className="test11 input-group w-50">
      
    <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search within this service..."
                  className="form-control"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  <Icon.Search />
                </span>
                </div>
                <ul className="newcss list-group">
  {searchResults.map((result) => (
    <li className="list-group-item" key={result.url} >
      {result.tm=="eparticipation" ? ( <a 
          href={`/participate/${result.url}`}
          className="list-group-item list-group-item-action"
        >
          {result.topic} (Content)
        </a> ) : (
          <a
          href={`/event/${result.url}`}
          className="list-group-item list-group-item-action"
        >
          {result.topic} (Content)
        </a>
        )

      }
    </li>
  ))}
</ul>




</center>
    </div>
  );
};

export default SearchComponent;
