import { SlArrowRight } from "react-icons/sl";

export default function (){
    return (
      <div className="View-gallery">
      <div className="content-topic">
      <ul className="public-style-content-subtopic">
        <li>
          <a href="/">
            Home <SlArrowRight />
          </a>
        </li>
        <li>
          <a href="">
            Photo Gallery <SlArrowRight />
          </a>
        </li>
        <li>
          <a href="/termsofuse">
            <b>View Gallery</b>
          </a>
        </li>
      </ul>
      <h1 className="topic-style-public"> View Gallery</h1>
    </div>
    <div className="body-gallery">
      
    </div>
    </div>
    );
}