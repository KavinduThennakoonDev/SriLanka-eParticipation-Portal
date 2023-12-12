import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Icon from "react-bootstrap-icons";
import { API_BASE_URL } from "../utils/constants";
import { Row, Col } from "react-bootstrap";

const SearchComponent: React.FC = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/esearch/search-event`, {
        params: {
          query: searchQuery,
        },
      });
      console.log(response.data);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
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
        <div className="input-group w-50">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="form-control"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <span className="input-group-text" id="basic-addon2">
            <Icon.Search />
          </span>
        </div>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
            <ul className=" newcss list-group">
              {searchResults.map((result) => (
                <li
                  style={{ marginLeft: "0%", listStyle: "none" }}
                  id="list-tab"
                  role="tablist"
                  key={result.event_topic}
                >
                  {/* Update the href attribute to properly navigate to the content */}
                  <a
                    className="list-group-item list-group-item-action"
                    id="list-profile-list"
                    data-toggle="list"
                    role="tab"
                    href={`/event/${result.event_url}`}
                  >
                    {result.event_topic}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
          <Col lg={3}></Col>
        </Row>
      </center>
    </div>
  );
};

export default SearchComponent;
