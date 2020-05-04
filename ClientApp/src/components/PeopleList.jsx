import React from "react";
import useMyContacts from "../hooks/useMyContacts";
import {
  Box,
  CircularProgress,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";

function PeopleList() {
  const { data, error } = useMyContacts();

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
        <ListItem>
          <ListItemAvatar>
            <Avatar>{user.name[0]}</Avatar>
          </ListItemAvatar>
          <ListItemText primary={user.name} secondary={user.phone} />
        </ListItem>
      ))}
    </List>
  );
}

export default PeopleList;
