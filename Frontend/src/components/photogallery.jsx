import { SlArrowRight } from "react-icons/sl";
import { Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { API_BASE_URL, API_IMG_URL } from "../utils/constants";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PhotoGallery() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [gallery, setGallery] = useState([]);
  // const [gallerphoto, setGalleryphto] = useState([]);

  useEffect(() => {
    const fetchAllContents = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/gallery/viewgallery`);
        console.log("a------------------->", res.data);
        setGallery(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllContents();
  }, []);

  // useEffect(() => {
  //   const fetchAllContents = async () => {
  //     try {
  //       const res = await axios.get(`${API_BASE_URL}/gallery/viewgalleryphoto`);
  //       setGalleryphto(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchAllContents();
  // }, []);

  return (
    <div className="body-photogallery">
      <div className="content-topic">
        <ul className="public-style-content-subtopic">
          <li>
            <a href="/">
              Home <SlArrowRight />
            </a>
          </li>
          <li>
            <a href="#">
              <b>Photo Gallery</b>{" "}
            </a>
          </li>
        </ul>
        <h1 className="topic-style-public">Photo Gallery</h1>
      </div>
      <br />
      <br />
      <div style={{ marginLeft: "70px" }}>
        <Row>
          <Col lg={1}></Col>

          <Col
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            {gallery.map((photo) => (
              <Col
                key={photo.gallery_id}
                lg={4}
                md={6}
                sm={12}
                style={{ marginBottom: "20px" }}
              >
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={`${API_IMG_URL}/${photo.image_path}`}
                    style={{ width: "100%", height: "200px" }}
                  />
                  <Card.Body>
                    <Card.Title style={{ textAlign: "center" }}>
                      <b>{photo.gallery_title}</b>
                    </Card.Title>
                    {/* <Card.Text>{photo.description}</Card.Text> */}
                    <React.Fragment>
                      <Button
                        style={{ marginLeft: "20%" }}
                        variant="outlined"
                        onClick={handleClickOpen}
                      >
                        Open Gallery
                      </Button>
                      <Dialog
                        fullScreen
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Transition}
                      >
                        <AppBar sx={{ position: "relative" }}>
                          <Toolbar>
                            <IconButton
                              edge="start"
                              color="inherit"
                              onClick={handleClose}
                              aria-label="close"
                            >
                              <CloseIcon />
                            </IconButton>
                            <Typography
                              sx={{ ml: 2, flex: 1 }}
                              variant="h6"
                              component="div"
                            >
                              {photo.gallery_title}
                            </Typography>
                            {/* <Button
                              autoFocus
                              color="inherit"
                              onClick={handleClose}
                            >
                              save
                            </Button> */}
                          </Toolbar>
                        </AppBar>
                        <List>
                          <ListItem>
                            {/* <ListItemText */}
                            <Card.Img
                              variant="top"
                              src={`${API_IMG_URL}/${photo.image_path}`}
                              style={{ width: "15%", height: "10%" }}
                            />
                            {/* /> */}
                          </ListItem>
                          {/* <Divider /> */}
                          {/* <ListItem button>
                            <ListItemText
                              primary="Default notification ringtone"
                              secondary="Tethys"
                            />
                          </ListItem> */}
                        </List>
                      </Dialog>
                    </React.Fragment>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Col>
          <Col lg={1}></Col>
        </Row>
      </div>
      <br />
      <br />
    </div>
  );
}
