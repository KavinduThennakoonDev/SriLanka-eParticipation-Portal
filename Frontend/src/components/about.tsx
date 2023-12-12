import { Row, Col } from "react-bootstrap";
import { SlArrowRight } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";
import { TfiSharethisAlt } from "react-icons/tfi";

export default function () {
  return (
    <div className="about-sl">
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
              <b>About ConnectSL</b>{" "}
            </a>
          </li>
        </ul>
        <h1 className="topic-style-public">About ConnectSL</h1>
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
            <p className="font-style-public-p">
              <b>
                ConnectSL: Pioneering Active Citizenry for a Stronger Sri Lanka
              </b>
            </p>
            <p className="font-style-public-p">
              Embarking on a groundbreaking initiative, ConnectSL is poised to
              redefine civic engagement in the Democratic Socialist Republic of
              Sri Lanka. More than just a platform, ConnectSL is a dedicated
              commitment to fostering a united society and enhancing Sri Lanka
              as a collective home for all its citizen
            </p>
            <p className="font-style-public-p">
              <b>Our Inception: A Fresh Approach to Connection</b>
            </p>
            <p className="font-style-public-p">
              As we launch this new initiative, it's essential to understand our
              roots. Born out of the vision to actively engage with citizens,
              ConnectSL emerges as a pioneer in building bridges between the
              people and the government. Our journey begins with a shift from
              the traditional notion of public feedback to a proactive approach
              of fostering connections. In this exciting venture, ConnectSL
              takes the lead as Sri Lanka's government-appointed e-engagement
              platform.
            </p>
            <p className="font-style-public-p">
              Our Mission: Listening, Engaging, Connecting
            </p>
            <p className="font-style-public-p">
              <b>At the core of ConnectSL's mission are three pivotal roles:</b>
            </p>
            <p className="font-style-public-p">1. Gauge Ground Sentiments:</p>
            <p className="font-style-public-p">
              {" "}
              We are dedicated to tuning into the heartbeat of the nation. Your
              perspectives are invaluable, and ConnectSL is here to attentively
              listen. By understanding the sentiments of the people, we aim to
              spotlight key issues that hold significance for both the
              government and our fellow citizens.
            </p>
            <p className="font-style-public-p">2. Engage Citizens:</p>
            <p className="font-style-public-p">
              {" "}
              In our quest to reach every corner of Sri Lanka, we've established
              a diverse array of feedback channels. From conventional avenues
              like email and face-to-face dialogues to modern platforms such as
              ConnectSL WhatsApp Interactive Chat Group, Facebook, Instagram,
              LinkedIn, and TikTok, we offer a myriad of channels for you to
              actively engage with us. Collaborating with community
              organizations, grassroots movements, welfare groups, professional
              bodies, and special interest groups, we strive to ensure a
              comprehensive connection with citizens from all walks of life.
            </p>
            <p className="font-style-public-p">3. Promote Active Citizenry:</p>
            <p className="font-style-public-p">
              {" "}
              ConnectSL encourages you to be an active participant in shaping
              Sri Lanka's future. Through innovative public consultation
              exercises, we provide opportunities for you to contribute to the
              development of policies that will impact the trajectory of our
              nation.
            </p>
            <p className="font-style-public-p">
              Join us on this pioneering journey of connection and active
              citizenry. Together, let's build a stronger, more vibrant Sri
              Lanka."
            </p>
            <br />
          </div>
        </Col>
        <Col lg={2}></Col>
      </Row>
    </div>
  );
}
