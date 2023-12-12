import Carousel from "react-bootstrap/Carousel";
import Banner from "./../assets/Banner.jpg";
import logo3 from "./../assets/colombo-city-tour-desktop-large-1.jpg";
import logonew from "./../assets/new pic.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Parser } from "html-to-react";
// import Search from "./Search";
import { API_BASE_URL } from "../utils/constants";
import { API_IMG_URL } from "../utils/constants";
import { red } from "@mui/material/colors";
// import moment from "moment";

export default function Home() {
  const [contents, setContents] = useState([]);
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    const fetchAllContents = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/content/contents`);
        setContents(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllContents();
  }, []);

  useEffect(() => {
    const fetchAllContents = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/content/carousel`);
        setCarousel(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllContents();
  }, []);

  return (
    <div className="">
      <div className="">
        <div className="row px-5 py-1">
          <div className="col-6">
            <div className="d-flex justify-content-center">
              <a href="/" style={{ width: "max-content" }}>
                {/* need to include topic */}
                {/* <img className="logo1" src={logo} />  */}
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-center">
              <div className="input-group w-50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* start corousel */}

      <div className="row ">
        <Carousel data-bs-theme="dark">
          {/* {carousel.map((carousel) => ( */}
          <Carousel.Item key={carousel.content_id}>
            <img
              className="d-block w-100 c-img"
              src={Banner}
              alt="First slide"
            />

            <Carousel.Caption>
              <div className=" corousel-content">
                <div className="row px-5 py-4 justify-content-lg-end justify-content-md-center">
                  <Card className="card1" style={{ width: "22rem" }}>
                    <Card.Body>
                      <Card.Title>{carousel.content_topic}</Card.Title>
                      <Card.Text className="carouselText">
                        Empower your voice,
                        <br /> Shape your future! <br />
                        Explore the e-Participation Portal Sri Lanka's hub for
                        seamless government interaction.
                        <br /> Transparency, trust, and civic engagement start
                        here.
                      </Card.Text>
                      {/* <Link to={`/participate/${carousel.content_url}`}>
                        <button className="btn btn-blue">
                          SHARE YOUR VIEWS
                        </button>
                      </Link> */}
                    </Card.Body>
                  </Card>
                </div>

                {/* <h5>{carousel.content_topic}</h5> */}
                {/* <button className="btn btn-blue">
                    MORE INFO ON SLMP 2024
                  </button> */}
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          {/* ))} */}
          <Carousel.Item>
            <img
              className="d-block w-100 c-img"
              src={logo3}
              alt="Second slide"
            />
            <Carousel.Caption>
              <div className="row px-5 py-4 justify-content-lg-end justify-content-md-center">
                <Card className="card1" style={{ width: "22rem" }}>
                  <Card.Body>
                    <Card.Title>{carousel.content_topic}</Card.Title>
                    <Card.Text className="carouselText">
                      Empower your voice,
                      <br /> Shape your future! <br />
                      Explore the e-Participation Portal Sri Lanka's hub for
                      seamless government interaction.
                      <br /> Transparency, trust, and civic engagement start
                      here.
                    </Card.Text>
                    {/* <Link to={`/participate/${carousel.content_url}`}>
                        <button className="btn btn-blue">
                          SHARE YOUR VIEWS
                        </button>
                      </Link> */}
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 c-img"
              src={logonew}
              alt="Third slide"
            />
            <Carousel.Caption>
              <div className="row px-5 py-4 justify-content-lg-end justify-content-md-center">
                <Card className="card1" style={{ width: "22rem" }}>
                  <Card.Body>
                    <Card.Title>{carousel.content_topic}</Card.Title>
                    <Card.Text className="carouselText">
                      Empower your voice,
                      <br /> Shape your future! <br />
                      Explore the e-Participation Portal Sri Lanka's hub for
                      seamless government interaction.
                      <br /> Transparency, trust, and civic engagement start
                      here.
                    </Card.Text>
                    {/* <Link to={`/participate/${carousel.content_url}`}>
                        <button className="btn btn-blue">
                          SHARE YOUR VIEWS
                        </button>
                      </Link> */}
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* finished corousel */}
      </div>
      <br />
      <p className="ep-subtopic">
        <b>Public Consultations</b>
      </p>
      
        <ul style={{ listStyle: "none", display: "flex", marginTop: "-30px", position: "relative"}}>
          <li style={{ marginLeft: "89.5%" }}>
            <a className="Onging-css" href="/ContentViews">
              Ongoing
            </a>
          </li>
          <li style={{marginLeft: "4px" }}> | </li>
          <li style={{marginLeft: "4px" }}>
            <a className="closed-css" href="/notcontent">
              Closed
            </a>
          </li>
        </ul>
       {/* <ul style={{listStyle:"none"}}>
        <li>
        <a
        href="/ContentViews"
        className="row px-2 py-3 justify-content-lg-end  ep-view-contant" style={{marginLeft:"10px"}} 
      >
        Ongoing|
      </a>
        </li>
        <li><a
        href="/notcontent"
        className="row px-5 py-3 justify-content-lg-end justify-content-md-center ep-view-contant"
      >
        Closed
      </a></li>
        </ul>  */}

      {/* <a
        href="/ContentViews"
        className="row px-2 py-3 justify-content-lg-end  ep-view-contant" style={{marginLeft:"10px"}} 
      >
        Ongoing|
      </a>
     
      <a
        href="/notcontent"
        className="row px-5 py-3 justify-content-lg-end justify-content-md-center ep-view-contant"
      >


      <hr />
      {/* <Search /> */}
      <br />
      <div className="admin-cards">
        <Row lg={12} style={{ padding: "200px" }}>
          <Col
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            {contents.map((content) => (
              <Col
                key={content.id}
                lg={4}
                md={6}
                sm={12}
                style={{ marginBottom: "20px" }}
                // className="card-main"
              >
                <Card
                  className="card-cs"
                  style={{
                    backgroundColor: "#eaeff1",
                    height: "100%",
                    transition:
                      "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Add shadow for better effect
                    borderRadius: "8px", // Optional: Add border radius
                  }}
                  // Add hover effect styles
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.zIndex = "1";
                    e.currentTarget.style.backgroundColor = "#f0f0f0"; // Change to desired hover color
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.zIndex = "0";
                    e.currentTarget.style.backgroundColor = "#eaeff1"; // Change back to original color
                  }}
                >
                  <Card.Body className="fix-card">
                    <Card.Title>
                      <b className="sl-ep-card-content">
                        {content.content_topic}
                      </b>
                      {/* Add time for cards */}
                      {/* <p style={{color:"red",fontSize:"17px",fontFamily:"Lato,sans-serif",marginTop:"3%"}}>(1 Day Left)</p> */}
                    </Card.Title>
                    <img
                      src={`${API_IMG_URL}/${content.content_image}`}
                      alt={content.Content_topic}
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
                    />
                    <Card.Text className="card-body">
                      {new Parser().parse(content.content_short_description)}
                      <Link to={`/participate/${content.content_url}`}>
                        <button className=" btn-blue-submit block-btn">
                          SHARE YOUR VIEWS
                        </button>
                      </Link>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Col>
        </Row>
      </div>
    </div>
  );
}
