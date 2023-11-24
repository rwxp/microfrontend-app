import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import bg from "../images/bg.png";
import { navigateToUrl } from "single-spa";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const defaultTheme = createTheme();

function register() {

  const [sex, setSex] = useState('');  

  const handleChange = (event) => {
    setSex(event.target.value);
  };

  const handleNavigate = (section) => {
    // Prevent default form submission behavior
    event.preventDefault();
    // Use the navigateToUrl function to redirect to the specified section
    navigateToUrl(`/${section}`);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <AccountCircleIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box
              component="form"
              noValidate

              sx={{ mt: 1 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="firstName"
                    label="First name"
                    name="firstName"
                    autoFocus
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="lastName"
                    label="Last name"
                    name="lastName"
                    autoFocus
                  />
                </Grid>
              </Grid>  
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label">Sex</InputLabel>
                <Select
                  sx={{textAlign:'left'}}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Sex"
                  value={sex}
                  onChange={handleChange}
                >
                  <MenuItem value={1}>Male</MenuItem>
                  <MenuItem value={2}>Female</MenuItem>
                </Select>
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={()=> handleNavigate("shopping")}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default register