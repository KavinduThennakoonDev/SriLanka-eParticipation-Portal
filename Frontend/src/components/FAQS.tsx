import { Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { SlArrowRight } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";
import { TfiSharethisAlt } from "react-icons/tfi";

export default function () {
  return (
    <div className="FAQs-main">
      <div className="content-topic">
        <ul className="public-style-content-subtopic">
          <li>
            <a href="/">
              Home <SlArrowRight />
            </a>
          </li>
          <li>
            <a href="">
              Who We Are <SlArrowRight />
            </a>
          </li>
          <li>
            <a href="/termsofparticipation">
              <b>FAQs</b>{" "}
            </a>
          </li>
        </ul>
        <h1 className="topic-style-public">
          FREQUENTLY ASKED QUESTIONS (FAQS){" "}
        </h1>
      </div>
      <Row>
        <Col lg={2}>
          <div className="images-public-style">
            <ul className="new">
              <li>
                <a
                  className="logo-style"
                  href="https://www.facebook.com/ictasrilanka"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  className="logo-style"
                  href="https://twitter.com/icta_srilanka"
                >
                  <AiFillTwitterCircle />
                </a>
              </li>
              <li>
                <a className="logo-style" href="https://www.icta.lk">
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
          <div className="content-body-top">
            <h3 className="extra font-style-public-p">
              <b>FAQs on ConnectSL's Feedback Process</b>
            </h3>
            <br />
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <p className="font-style-public-p">
                    <b>
                      What is ConnectSL's role in the feedback process? Does
                      ConnectSL filter or censor feedback received from
                      contributors?
                    </b>
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="font-style-public-p">
                    ConnectSL serves as the vital link between citizens and
                    government agencies in Sri Lanka, actively fostering
                    communication and gathering feedback on various policy
                    issues. All feedback submitted to ConnectSL, regardless of
                    sentiments expressed, undergoes a thorough review by our
                    dedicated staff. We commit to conveying the feedback, in its
                    entirety, to the relevant agencies for their information and
                    consideration. ConnectSL adheres to a policy of not editing
                    or filtering any feedback received.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <hr />
            <br />
            <h3 className="extra font-style-public-p">
              <b>Other FAQs</b>
            </h3>
            <p></p>
            <br />
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <p className="font-style-public-p">
                    <b>
                      What happens to my feedback after I have filled out the
                      Online Feedback Form and submitted it?
                    </b>
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="font-style-public-p">
                    Rest assured that your feedback will be directed to the
                    relevant agency for their review and necessary follow-up.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <p className="font-style-public-p">
                    <b>
                      What happens to feedback that I submit through the Public
                      Consultations page?
                    </b>
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="font-style-public-p">
                    Feedback received through the Public Consultations page is
                    promptly sent directly to the government agency responsible
                    for the posted consultation paper.
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <p className="font-style-public-p">
                    <b>
                      I would like to join the ConnectSL mailing list to stay
                      informed about events and receive newsletters. How can I
                      sign up, and can I unsubscribe later?
                    </b>
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="font-style-public-p">
                    Stay updated on our latest events by visiting our [Events
                    page](#). Consider subscribing to our weekly newsletter,
                    ConnectBytes, by clicking [here](#).
                  </p>
                  <p className="font-style-public-p">
                    You can unsubscribe from our mailing list at any time. To do
                    so, simply click [here](#).
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <p className="font-style-public-p">
                    <b>
                      I use browsers like Firefox and Mozilla. Why can't I
                      submit my feedback using these browsers?
                    </b>
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="font-style-public-p">
                    For optimal performance, the ConnectSL website is best
                    viewed using Internet Explorer 11 & above and the latest two
                    versions. If you encounter any issues accessing our website,
                    please inform us via our [feedback form](#), and we will be
                    happy to assist you.
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <p className="font-style-public-p">
                    <b>
                      I work from an Apple computer. Can I access the ConnectSL
                      website?
                    </b>
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="font-style-public-p">
                    Absolutely! You can easily view information on the ConnectSL
                    website and submit your feedback online.
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  <p className="font-style-public-p">
                    <b>Can I access the website via my mobile phone?</b>
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="font-style-public-p">
                    Yes, the ConnectSL website is designed to be
                    mobile-friendly, ensuring easy access and engagement on your
                    mobile devices.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <br />
          </div>
        </Col>
        <Col lg={2}></Col>
      </Row>
    </div>
  );
}
