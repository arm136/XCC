import {React, useEffect} from 'react';
import Sidenav from "../components/Sidenav";
import Box from "@mui/material/Box";
import Appbar from "../components/Appbar";
import { Divider, Typography } from "@mui/material";
import ResourcesTable from "../tables/ResourcesTable";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AResources() {

  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:8081/adminresources')
      .then(res => {
        if (res.data.Status === "Success") {
          if (res.data.role === "admin") {
            const id = res.data.id;
            navigate('/adminresources');
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
            Resources
          </Typography>
          <Divider
            sx={{
              borderColor: "secondary.light",
            }}
          />
          {/* <h3 className="text-primary">Portable Document File (PDF)</h3> */}
          <ResourcesTable />
          
        </Box>
      </Box>
    </>
  );
}

export default AResources;
