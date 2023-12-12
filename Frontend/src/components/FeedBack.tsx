import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useParams, useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';
import { SlArrowRight } from "react-icons/sl";
import Swal from 'sweetalert2';
import { TextareaAutosize } from "@mui/material";
import { API_BASE_URL } from "../utils/constants";


const defaultTheme = createTheme();

export default function FeedBack(): JSX.Element {
  const [first_name, setFirstname] = useState('');
  const [last_name, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone_no, setPhoneNumber] = useState('');
  const [feedback, setFeedback] = useState('');
  const [content_idInput, setContent_idInput] = useState('');
  const { content_id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState({
    content_topic: "",
    content_image: "",
    content_description: "",
    content_id: ""
  });
  const [loading, setLoading] = useState(true);
  const [formErrors, setFormErrors] = useState({
    firstNameError: '',
    lastNameError: '',
    emailError: '',
    phoneNoError: '',
    feedbackError: ''
  });
  const [validEmail, setValidEmail] = useState(true); // State to track valid email

  
  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
     // Check for form validation
     if (!first_name || !last_name || !email || !phone_no || !feedback) {
      setFormErrors({
        firstNameError: !first_name ? 'First name is required' : '',
        lastNameError: !last_name ? 'Last name is required' : '',
        emailError: !email ? 'Email is required' : '',
        phoneNoError: !phone_no ? 'Phone number is required' : '',
        feedbackError: !feedback ? 'Feedback description is required' : ''
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
// // if (!regexx.test(feedback)) {
// //   setFormErrors((prevErrors) => ({
// //     ...prevErrors,
// //     feedbackError: "Feedback should contain only letters, spaces, dots, and commas",
// //   }));
// //   return; // Prevent form submission if there's an error in the feedback description format
// // }
if (!/^\S+@\S+\.\S+$/.test(email)) {
  setValidEmail(false); // Set validEmail state to false if email format is incorrect
  setFormErrors({
    ...formErrors,
    emailError: 'Invalid email format',
  });
  return;
}

if (feedback.length > 5000) {
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
  
console.log(content_idInput);
    axios.post(`${API_BASE_URL}/feedback/addf`, {
      first_name,
      last_name,
      email,
      phone_no,
      feedback,
      content_idInput
    })
    .then(res => {
      Swal.fire(
        'New Feedback!',
        'We have received your feedback successfully',
        'success'
      );
      navigate('/');
    })
    .catch((err) => {
      Swal.fire(
        "Error",
        "There was an issue submitting your feedback. Please try again later.",
        "error"
      );
    });
  };

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/content/participate/${content_id}`);
        setContent(res.data);       
        setContent_idInput(res.data.content_id);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchContent();
  }, [content_id]);
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="content-topic">
        <ul className="public-style-content-subtopic">
          <li><a href="/participate/content_id">{content.content_topic} <SlArrowRight/></a></li>
          {/* <li><a href="">FeedBack<SlArrowRight/></a></li> */}
          <li><a href="/termsofparticipation"><b>Feedback</b> </a></li>
        </ul>
        <h1 className="topic-style-public">Feedback</h1>
      </div>
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid key={content.content_image} container spacing={2}>
              <Grid item xs={12} sm={6}>
              <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={(e) => {
                    const value = e.target.value;
                  
                    // // Regular expression to check for symbols or numbers
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
                  autoFocus
                
                  error={!!formErrors.firstNameError}
                 helperText={formErrors.firstNameError}
                
             
                />
                {/* <TextField id="content_id" type="number" value={content.content_id}/> */}
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
                  
                  onChange={e =>{ setEmail(e.target.value);
                    setValidEmail(true);
                  }
        
                  }
                  // Reset validEmail state when the email input changes
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
                  name="phone_no"
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
                <TextareaAutosize
                  style={{ width: 600 }}
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
                    setFeedback(value);
      
                    // Proceed with handling the value or updating state as needed
                  }}
                
              
                />
        {formErrors.feedbackError && (
                  <p style={{ color: 'red' }}>{formErrors.feedbackError}</p>
                )}
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
      {/* <Comentview/> */}
    </ThemeProvider>
  );
}
