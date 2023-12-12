import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import axios from "axios";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Document, Page } from "react-pdf";
import { API_BASE_URL } from "../utils/constants";
import { SlArrowRight } from "react-icons/sl";
import moment from "moment";

export default function Newspress() {
  const [news, setNews] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  useEffect(() => {
    const fetchAllContents = async () => {
      try {
        const res = await axios.get(
          `${API_BASE_URL}/NewsandPressReleases/news`
        );
        setNews(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllContents();
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = news.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleCardClick = (file_path) => {
    window.open(file_path);
  };

  return (
    <Grid container spacing={2}>
      <div
        className="content-topic"
        style={{ marginLeft: "0%", marginTop: "1%" }}
      >
        <ul className="public-style-content-subtopic">
          <li>
            <a href="/">
              Home <SlArrowRight />
            </a>
          </li>
          <li>
            <a href="">
              Read <SlArrowRight />
            </a>
          </li>
          <li>
            <a href="/newspress">
              <b>News and Press Releases</b>
            </a>
          </li>
        </ul>
        <h1 className="topic-style-public">NEWS AND PRESS RELEASES</h1>
      </div>
      {currentCards.map((newss, index) => (
        <Grid item xs={12} key={index}>
          <Card
            onClick={() =>
              handleCardClick(
                `https://stagingicta.lankagate.gov.lk/epart-admin/${newss.file_path}`
              )
            }
            style={{
              backgroundColor: "#eaeff1",
              height: "100%",
              transition:
                "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Add shadow for better effect
              borderRadius: "8px",
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#f0f0f0",
              transition: "background-color 0.3s",
              marginLeft: "157px",
              marginRight: "172px",
              height: "auto", // Optional: Add border radius
            }}
            // Add hover effect styles
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              // e.currentTarget.style.backgroundColor = "#e0e0e0";
              e.currentTarget.style.zIndex = "1";
              e.currentTarget.style.backgroundColor = "#f0f0f0"; // Change to desired hover color
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.zIndex = "0";
              // e.currentTarget.style.backgroundColor = "#f0f0f0";
              e.currentTarget.style.backgroundColor = "#eaeff1"; // Change back to original color
            }}
            // style={{
            //   display: "flex",
            //   flexDirection: "row",
            //   backgroundColor: "#f0f0f0",
            //   transition: "background-color 0.3s",
            //   marginLeft: "157px",
            //   marginRight: "172px",
            //   height: "auto",
            // }}
            // onMouseOver={(e) =>
            //   (e.currentTarget.style.backgroundColor = "#e0e0e0")
            // }
            // onMouseOut={(e) =>
            //   (e.currentTarget.style.backgroundColor = "#f0f0f0")
            // }
          >
            <div
              style={{
                backgroundColor: "#239FB8",
                width: "115px",
                height: "auto",
                marginRight: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#02343E")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#239FB8")
              }
            >
              <Typography
                variant="h6"
                style={{
                  fontFamily: "Lato,sans-serif",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                {moment(newss.created_at).format("MMM")}

                <br></br>
                <b style={{ fontSize: "35px" }}>
                  {moment(newss.created_at).format("DD")}
                </b>

                <br></br>
                {moment(newss.created_at).format("YYYY")}
              </Typography>
            </div>
            <CardContent>
              <Typography
                style={{
                  fontFamily: "Lato,sans-serif",
                  color: "#264A91",
                }}
                variant="h7"
                component="div"
              >
                News and Press Releases
              </Typography>
              <Typography
                style={{ fontFamily: "Lato,sans-serif" }}
                variant="h5"
                component="div"
              >
                <b>{newss.title}</b>
              </Typography>
            </CardContent>
          </Card>
          <br />
        </Grid>
      ))}
      {selectedPdf && (
        <Grid item xs={12}>
          <Document file={selectedPdf}>
            <Page pageNumber={1} />
          </Document>
        </Grid>
      )}
      <div style={{ marginLeft: "40%", textAlign: "center", width: "50%" }}>
        <Stack spacing={2}>
          <Pagination
            style={{ marginBottom: "4%" }}
            count={Math.ceil(news.length / cardsPerPage)}
            variant="outlined"
            shape="rounded"
            page={currentPage}
            onChange={handlePageChange}
          />
        </Stack>
      </div>
    </Grid>
  );
}
