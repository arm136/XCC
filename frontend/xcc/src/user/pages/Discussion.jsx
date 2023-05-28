import {React, useEffect} from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from '../component/Navbar';
import Sidenav from '../component/Sidenav';
import Divider from '@mui/material/Divider';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Discussion = () => {

  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:8081/Discussion')
      .then(res => {
        if (res.data.Status === "Success") {
          if (res.data.role === "user") {
            const id = res.data.id;
            navigate('/Discussion');
          }
        } else {
          navigate('/start')
          console.log('Access Denied!');
        }
      })
  }, [navigate])


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
            Discussion Forums
          </Typography>
          <Divider />

        </Box>
      </Box>
    </>
  );
}

export default Discussion;