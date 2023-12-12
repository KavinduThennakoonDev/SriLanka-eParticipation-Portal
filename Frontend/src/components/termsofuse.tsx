import { Row, Col } from "react-bootstrap";
import { SlArrowRight } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";
import { TfiSharethisAlt } from "react-icons/tfi";

export default function () {
  return (
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
              Read <SlArrowRight />
            </a>
          </li>
          <li>
            <a href="/termsofuse">
              <b>Terms of USE</b>
            </a>
          </li>
        </ul>
        <h1 className="topic-style-public"> TERMS OF USE</h1>
      </div>
      <div>
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
            <div className="content-use-of-terms">
              <p className="font-style-public-p">
                <b>Welcome to the ConnectSL website ('the website')!</b>
              </p>
              <p className="font-style-public-p">
                In exchange for your use of the website, you agree to be bound
                and abide by the following Terms of Use ("TOU"). Your use of the
                website constitutes your acceptance of the TOU and any posted
                guidelines or rules applicable to particular ConnectSL website
                features ("feature guidelines") which may be posted on the
                website from time to time. All such feature guidelines shall be
                considered part of the TOU.
              </p>
              <p className="font-style-public-p">
                ConnectSL (representing the Government of the Democratic
                Socialist Republic of Sri Lanka) may add to, delete, or modify
                any or all of the terms and conditions in the TOU (including the
                feature guidelines) at any time without notice to you. You can
                review the most current version of the main TOU at any time at:
                [Insert updated URL for the Terms of Use].
              </p>
              <p className="font-style-public-p">
                <b>DESCRIPTION OF CONNECTSL'S SERVICES</b>
              </p>
              <p className="font-style-public-p">
                ConnectSL is the Government's Feedback Unit. We aim to gather
                and gauge ground sentiments, engage citizens, and promote active
                citizenry. Our feedback platforms, including the ConnectSL
                website and the ConnectSL Facebook Page, provide channels for
                you to share your feedback with the Government. Feedback
                received is read by ConnectSL staff and surfaced to relevant
                agencies. We also facilitate communication between citizens and
                agencies by proactively initiating discussions on various
                topics.
              </p>
              <p className="font-style-public-p">
                <b>LOGIN, SECURITY, AND EMAILS FROM CONNECTSL</b>
              </p>
              <p className="font-style-public-p">
                While some features of the website are available without login,
                some features or parts of the website (such as the Discussion
                Forum) require you to log in using your Facebook account. You
                may end your session on the website by clicking My Account
                Logout.
              </p>
              <p className="font-style-public-p">
                By logging in as such, you understand and agree to ConnectSL
                receiving all information about you which Facebook shares with
                ConnectSL. This information includes your public profile
                information and your email address.
              </p>
              <p className="font-style-public-p">
                If you disclose your email address on your Facebook account,
                ConnectSL may from time to time send you emails (including email
                invitations to events and informational emails, as well as
                follow-up emails and email replies to comments and queries
                posted, submitted, or otherwise contributed by you), and you
                agree to receiving all such emails. You may withdraw your
                consent by sending an email to connectsl@icta.lk indicating your
                name and email address, and stating that you no longer wish to
                receive emails from ConnectSL. ConnectSL shall, upon receipt of
                such notice, cease the sending of further emails to you.
              </p>
              <p className="font-style-public-p">
                You shall be responsible for all access to and use of the
                website through your Facebook account, whether or not the
                account was actually operated by you.
              </p>
              <p className="font-style-public-p">
                You shall: (a) immediately notify ConnectSL of any unauthorized
                login to the website or any other breach of security, and (b)
                ensure that you "log out"/ exit at the end of each session by
                logging out from your Facebook account. ConnectSL will not be
                liable for any loss or damage caused to you or any other party
                arising from your failure to comply with this term.
              </p>
              <p className="font-style-public-p">
                <b>CONNECT</b>
              </p>
              <p className="font-style-public-p">
                You are solely and entirely responsible for any data, text,
                files, information, usernames.
              </p>
            </div>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </div>
    </div>
  );
}
