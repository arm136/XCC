import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material";


const drawerWidth = 240;
const navItems = ["Events", "Resources", "Playground", "Discussions"];
const settings = ['Profile', 'Account', 'Feedback', 'Logout'];




export const UserNav = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  // function for the dark theme of navbar
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2"
      }
    }
  });


  // function to open and close user profile menu
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // creating useState function to print selected item on the top of mobile appbar
  const [selectedItem, setSelectedItem] = React.useState(["Home"]);

  const handleListItemClick = (event, item) => {
    setSelectedItem(navItems.indexOf(item) + 1);
  }




  // function for using drawer menu
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h4"
        sx={{ p: 0.9, backgroundColor: "#454545" }}
      >
        <span className="x">X</span>
        <span className="cc">CC</span>
      </Typography>


      <Divider />
      <List sx={{ textAlign: "center" }}>
        {navItems.map((item, indexOf) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "left" }}
              onClick={(event) => handleListItemClick(event, item)}  >

              <Link style={{ textDecoration: "none", color: "black" }}
                to={`/${item}`}>
                {item}
              </Link>

            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "left" }}>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <AppBar component="nav">
          <Toolbar >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h4"
              component="div"
              sx={{
                flexGrow: 0.5,
                display: { xs: "none", sm: "block" }
              }}
            >
              <span className="x">X</span>
              <span className="cc">CC</span>
            </Typography>
            <Box
              style={{ width: "100%" }}
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                  textAlign: "center"
                }
              }}>



              {/* ************************************************************************************************ */}

              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#fff" }}>
                  <Link style={{ textDecoration: "none", color: "white" }}
                    to={`/${item}`}>
                    {item}
                  </Link>
                </Button>
              ))}
              {/* ************************************************************************************************ */}

            </Box>
            <Box sx={{
              display: { sm: "none", xs: "block", textAlign: "center" }
            }}
              style={{ width: "100%" }}>
              <Typography variant="h6">
                {selectedItem > 0 ? navItems[selectedItem - 1] : ""}
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Profile settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

          </Toolbar>
        </AppBar>
      </ThemeProvider>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />

        <Typography>

        </Typography>
      </Box>
    </Box>
  );
}

UserNav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

