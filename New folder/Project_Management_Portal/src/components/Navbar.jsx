import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { Box, Stack } from '@mui/material';

export const  Navbar=({isLoginPage})=> {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{bgcolor:"white",color:"black"}}>
        <Toolbar sx={{padding:1,height:"4rem",justifyContent:"space-around"}} >

            {isLoginPage?(
                <Stack spacing={2} width={'100%'} direction={"row"} justifyContent={'space-around'} alignItems={'center'}>

                    {/* <Box width={'200px'}>
                        <img src={logo} alt="logo-university" style={{height:"100%",width:"100%",objectFit:"contain"}}/>
                    </Box> */}

                    <Stack flexDirection={'row'} justifyContent={'center'} alignContent={'center'}>
                      <Typography mr={2} variant='h6'>Home</Typography>
                      <Typography mr={2} variant='h6'>Support</Typography>
                    </Stack>

                </Stack>
            ):(
          <>

          {/* contains the name and icon */}
          <Stack flexDirection={'row'} justifyContent={'center'} alignItems={"center"}>
                {/* <AccountTreeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                {/* <Box width={'200px'}>
                    <img src={logo} alt="logo-university" style={{height:"100%",width:"100%",objectFit:"contain"}}/>
                </Box> */}
                <Typography variant="h5" noWrapcomponent="a" href="#app-bar-with-responsive-menu"
                  sx={{mr: 2,display: { xs: 'none', md: 'flex' },fontWeight: 100,color: 'inherit',textDecoration: 'none'}}>
                  Project Management
                </Typography>
          </Stack>
            
          {/* contains the avatar and display options */}
          <Stack>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Stack>

            <Menu sx={{ mt: '45px' }}id="menu-appbar" anchorEl={anchorElUser} anchorOrigin={{vertical: 'top', horizontal: 'right', }}keepMountedtransformOrigin={{vertical: 'top', horizontal: 'right', }}open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>

                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>

                  <MenuItem>
                    <Typography textAlign="center">Account</Typography>
                  </MenuItem>

                  <MenuItem component={Link} to={"/"}>
                     <Typography textAlign="center">Dashboard</Typography>
                  </MenuItem>
                  <MenuItem component={Link} to={"/editprofile"}>
                     <Typography textAlign="center">Edit Profile</Typography>
                  </MenuItem>

                  <MenuItem>
                    <Typography component={Link} sx={{color:"black",textDecoration:"none"}} to={'/login'} textAlign="center">Logout</Typography>
                  </MenuItem>
            </Menu>
          </>
            )}

           
        </Toolbar>
    </AppBar>
  );
}

