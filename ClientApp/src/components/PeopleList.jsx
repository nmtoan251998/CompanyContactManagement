import React from "react";
import {
  Box,
  CircularProgress,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";

function PeopleList({ data, error }) {

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
        <ListItem key={user.id}>
          <ListItemAvatar>
            <Avatar>{user.name[0]}</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <>
                <strong>{user.name}</strong>
                {" - "}
                {user.department && user.department.name}
              </>
            }
            secondary={
              `${user.age} ages, @${user.address}`
            }
          />
          <ListItemSecondaryAction>
            <IconButton href={`tel:${user.phone}`}>
              <CallIcon />
            </IconButton>
            <IconButton href={`mailto:${user.email}`}>
              <EmailIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}

export default PeopleList;
