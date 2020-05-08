import React, { useContext } from "react";
import useMyProfile from "../hooks/useMyProfile";
import { CircularProgress, Box, Typography, Avatar } from "@material-ui/core";
import { AppContext } from "../App";

function Profile() {
  const { user } = useContext(AppContext);

  if (!user) {
    return (
      <Box
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Box bgcolor="darkblue" color="white" p={2}>
        <Typography variant="h5">You</Typography>
      </Box>
      <Avatar style={{ height: 92, width: 92, margin: "18px auto" }}>
        {user.name[0]}
      </Avatar>
      <Box pl={2} pr={2}>
        <Typography variant="h6" align="center">
          {user.name}
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          {user.department && user.department.name}
        </Typography>
        <Box mt={1} mb={2} borderBottom="solid 1px #eee" />
        <Typography>
          <Typography component="span" color="textSecondary">
            {"Age: "}
          </Typography>
          {user.age}
        </Typography>
        <Typography>
          <Typography component="span" color="textSecondary">
            {"Phone: "}
          </Typography>
          {user.phone}
        </Typography>
        <Typography>
          <Typography component="span" color="textSecondary">
            {"Email: "}
          </Typography>
          {user.email}
        </Typography>
        <Typography>
          <Typography component="span" color="textSecondary">
            {"Address: "}
          </Typography>
          {user.address}
        </Typography>
      </Box>
    </>
  );
}

export default Profile;
