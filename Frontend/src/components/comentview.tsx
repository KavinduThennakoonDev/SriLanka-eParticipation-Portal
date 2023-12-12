import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import moment from "moment";
import { API_BASE_URL } from "../utils/constants";

// Assuming a structure like this for feedback data
interface FeedbackData {
  first_name: string;
  feedback: string;
  created_at: string;
  content_id: string;
  // Add more properties if your data structure contains them
}


export default function CommentView(): JSX.Element {
  const [feedback, setFeedback] = useState<FeedbackData[]>([]);

  const { content_id } = useParams();
  // console.log("test---------------->>",content_id);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/feedback/${content_id}`)
      .then((response) => {
        console.log("printing data array ---->>>" + JSON.stringify(content_id));

        setFeedback(response.data);
      })
      .catch((error) => {
        console.error("Error--->>", error);
      });
  }, [content_id]);

  return (
    <section style={{ backgroundColor: "#005A9C" }}>
      <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
        <div>
          <MDBTypography tag="h4" className="mb-0">
            <p>
              <b className="recent-css">Recent comments</b>
            </p>
          </MDBTypography>
        </div>
        <br />
        {feedback.map((data, i) => (
          
          <MDBRow key={i} className="justify-content-center m-t-10">
            
            <MDBCol md="9" lg="10">
              <MDBCard className="text-dark">
                <MDBCardBody className="p-4">
                  <p className="fw-light mb-4 pb-2"></p>

                  <div className="d-flex flex-start">
                
                    <MDBCardImage
                      className="rounded-circle shadow-1-strong me-3"
                      src="https://cdn.iconscout.com/icon/premium/png-512-thumb/user-238-95851.png?f=webp&w=256"
                      alt="avatar"
                      width="60"
                      height="60"
                    />
                    <div>
                      <MDBTypography tag="h6" className="fw-bold mb-1">
                        {data.first_name}
                      </MDBTypography>
                      <div className="d-flex align-items-center mb-3">
                        <p className="mb-0">{moment(data.created_at).format("YYYY-MM-DD")}</p>
                        <span className="badge bg-success" style={{ margin: 10,
    padding: 9}}> Approved</span>
                        <a href="#!" className="link-muted">
                          <MDBIcon fas icon="pencil-alt ms-2" />
                        </a>
                        <a href="#!" className="link-muted">
                          <MDBIcon fas icon="redo-alt ms-2" />
                        </a>
                        <a href="#!" className="link-muted">
                          <MDBIcon fas icon="heart ms-2" />
                        </a>
                      </div>
                      <p className="mb-0">{data.feedback}</p>
                    </div>
                  </div>
                </MDBCardBody>

                <hr className="my-0" />
              </MDBCard>
            </MDBCol>
          </MDBRow>
        ))}
      </MDBContainer>
    </section>
  );
}
