import React from "react";
import {
  CircularProgress,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import DeleteIcon from "@material-ui/icons/Delete";
import useDeleteUser from "../hooks/useDeleteUser";

function UserItem({ user, refresh }) {
  const [deleteUser, { isLoading: deleting }] = useDeleteUser();

  const handleDeleteUser = async (id) => {
    const { data } = await deleteUser(id);
    if (data) {
      refresh();
    }
  };

  return (
    <ListItem>
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
        secondary={`${user.age} ages, @${user.address}`}
      />
      <ListItemSecondaryAction>
        <IconButton href={`tel:${user.phone}`}>
          <CallIcon />
        </IconButton>
        <IconButton href={`mailto:${user.email}`}>
          <EmailIcon />
        </IconButton>
        <IconButton
          onClick={() => handleDeleteUser(user.id)}
          disabled={deleting}
        >
          {deleting ? <CircularProgress size={24} /> : <DeleteIcon />}
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default UserItem;
