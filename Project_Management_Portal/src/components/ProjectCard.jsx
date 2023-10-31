import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Ratings } from './Ratings';
import { useState } from 'react';


export const ProjectCard=({projectTitle,supervisorName,difficultyRating,problemStatement})=> {


  const [isExpanded,setIsExpanded]=useState(false)
  const shortText=problemStatement.slice(0,100)

  return (
    <Card sx={{width:600,mt:2}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Just posted
        </Typography>
        <Typography variant="h5" component="div">
          {projectTitle}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {supervisorName}
        </Typography>
        <Typography gutterBottom variant="body2">
          {isExpanded?problemStatement:shortText}
          {isExpanded===true?(
            <Typography sx={{cursor:"pointer"}} onClick={()=>setIsExpanded((prev)=>!prev)}>show less</Typography>
          ):(
            <Typography sx={{cursor:"pointer"}} onClick={()=>setIsExpanded((prev)=>!prev)}>...read more</Typography>
          )}
        </Typography>



        <Typography variant='body2' fontWeight={300} mt={3}>Difficulty Rating</Typography>
        
        <Ratings value={difficultyRating}/>


      </CardContent>
      <CardActions>
        <Button size="small" variant='contained'>Apply</Button>
      </CardActions>
    </Card>
  );
}