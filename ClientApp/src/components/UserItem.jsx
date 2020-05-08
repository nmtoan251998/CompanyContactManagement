import React, { useState } from "react";
import {
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
import EditIcon from "@material-ui/icons/Edit";
import UserDialog from "./UserDialog";
import DeleteConfirmDialog from "./DeleteConfirmDialog";

function UserItem({ user, refresh }) {
  const [showDel, setShowDel] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

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
          <IconButton onClick={() => setShowEdit(true)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => setShowDel(true)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <UserDialog
        open={showEdit}
        onClose={() => setShowEdit(false)}
        onCompleted={refresh}
        userData={user}
      />
      <DeleteConfirmDialog
        open={showDel}
        onClose={() => setShowDel(false)}
        onCompleted={refresh}
        user={user}
      />
    </>
  );
}

export default UserItem;
