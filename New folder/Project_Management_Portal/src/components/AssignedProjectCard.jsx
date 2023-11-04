import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProjectProgressBar from './ProjectProgressBar';
import { Stack } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export const AssignedProjectCard=({projectName,dateJoined,supservisorName,status,completedPercentage,problemStatement})=> {
  return (
    <Card sx={{ minWidth: 275 ,width:600,mt:3,cursor:"pointer"}}>
      <CardContent >

        <Box>
            {/* date joined */}
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Joined - {dateJoined}
            </Typography>

            {/* project name */}
            <Typography variant="h5" component="div">
              {projectName}
            </Typography>

            {/* teacher name */}
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {supservisorName}
            </Typography>
        </Box>

        {/* project problem statement */}
        <Stack m={'.5rem 0rem'} >
          <Typography gutterBottom variant="body2">
              {problemStatement}
          </Typography>
        </Stack>

        {/* completed percentage */}
        <Stack mt={2}>
          <ProjectProgressBar completedPercentage={completedPercentage}/>
        </Stack>
        
      {/* project status */}
      <Typography mt={2} color={'text.secondary'}>Completed {completedPercentage}% {completedPercentage===100?"✅":null}</Typography>
      </CardContent>

      <CardActions>
        <Button size="small">{completedPercentage===100?"Completed":"Open"}</Button>
      </CardActions>
    </Card>
  );
}