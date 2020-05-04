import React from "react";
import useMyProfile from "../hooks/useMyProfile";
import { CircularProgress, Box, Typography, Avatar } from "@material-ui/core";

function Profile() {
  const { data, error } = useMyProfile();

  if (!data && !error) {
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

  if (error) {
    return <Typography color="error">Error: {error.message}</Typography>;
  }

  const { user } = data;

  return (
    <Box mt={2} display="flex" alignItems="center" flexDirection="column">
      <Avatar style={{ height: 92, width: 92 }}>{user.name[0]}</Avatar>
      <Box mt={2} width="100%">
        <Typography variant="h6" align="center">
          {user.name}
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          {user.department.name}
        </Typography>
        <Box mt={1} mb={2} borderBottom="solid 1px #eee" />
        <Typography>
          <Typography component="span" color="textSecondary">
            {"DOB: "}
          </Typography>
          {new Date(user.dob * 1).toLocaleDateString()}
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
    </Box>
  );
}

export default Profile;
