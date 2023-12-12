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
import { Link } from "react-router-dom";
import Comentview from "./comentview";
import { API_BASE_URL } from "../utils/constants";

const ContentView = () => {
  const { content_id } = useParams();

  const [content, setContent] = useState({
    content_topic: "",
    content_image: "",
    content_description: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await axios.get(
          `${API_BASE_URL}/content/participate/${content_id}`
        );
        console.log(content_id);
        setContent(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchContent();
  }, [content_id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!content || Object.keys(content).length === 0) {
    return <div>Content not found</div>;
  }

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
                <b>{content.content_topic}</b>
              </a>
            </li>
          </ul>
          <h1 className="topic-style-public">{content.content_topic}</h1>
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
                  {new Parser().parse(content.content_description)}
                </p>
              </div>
              <div>
                <Link to={`/Addfeedback/${content.content_url}`}>
                  <button className=" feedback-blue-submit" >
                    Give Feedback
                  </button>
                </Link>
              </div>
            </Col>
            <Col lg={2}></Col>
          </Row>
        </div>
        <Comentview />
      </div>
    </div>
  );
};

export default ContentView;
