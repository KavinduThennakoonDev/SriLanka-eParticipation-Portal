import React, { useEffect, useState } from "react";

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

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { API_BASE_URL } from "../utils/constants";

const defaultTheme = createTheme();

export default function Newsletter() {
  const [province, setProvince] = useState({});
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [formErrors, setFormErrors] = useState({
    provinceError: "",
    emailError: "",
  });
  const [validEmail, setValidEmail] = useState(true); // State to track valid email

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check for form validation
    if (!province || !email) {
      setFormErrors({
        provinceError: !province ? "Province is required" : "",
        emailError: !email ? "Email is required" : "",
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

    axios
      .post(`${API_BASE_URL}/Newsletter/addnewsletter`, {
        province,
        email,
      })
      .then((res) => {
        Swal.fire(
          "Thank you for Subscription",
          "Thank you for subscribing to site updates. You will receive an email at your provided address whenever a new public consultation or event is published.",
          "success"
        );
        navigate("/");
      })
      .catch((err) => {
        Swal.fire(
          "Error",
          "There was an issue submitting your subscription. Please try again later.",
          "error"
        );
      });
  };
  // useEffect(() => {
  //   const fetchAllContents = async () => {
  //     try {
  //       const res = await axios.get(`${API_BASE_URL}/Newsletter/getprovince`);
  //       setProvince(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchAllContents();
  // }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="content-topic">
        <ul className="public-style-content-subtopic">
          <li>
            <a href="/">
              Home <SlArrowRight />
            </a>
          </li>
          {/* <li>
            <a href="">
              FeedBack
              <SlArrowRight />
            </a>
          </li> */}
          <li>
            <a href="/termsofparticipation">
              <b>Newsletter</b>{" "}
            </a>
          </li>
        </ul>
        <h1 className="topic-style-public">Newsletter</h1>
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
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  value={email}
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
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth error={!!formErrors.provinceError}>
                    <InputLabel id="demo-simple-select-label">
                      Province
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="province"
                      value={province}
                      label="province"
                      onChange={(e) => setProvince(e.target.value)}
                      error={!!formErrors.provinceError}
                      helperText={formErrors.provinceError}
                    >
                      <MenuItem value={1}>SOUTHERN PROVINCE</MenuItem>
                      <MenuItem value={2}>WESTERN PROVINCE</MenuItem>
                      <MenuItem value={3}>CENTRAL PROVINCE</MenuItem>
                      <MenuItem value={4}>SABARAGAMUWA PROVINCE</MenuItem>
                      <MenuItem value={5}>EASTERN PROVINCE</MenuItem>
                      <MenuItem value={6}>UVA PROVINCE</MenuItem>
                      <MenuItem value={7}>NORTH WESTERN PROVINCE</MenuItem>
                      <MenuItem value={8}>NORTH CENTRAL PROVINCE</MenuItem>
                      <MenuItem value={9}>NORTHERN PROVINCE</MenuItem>
                    </Select>
                    {formErrors.provinceError && (
                      <Typography variant="body2" color="error">
                        {formErrors.provinceError}
                      </Typography>
                    )}
                    {/* Your MenuItem components */}
                    {/* {formErrors.provinceError && (
                      <p style={{ color: "red" }}>{formErrors.provinceError}</p>
                    )} */}
                  </FormControl>
                </Box>
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
