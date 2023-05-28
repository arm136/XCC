import { React, useEffect} from 'react';
import Sidenav from "../components/Sidenav";
import Appbar from "../components/Appbar";
import Box from "@mui/material/Box";
import EventsTable from "../tables/EventsTable";
import { Divider, Typography } from "@mui/material";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdEvents() {

  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:8081/adminevents')
      .then(res => {
        if (res.data.Status === "Success") {
          if (res.data.role === "admin") {
            const id = res.data.id;
            navigate('/adminevents');
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
           Events
          </Typography>
          <Divider
            sx={{
              borderColor: "secondary.light",
            }}
          />

          <EventsTable />
        </Box>
      </Box>
    </>
  );
}

export default AdEvents;
