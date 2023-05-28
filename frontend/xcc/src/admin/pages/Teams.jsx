import {React, useEffect} from 'react';
import Sidenav from "../components/Sidenav";
import Appbar from "../components/Appbar";
import Box from "@mui/material/Box";
import TeamsTable from "../tables/TeamsTable";
import { Divider, Typography } from "@mui/material";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import ProfileCard from "./createcomponents/ProfileCard";


function Teams() {

  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:8081/adminteams')
      .then(res => {
        if (res.data.Status === "Success") {
          if (res.data.role === "admin") {
            const id = res.data.id;
            navigate('/adminteams');
          }
        } else {
          navigate('/start');
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
            Teams
          </Typography>
          <Divider
            sx={{
              borderColor: "secondary.light",
            }}
          />
          <TeamsTable />
        </Box>
      </Box>
    </>
  );
}

export default Teams;
