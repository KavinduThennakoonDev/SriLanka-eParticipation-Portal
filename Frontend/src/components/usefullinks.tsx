import { Row, Col } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { SlArrowRight } from "react-icons/sl";

export default function () {
  return (
    <div className="body-useful-links">
      <div className="content-topic">
        <ul className="public-style-content-subtopic">
          <li>
            <a href="/">
              Home <SlArrowRight />
            </a>
          </li>
          <li>
            <a href="">
              Who We Are
              <SlArrowRight />
            </a>
          </li>
          <li>
            <a href="/termsofparticipation">
              <b>Useful Links</b>{" "}
            </a>
          </li>
        </ul>
        <h1 className="topic-style-public"> Useful Links</h1>
      </div>
      <br/>
      <ul className="desc-css">
        <li><a href="https://www.presidentsoffice.gov.lk/">Presidential Secretariat</a></li>
        <li><a href="https://www.pmoffice.gov.lk/">Prime Minister's Office</a></li>
        <li><a href="https://www.parliament.lk/">Parliament</a></li>
        <li><a href="https://www.supremecourt.lk/">Supreme Court</a></li>
        <li><a href="https://www.cabinetoffice.gov.lk/">Office Of The Cabinet Of Ministers</a></li>
      </ul>
      <br/>
    </div>
  );
}
