import { React, useEffect, useState } from "react";
import Sidenav from "../components/Sidenav";
import Appbar from "../components/Appbar";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Dashboard() {

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:8081/admin')
      .then(res => {
        if (res.data.Status === "Success") {
          if (res.data.role === "admin") {
            // const id = res.data.id;
            navigate('/admin');
          }
        } else {
          navigate('/start')
          console.log('Access Denied!');
        }
      })
  }, [])

  const [userLength, setUserLength] = useState(0);
  const [teamLength, seTeamLength] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8081/manageusers")
      .then((res) => {
        if (res.data.Status === "success") {
          console.log(res.data.Result);
          // setData(res.data.Result);
          setUserLength(res.data.Result.length);
        } else {
          alert("error");
        }
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:8081/teams")
      .then((res) => {
        if (res.data.Status === "success") {
          console.log(res.data.Result);
          // setData(res.data.Result);
          seTeamLength(res.data.Result.length);
        } else {
          alert("error");
        }
      })
      .catch((err) => console.log(err));
  }, []);

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
            Dashboard
          </Typography>
          <Divider
            sx={{
              borderColor: "secondary.light",
            }}
          />
          <Link className="btn btn-primary" style={{ marginTop: "1rem", marginRight: "6rem" }}>
            {/* <p>Number of Users: {userCount}</p> */}
            {/* <h4>Total Registered Users :<br /> <br /> <h2>{userLength}</h2></h4> */}
            <Typography variant="h5">Total Registered Users :<br /> <br /><Typography variant="h4">{userLength}</Typography></Typography>
          </Link>

          <Link className="btn btn-secondary" style={{ marginTop: "1rem" }}>
            {/* <p>Number of Users: {userCount}</p> */}
            <Typography variant="h5">Total Registered Users :<br /> <br /><Typography variant="h4">{teamLength}</Typography></Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
