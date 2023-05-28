import React from "react";
import Sidenav from "../components/Sidenav";
import Appbar from "../components/Appbar";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Divider, Typography } from "@mui/material";

function Leaderboard() {
  return (
    <>
      <Appbar />
      <Box height={50} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Leaderboard</h1>
          <Divider
            sx={{
              borderColor: "secondary.light",
            }}
          />
          <Link to="https://leaderboardhq.com/e667o3sm" target="blank"className="btn btn-success"
            style={{ marginTop: '1rem' }}
          >
            Add+
            
          </Link>
          
          <Link to="https://leaderboardhq.com/6zmkc03y" target="blank"className="btn btn-success"
            style={{ marginTop: '1rem', marginLeft: '4rem' }}
          >
            See Leaderboard
            
          </Link>

        </Box>
      </Box>
    </>
  );
}

export default Leaderboard;
