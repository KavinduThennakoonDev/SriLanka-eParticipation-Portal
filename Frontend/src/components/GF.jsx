import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import { SlArrowRight } from "react-icons/sl";
import { useNavigate } from "react-router-dom"; // assuming you are using React Router
import Swal from "sweetalert2";
import { TextareaAutosize } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { API_BASE_URL } from "../utils/constants";
import ReCAPTCHA from "react-google-recaptcha";

const defaultTheme = createTheme();

export default function SignUp() {
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone_no, setPhoneNumber] = useState("");
  const [gen_subject, setGensubject] = useState("");
  const [gen_feedback, setGenfeedback] = useState("");

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [formErrors, setFormErrors] = useState({
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    phoneNoError: "",
    gen_subjectError: "",
    feedbackError: "",
  });
  const [validEmail, setValidEmail] = useState(true); // State to track valid email
  const recaptchaRef = React.createRef();

  const handleRecaptchaChange = (value) => {
    // You can handle the reCAPTCHA value here if needed
    console.log("reCAPTCHA value:", value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check for form validation
    if (!first_name || !last_name || !email || !phone_no || !gen_feedback) {
      setFormErrors({
        firstNameError: !first_name ? "First name is required" : "",
        lastNameError: !last_name ? "Last name is required" : "",
        emailError: !email ? "Email is required" : "",
        phoneNoError: !phone_no ? "Phone number is required" : "",
        gen_subjectError: !gen_subject ? "Subject is required" : "",
        feedbackError: !gen_feedback ? "Feedback description is required" : "",
      });
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setValidEmail(false); // Set validEmail state to false if email format is incorrect
      setFormErrors({
        ...formErrors,
        emailError: "Invalid email format",
      });
      return;
    }
    if (phone_no.length !== 10) {
      setFormErrors({
        ...formErrors,
        phoneNoError: "Phone number must be 10 digits",
      });
      return;
    }
    axios
      .post(`${API_BASE_URL}/gf/genf`, {
        first_name,
        last_name,
        email,
        phone_no,
        gen_subject,
        gen_feedback,
      })
      .then((res) => {
        Swal.fire(
          "New General Feedback!",
          "Thank you for your feedback! We have received it and will forward it to the relevant institute. Please check your email for the confirmation message.",
          "success"
        );
        navigate("/");
      })
      .catch((err) => {
        alert("unsucrssfull");
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="content-topic">
        <ul className="public-style-content-subtopic">
          <li>
            <a href="/">
              Home <SlArrowRight />
            </a>
          </li>
          <li>
            <a href="">
              FeedBack
              <SlArrowRight />
            </a>
          </li>
          <li>
            <a href="/termsofparticipation">
              <b>Genaral FeedBack</b>{" "}
            </a>
          </li>
        </ul>
        <h1 className="topic-style-public">General FeedBack</h1>
      </div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5"></Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={(e) => setFirstname(e.target.value)}
                  autoFocus
                  error={!!formErrors.firstNameError}
                  helperText={formErrors.firstNameError}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e) => setLastname(e.target.value)}
                  error={!!formErrors.lastNameError}
                  helperText={formErrors.lastNameError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setValidEmail(true);
                  }}
                  error={!!formErrors.emailError}
                  helperText={formErrors.emailError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="tel"
                  label="Phone Number"
                  name="phoneNumber"
                  autoComplete="phoneNumber"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  inputProps={{
                    pattern: "[0-9]*",
                    inputMode: "numeric",
                    maxLength: 10,

                    title: "Enter a 10-digit number",
                  }}
                  error={!!formErrors.phoneNoError}
                  helperText={formErrors.phoneNoError}
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Subject
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="gen_subject"
                      value={gen_subject}
                      label="Subject"
                      onChange={(e) => setGensubject(e.target.value)}
                    >
                      <MenuItem value={"Budget"}>Budget</MenuItem>
                      <MenuItem value={"Community & Social"}>
                        Community & Social
                      </MenuItem>
                      <MenuItem value={"Economy"}>Economy</MenuItem>
                      <MenuItem value={"Education"}>Education</MenuItem>
                      <MenuItem value={"Environment"}>Environment</MenuItem>
                      <MenuItem value={"Healthcare"}>Healthcare</MenuItem>
                      <MenuItem value={"Housing"}>Housing</MenuItem>
                      <MenuItem value={"Manpower"}>Manpower</MenuItem>
                      <MenuItem value={"Local Authorities"}>
                        Local Authorities
                      </MenuItem>
                      <MenuItem value={"Politics & Governance"}>
                        Politics & Governance
                      </MenuItem>
                      <MenuItem value={"Transport"}>Transport</MenuItem>
                      <MenuItem value={"Others"}>Others</MenuItem>
                    </Select>
                    {/* Your MenuItem components */}
                    {formErrors.gen_subjectError && (
                      <p style={{ color: "red" }}>
                        {formErrors.gen_subjectError}
                      </p>
                    )}
                  </FormControl>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <TextareaAutosize
                  style={{
                    width: 396,
                  }}
                  minRows={5}
                  placeholder="General Feedback Description"
                  aria-label="Feedback Description"
                  onChange={(e) => setGenfeedback(e.target.value)}
                />
                {formErrors.feedbackError && (
                  <p style={{ color: "red" }}>{formErrors.feedbackError}</p>
                )}
              </Grid>
              <Grid item xs={12}>
                {/* Add reCAPTCHA component */}
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LcLSCIpAAAAAGzJ2NGMAdZjmr1B-ntdeySYrDdb"
                  onChange={handleRecaptchaChange}
                  size="normal"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
