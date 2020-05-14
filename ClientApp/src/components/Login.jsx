import React, { useState, useContext, useEffect } from "react";
import Box from "@material-ui/core/Box";
import { Paper, Typography, TextField, Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import { AppContext } from "../App";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [login, { isLoading }] = useLogin();
  const [isError, setIsError] = useState(false);
  const { user, setUser } = useContext(AppContext);

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsError(false);
    const { error, data } = await login({ email, pwd });
    if (error) {
      setIsError(true);
    } else {
      setUser(data);
      history.push("/");
    }
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
          <TextField
            label="Password"
            margin="normal"
            variant="outlined"
            size="small"
            fullWidth
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            type="password"
            required
          />
          <Typography color="error">
            {isError && "Wrong email or password!"}
          </Typography>
          <Box mt={2}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isLoading}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
