import React from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from '../component/Navbar';
import Sidenav from '../component/Sidenav';
import Divider from '@mui/material/Divider';
// import { EditorView } from 'codemirror';
import Landing from '../compiler/components/Landing';

const Playground = () => {
  return (

    
    <>
      <Navbar />
      <Box height={50} />
      <Box sx={{ display: 'flex'}}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

          <Typography
            variant="h4"
            sx={{ p: 0.5 }}
          >
            My Playground
          </Typography>
          <Divider />
          <Landing/>
        </Box>
      </Box>
    </>
  );
}

export default Playground;