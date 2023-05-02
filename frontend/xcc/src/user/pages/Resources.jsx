import React from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from '../component/Navbar';
import Sidenav from '../component/Sidenav';
import Divider from '@mui/material/Divider';

const Resources = () => {
  return (
    <>
      <Navbar />
      <Box height={50} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

          <Typography
            variant="h4"
            sx={{ p: 0.9 }}
          >
            Resources
          </Typography>
          <Divider />

        </Box>
      </Box>
    </>
  );
}

export default Resources;