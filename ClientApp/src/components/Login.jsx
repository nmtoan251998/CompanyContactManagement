import React from "react";
import Box from "@material-ui/core/Box";
import { Paper, Typography, TextField, Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <Box pt={12}>
      <Box m={"auto"} component={Paper} maxWidth={360} p={4} pt={6} pb={6}>
        <Typography color="primary" align="center">
          <PeopleIcon fontSize="large" />
        </Typography>
        <Typography variant="h5" color="primary" align="center">
          Company People
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          mt={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <TextField
            label="Email"
            margin="normal"
            variant="outlined"
            size="small"
            fullWidth
          />
          <TextField
            label="Password"
            margin="normal"
            variant="outlined"
            size="small"
            fullWidth
          />
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
