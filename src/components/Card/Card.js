import React from 'react';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

export const Card = (props) => (
  <Box
    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
    borderRadius="10px"
    p={2}
    minHeight="115px"
    width="300px"
  >
    <Box display="flex" flexDirection="row">
      <Box>
        <Box width="2rem" height="2rem">
          {props.icon}
        </Box>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography color="#133d59" fontSize="18px">
          {props.title}
        </Typography>
      </Box>
    </Box>
    <Box
      ml={'45px'}
      display="flex"
      justifyContent={'flex-end'}
      marginRight="20px"
    >
      <span style={{ fontSize: '60px', fontWeight: 'bold', color: '#133d59' }}>
        {props.value}
      </span>
    </Box>
  </Box>
);
