import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {projectScreening } from '../assets';
import Lottie from 'lottie-react';
import {Stack} from '@mui/material'
import { Link as linkRoute } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit">
        Project Mangament Portal
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export const Login=()=> {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
      <Stack component="main" sx={{ height: '100vh' ,width:"100vw"}} flexDirection={'row'}>
          
          
          <Lottie animationData={projectScreening}/>
      

        <Stack item xs={12} sm={8} md={5} component={Paper} elevation={6} justifyContent={'center'}>

          <Box sx={{ my: 8,mx: 4, display: 'flex', flexDirection: 'column',alignItems: 'center'}}>

            {/* Image container */}
            {/* <Box width={'500px'}>
              <img src={logo} style={{width:"100%",height:"100%",objectFit:"contain"}} alt="logo-university" />
            </Box> */}

            {/* feild and details container */}
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>

              <TextField margin="normal" required fullWidth id="ID" label="ID" name="ID" autoComplete="email" autoFocus/>
              <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"/>
              
              <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
              
                <Button type="submit" fullWidth variant="contained" sx={{mt:3,mb:2,height:"3rem"}}>
                  Login
                </Button>

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link component={linkRoute} to={'/signup'} variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>

              <Copyright sx={{ mt: 5 }} />
            </Box>

          </Box>
        </Stack>
        
      </Stack>
  );
}