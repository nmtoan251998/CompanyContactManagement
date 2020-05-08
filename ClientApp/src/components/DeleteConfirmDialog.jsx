import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@material-ui/core";
import useDeleteUser from "../hooks/useDeleteUser";

function DeleteConfirmDialog({ open, onClose, user, onCompleted }) {
  const [deleteUser, { isLoading, error }] = useDeleteUser();

  const handleDelete = async () => {
    const { data } = await deleteUser(user.id);
    if (data) {
      onClose();
      onCompleted();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Delete this user</DialogTitle>
      <DialogContent>
        <Typography>This action cannot be undo.</Typography>

        <Typography color="error">
          {error && "Something went wrong, try again later!"}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={isLoading}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleDelete}
          disabled={isLoading}
        >
          {isLoading ? "Deleting" : "Delete"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteConfirmDialog;
