import React from "react";
// import { NavLink } from "react-router-dom";
// import Sidenav from "../components/Sidenav";
import Appbar from "../components/Appbar";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";


function ErrorPage() {

  return (
    <>
      {/* <Appbar /> */}
      <Box height={50} />
      <Box sx={{ display: "flex" }}>
        {/* <Sidenav /> */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Divider
            sx={{
              borderColor: "secondary.light",
            }}
          />

          <h1>404 Error</h1>
          <p>Page Not Found</p>
          {/* <NavLink to="/admin">Back To Home</NavLink> */}
        </Box>
      </Box>
    </>
  );
}

export default ErrorPage;
