import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import { BrowseGallery, Home } from '@mui/icons-material';

export const Leftbar=()=> {
  return (
    <Box sx={{ width: '100%' ,bgcolor: 'background.paper' ,height:"100%"}}>
      <nav aria-label="main mailbox folders">
        <List>
        <ListItem disablePadding component={Link} to={"/"} sx={{color:'black',textDecoration:"none"}}>
            <ListItemButton>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText  primary="Home"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding component={Link} to={"/apply"} sx={{color:'black',textDecoration:"none"}}>
            <ListItemButton>
              <ListItemIcon>
                <BrowseGallery />
              </ListItemIcon>
              <ListItemText  primary="Browse new Projects"/>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
    </Box>
  );
}