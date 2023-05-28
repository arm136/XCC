import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Stack
} from '@mui/material';
import Navbar from "../../component/Navbar";
import Sidenav from "../../component/Sidenav";
// import Divider from '@mui/material/Divider';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';



const Profile = () => {

  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:8081/Profile/')
      .then(res => {
        if (res.data.Status === "Profile") {
          if (res.data.role === "user") {
            const id = res.data.id;
            navigate('/Profile/' + id);
          }
        } else {
          navigate('/start')
          console.log('Access Denied!');
        }
      })
  }, [navigate])


  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/uprofile/" + id)
      .then(res => setData(res.data.Result[0]))
      .catch((err) => console.log(err));

  })


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
            Welcome, {data.name}
          </Typography>
          {/* <Divider /> */}
          <hr />

          <Box 
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          
          >

          <Box marginRight={"5rem"} marginLeft={"0rem"}>

            <img alt="img" src={`http://localhost:8081/pdf/` + data.image}
              style={{
                borderRadius: "100px",
                height: "150px",
                width: "150px",
              }} />
          </Box>
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            minHeight='50vh'
            sx={{ border: "10px", borderColor: "red" }}
          >

              <Stack spacing={2}>
                <Typography variant="h5">Name: {data.name}</Typography>
                <Typography variant="h5">Roll: {data.roll}</Typography>
                <Typography variant="h5">Email: {data.email}</Typography>
                <Typography variant="h5">Mobile: {data.mobile}</Typography>
              </Stack>

            </Box>
            {/* {data.map((events, index) => {
              return (
                <Box>
                  <img alt="img" src={`http://localhost:8081/pdf/` + events.image}
                    style={{
                      height: "150px",
                      width: "150px",
                    }}
                  />
                  <Box key={index}>
                    <Typography>Name:{events.name}</Typography>
                    <Typography>Roll:{events.roll}</Typography>
                    <Typography>Email:{events.email}</Typography>
                    <Typography>Mobile:{events.mobile}</Typography>
                  </Box>
                </Box>
              )
            })} */}
          </Box>


        </Box>
      </Box>
    </>
  );
};

export default Profile;