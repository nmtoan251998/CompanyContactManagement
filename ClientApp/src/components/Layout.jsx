import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  IconButton,
  Grid,
  Box,
  Paper,
} from "@material-ui/core";
import ExitIcon from "@material-ui/icons/ExitToApp";
import { useHistory } from "react-router-dom";
import Profile from "./Profile";
import { AppContext } from "../App";

function Layout({ children }) {
  const history = useHistory();
  const { setUser } = useContext(AppContext);

  const handleLogout = () => {
    localStorage.clear("asdfoiwehfo");
    setUser(null);
    history.push("/login");
  }

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Company People
          </Typography>
          <IconButton color="inherit" onClick={handleLogout}>
            <ExitIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box component={Container} p={2} fixed>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4}>
            <Box component={Paper} overflow="hidden" height="72vh">
              <Profile/>
            </Box>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Box component={Paper} overflow="hidden" height="72vh">
              {children}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Layout;
