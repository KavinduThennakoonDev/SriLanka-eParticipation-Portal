import { SlArrowRight } from "react-icons/sl";
import { Row, Col } from "react-bootstrap";

export default function () {
  return (
    <div className="body-contact">
      <div className="content-topic">
        <ul className="public-style-content-subtopic">
          <li>
            <a href="/">
              Home <SlArrowRight />
            </a>
          </li>
          <li>
            <a href="#">
              <b>Contact Us</b>{" "}
            </a>
          </li>
        </ul>
        <h1 className="topic-style-public"> Contact Us</h1>
      </div>
      <br></br>
      <br></br>
      <Row>
        <Col lg={6}>
          <div className="contact-01">
            <ul className="">
              <p className="cnt-style">
                <b className="cnt-style">Address</b>
              </p>
              <p className="cnt-style">
                No 490,
                <br />R A De Mel Mawatha,
                <br />
                Colombo 03.
              </p>
              <p className="cnt-style">
                <b className="cnt-style"> Tel</b>
                <br />
                +94-11-236 9091
              </p>
              <p className="cnt-style">
                <b className="cnt-style">Fax</b>
                <br />
                +94-11-236 9091
              </p>
            </ul>
          </div>
        </Col>
        <Col lg={6}>
          <div className="contact-02">
            <ul>
              <p className="cnt-style">
                <b className="cnt-style">Operating Hours</b>
              </p>
              <p className="cnt-style">
                <b className="cnt-style">Mon-Fri:</b> 8.30am-6.00pm
                <br />
                Closed on Weekends and Public Holidays <br />
              </p>
              <br />
              <p className="cnt-style">
                <b className="cnt-style">Email</b>
                <br></br>
                <a href="https://www.icta.lk">info@icta.lk</a>
              </p>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}
