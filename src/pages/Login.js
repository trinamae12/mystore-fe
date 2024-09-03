import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { login } from '../actions/auth';
import { useNavigate } from 'react-router-dom';

// TODO remove, this demo shouldn't need to reset the theme.

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successful, setSuccessful] = useState(false);
    const [errors, setErrors] = useState([]);

    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const loginUser = (e) => {
        e.preventDefault();

        setSuccessful(false);

        dispatch(login(email, password))
        .then((response) => {
            console.log("response", response);
            navigate("/");
            setSuccessful(true);
        })
        .catch((error) => {
            console.log("error", error?.errors)
            setErrors(error?.errors);
            setSuccessful(false);
        })
    };

    // const checkError = (field) => {
    //   if(errors?.[field]) {
    //     return errors?.[field]?.forEach((error) => )
    //   }
    // }

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <Box component="form" onSubmit={loginUser} noValidate sx={{ mt: 1 }}>
            <TextField
              error={!!errors?.['email']}
              helperText={errors?.['email'] ? errors?.['email'][0] : ''}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              error={!!errors?.['password']}
              helperText={errors?.['password'] ? errors?.['password'][0] : ''}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item>
                <Link href={"/register"} variant="body2">
                  {"Don't have an account yet? Register here"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}