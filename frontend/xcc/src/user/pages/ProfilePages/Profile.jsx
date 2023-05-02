import React from "react";
import { Box, Typography } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "../../component/Navbar";
import Sidenav from "../../component/Sidenav";
import Divider from '@mui/material/Divider';


const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (

    isAuthenticated && (
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
            Profile
          </Typography>
          <Divider />

          
          <Box sx={{borderColor: 'red' }}>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </Box>
    

        </Box>
      </Box>
    </>
    )
  );
};

export default Profile;