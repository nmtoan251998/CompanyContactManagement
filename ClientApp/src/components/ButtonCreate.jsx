import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import UserDialog from "./UserDialog";

function ButtonCreate({ refresh }) {
  const [showUserDialog, setShowUserDialog] = useState(false);
  return (
    <>
      <IconButton color="inherit" onClick={() => setShowUserDialog(true)}>
        <AddIcon />
      </IconButton>
      {showUserDialog && (
        <UserDialog
          open={showUserDialog}
          onClose={() => setShowUserDialog(false)}
          onCompleted={refresh}
        />
      )}
    </>
  );
}

export default ButtonCreate;
