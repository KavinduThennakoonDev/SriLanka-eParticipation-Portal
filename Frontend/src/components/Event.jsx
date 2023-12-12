import axios from "axios";
import React, { useEffect, useState } from "react";
import { Parser } from "html-to-react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { SlArrowRight } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";
import { TfiSharethisAlt } from "react-icons/tfi";
import { API_BASE_URL } from "../utils/constants";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import HowToRegSharpIcon from "@mui/icons-material/HowToRegSharp";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import AccessTimeFilledSharpIcon from "@mui/icons-material/AccessTimeFilledSharp";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const EventView = () => {
  const boldStyle = {
    fontWeight: "bold",
    fontSize: "18px",
  };

  const { event_id } = useParams();

  const [event, setevent] = useState({
    event_topic: "",
    event_image: "",
    event_description: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/event/event/${event_id}`);
        console.log(event_id);
        setevent(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchContent();
  }, [event_id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!event || Object.keys(event).length === 0) {
    return <div>Content not found</div>;
  }

  // return (
  //   <div>
  //     <h2>{content.title}</h2>

  //     <div>{new Parser().parse(content.description)}</div>
  //   </div>
  // );

  return (
    <div>
      <div className="body-use-of-terms">
        <div className="content-topic">
          <ul className="public-style-content-subtopic">
            <li>
              <a href="/">
                Home <SlArrowRight />
              </a>
            </li>
            <li>
              <a href="">
                Participate <SlArrowRight />
              </a>
            </li>
            <li>
              <a href="">
                <b>{event.event_topic}</b>
              </a>
            </li>
          </ul>
          <h1 className="topic-style-public">{event.event_topic}</h1>
        </div>
        <div>
          <Row>
            <Col lg={2}>
              <div className="images-public-style">
                <ul className="new">
                  <li>
                    <a className="logo-style" href="">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a className="logo-style" href="">
                      <AiFillTwitterCircle />
                    </a>
                  </li>
                  <li>
                    <a className="logo-style" href="">
                      <ImMail4 />
                    </a>
                  </li>
                  <li>
                    <a className="logo-style" href="">
                      {" "}
                      <TfiSharethisAlt />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={8}>
              <div className="content-use-of-terms">
                <p className="font-style-public-p">
                  {/* <b>Welcome to the ConnectSL website ('the website')!</b> */}
                </p>
                <p className="font-style-public-p">
                  <List sx={{ width: "100%", maxWidth: 360, bgcolor: "" }}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <HowToRegSharpIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={<span style={boldStyle}>Status:</span>}
                        secondary={
                          <span style={boldStyle}>Closed for Registration</span>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <CalendarMonthSharpIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <span style={boldStyle}>Registration Period:</span>
                        }
                        secondary={
                          <span style={boldStyle}>
                            {new Parser().parse(event.registration_start_date)}{" "}
                            - {new Parser().parse(event.registration_end_date)}
                          </span>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <BeachAccessIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={<span style={boldStyle}>Event Date:</span>}
                        secondary={
                          <span style={boldStyle}>
                            {new Parser().parse(event.start_date)} -{" "}
                            {new Parser().parse(event.end_date)}
                          </span>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <AccessTimeFilledSharpIcon />
                        </Avatar>
                      </ListItemAvatar>

                      <ListItemText
                        primary={<span style={boldStyle}>Event Time:</span>}
                        secondary={
                          <span style={boldStyle}>
                            {new Parser().parse(event.event_start_time)} -{" "}
                            {new Parser().parse(event.event_end_time)}
                          </span>
                        }
                      />
                    </ListItem>
                  </List>
                  <hr />
                  <h1>DETAILS</h1>
                  <br></br>
                  {new Parser().parse(event.event_description)}
                </p>
              </div>
            </Col>
            <Col lg={2}></Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default EventView;
