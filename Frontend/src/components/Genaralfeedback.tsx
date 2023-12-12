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

const defaultTheme = createTheme();

export default function SignUp(): JSX.Element {
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone_no, setPhoneNumber] = useState("");
  const [gen_subject, setGensubject] = useState("");
  const [gen_feedback, setGenfeedback] = useState("");

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [formErrors, setFormErrors] = useState({
    firstNameError: '',
    lastNameError: '',
    emailError: '',
    phoneNoError: '',
    gen_subjectError:'',
    feedbackError: ''
  });
  const [validEmail, setValidEmail] = useState(true); // State to track valid email

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
       // Check for form validation
       if (!first_name || !last_name || !email || !phone_no || !gen_feedback) {
        setFormErrors({
          firstNameError: !first_name ? 'First name is required' : '',
          lastNameError: !last_name ? 'Last name is required' : '',
          emailError: !email ? 'Email is required' : '',
          phoneNoError: !phone_no ? 'Phone number is required' : '',
          gen_subjectError: !gen_subject? 'Subject is required' : '',
          feedbackError: !gen_feedback ? 'Feedback description is required' : ''
        });
        return;
      }
  //     const regex = /^[a-zA-Z\s]*$/; // Allows only letters and whitespace
  //     if (!regex.test(first_name)) {
  //       setFormErrors((prevErrors) => ({
  //         ...prevErrors,
  //         firstNameError: "First name should contain only letters and spaces",
  //       }));
  //       return; // Prevent form submission if there's an error in the first name
  //     }
  //     // Validation specific to last name

  // if (!regex.test(last_name)) {
  //   setFormErrors((prevErrors) => ({
  //     ...prevErrors,
  //     lastNameError: "Last name should contain only letters and spaces",
  //   }));
  //   return; // Prevent form submission if there's an error in the last name
  // }
  // const regexx = /^[a-zA-Z\s.,]*$/; // Allows letters, spaces, dots, and commas
  // if (!regexx.test(gen_feedback)) {
  //   setFormErrors((prevErrors) => ({
  //     ...prevErrors,
  //     feedbackError: "Feedback should contain only letters, spaces, dots, and commas",
  //   }));
  //   return; // Prevent form submission if there's an error in the feedback description format
  // }

  if (gen_feedback.length > 5000) {
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      feedbackError: "Feedback should not exceed 5000 characters",
    }));
    return; // Prevent form submission if feedback exceeds the character limit
  }

      if (!/^\S+@\S+\.\S+$/.test(email)) {
        setValidEmail(false); // Set validEmail state to false if email format is incorrect
        setFormErrors({
          ...formErrors,
          emailError: 'Invalid email format',
        });
        return;
      }
      
      if (phone_no.length !== 10) {
        setFormErrors({
          ...formErrors,
          phoneNoError: 'Phone number must be 10 digits',
        });
        return;
      }
    axios
      .post(`${API_BASE_URL}/feedback/genf`, {
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
        Swal.fire(
          "Error",
          "There was an issue submitting your feedback. Please try again later.",
          "error"
        );
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
              Who We Are
              <SlArrowRight />
            </a>
          </li>
          <li>
            <a href="/termsofparticipation">
              <b>General Feedback</b>{" "}
            </a>
          </li>
        </ul>
        <h1 className="topic-style-public">General Feedback</h1>
      </div>
      
      <Container component="main" maxWidth="sm">
        
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
            sx={{ mt: 0.01 }}
          >
            <p> If you wish to share your thoughts or suggestions regarding a specific government policy or concern, please utilize the General Feedback Form provided below. Your input will be brought to the notice of the appropriate government agencies, and they will respond directly to your feedback. Additionally, we value your comments on your interaction with this website. Your insights are crucial in enhancing the user-friendliness of our platform. Kindly take 5 to 10 minutes to complete this form and share how we can enhance our services to better serve you.</p>
            <Grid container spacing={2}>
          

<Grid item xs={12} sm={6}>
  <TextField
    required
    fullWidth
    id="firstName"
    label="First Name"
    name="firstName"
    autoComplete="given-name"
    onChange={(e) => {
      const value = e.target.value;
    
      // Regular expression to check for symbols or numbers
      // const regex = /^[a-zA-Z\s]*$/; // Allows only letters and whitespace
    
      // if (!regex.test(value)) {
      //   setFormErrors((prevErrors) => ({
      //     ...prevErrors,
      //     firstNameError: "First name should contain only letters and spaces",
      //   }));
      // } else {
      //   setFormErrors((prevErrors) => ({
      //     ...prevErrors,
      //     firstNameError: "", // Clear the error message if it's valid
         
      //   }));
      // } 
      setFirstname(value);
    
      // Proceed with handling the value or updating state as needed
    }}
    
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
    onChange={(e) => {
      const value = e.target.value;
    
      // Regular expression to check for symbols or numbers
      // const regex = /^[a-zA-Z\s]*$/; // Allows only letters and whitespace
    
      // if (!regex.test(value)) {
      //   setFormErrors((prevErrors) => ({
      //     ...prevErrors,
      //     lastNameError: "Last name should contain only letters and spaces",
      //   }));
      // } else {
      //   setFormErrors((prevErrors) => ({
      //     ...prevErrors,
      //     lastNameError: "", // Clear the error message if it's valid
         
      //   }));
      // }
       setLastname(value);
    
      // Proceed with handling the value or updating state as needed
    }}
    
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
                  onChange={(e) => {setEmail(e.target.value);
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
                  onChange={(e) => {
                    const inputNumber = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
                    setPhoneNumber(inputNumber);
                  }}
                  inputProps={{
                    pattern: "[0-9]*",
                    inputMode: "numeric",
                    maxLength: 10,
                   
                    title: "Enter a 10-digit number"
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
                      <MenuItem value={"Local Authorities"}>
                        Local Authorities
                      </MenuItem>
                      <MenuItem value={"Manpower"}>Manpower</MenuItem>
                     
                      <MenuItem value={"Politics & Governance"}>
                        Politics & Governance
                      </MenuItem>
                      <MenuItem value={"Transport"}>Transport</MenuItem>
                      <MenuItem value={"Others"}>Others</MenuItem>
                    </Select>
                  {/* Your MenuItem components */}
                  {formErrors.gen_subjectError && (
                  <p style={{ color: 'red' }}>{formErrors.gen_subjectError}</p>
                )}
          </FormControl>
                 
                </Box>
              </Grid>

              <Grid item xs={12}>
                <TextareaAutosize
                  style={{
                    width: 600,
                  }}
                  minRows={7}
                  placeholder="Feedback Description
                  Maximum Characters: 5000"
        
                  aria-label="Feedback Description"
                  onChange={(e) => {
                    const value = e.target.value;
                  
                    // Regular expression to allow letters, spaces, dots, and commas
                    // const regex = /^[a-zA-Z\s.,]*$/; // Allows letters, spaces, dots, and commas
      
                    // if (!regex.test(value)) {
                    //   setFormErrors((prevErrors) => ({
                    //     ...prevErrors,
                    //     feedbackError: "Feedback should contain only letters, spaces, dots, and commas",
                    //   }));
                    // } else if (value.length > 5000) {
                    //   setFormErrors((prevErrors) => ({
                    //     ...prevErrors,
                    //     feedbackError: "Feedback should not exceed 5000 characters",
                    //   }));
                    // } else {
                    //   setFormErrors((prevErrors) => ({
                    //     ...prevErrors,
                    //     feedbackError: "", // Clear the error message if it's valid
                    //   }));
                    // }
                    setGenfeedback(value);
      
                    // Proceed with handling the value or updating state as needed
                  }}
                />
                 {formErrors.feedbackError && (
                  <p style={{ color: 'red' }}>{formErrors.feedbackError}</p>
                )}
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