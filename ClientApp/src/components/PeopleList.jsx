import React, { useContext } from "react";
import { Box, CircularProgress, Typography, List } from "@material-ui/core";
import UserItem from "./UserItem";
import { AppContext } from "../App";

function PeopleList({ data, error, refresh }) {
  const { user: currUser } = useContext(AppContext);

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

  return (
    <List>
      {data
        .filter((user) => user.id !== currUser.id)
        .map((user) => (
          <UserItem key={user.id} user={user} refresh={refresh} />
        ))}
    </List>
  );
}

export default PeopleList;
