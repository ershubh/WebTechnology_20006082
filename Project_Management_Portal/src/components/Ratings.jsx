import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels = {
    0.5: 'Very Easy',
    1: 'Easy',
    1.5: 'Slightly Challenging',
    2: 'Challenging',
    2.5: 'Moderate',
    3: 'Moderate+',
    3.5: 'Hard',
    4: 'Hard+',
    4.5: 'Very Hard',
    5: 'Extremely Hard',
  };

export const Ratings=({value})=> {
  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </Box>
  );
}
