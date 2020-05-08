import React, { useState } from "react";
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
import EditIcon from '@material-ui/icons/Edit';
import useDeleteUser from "../hooks/useDeleteUser";
import UserDialog from "./UserDialog";

function UserItem({ user, refresh }) {
  const [deleteUser, { isLoading: deleting }] = useDeleteUser();
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteUser = async (id) => {
    const { data } = await deleteUser(id);
    if (data) {
      refresh();
    }
  };

  return (
    <>
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
            onClick={() => setShowEdit(true)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => handleDeleteUser(user.id)}
            disabled={deleting}
          >
            {deleting ? <CircularProgress size={24} /> : <DeleteIcon />}
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <UserDialog
        open={showEdit}
        onClose={() => setShowEdit(false)}
        onCompleted={refresh}
        userData={user}
      />
    </>
  );
}

export default UserItem;
