import React from "react";
import { Box, CircularProgress, Typography, List } from "@material-ui/core";
import UserItem from "./UserItem";

function PeopleList({ data, error, refresh }) {
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

  const { users_list: users } = data;

  return (
    <List>
      {users.map((user) => (
        <UserItem key={user.id} user={user} refresh={refresh} />
      ))}
    </List>
  );
}

export default PeopleList;
