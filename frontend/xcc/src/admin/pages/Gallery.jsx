import { React, useEffect} from 'react';
import Sidenav from "../components/Sidenav";
import Appbar from "../components/Appbar";
import Box from "@mui/material/Box";
import GalleryTable from "../tables/GalleryTable";
import { Divider, Typography } from "@mui/material";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Teams() {

  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:8081/admingallery')
      .then(res => {
        if (res.data.Status === "Success") {
          if (res.data.role === "admin") {
            const id = res.data.id;
            navigate('/admingallery');
          }
        } else {
          navigate('/start')
          console.log('Access Denied!');
        }
      })
  }, [])

  return (
    <>
      <Appbar />
      <Box height={50} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography
            variant="h4"
            sx={{ p: 0.9 }}
          >
            Gallery
          </Typography>
          <Divider
            sx={{
              borderColor: "secondary.light",
            }}
          />
          <GalleryTable />
        </Box>
      </Box>
    </>
  );
}

export default Teams;
