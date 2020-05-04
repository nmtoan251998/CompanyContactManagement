import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  Typography,
} from "@material-ui/core";
import useCreateUser from "../hooks/useCreateUser";

const formInitData = {
  name: "",
  email: "",
  age: "",
  phone: "",
  address: "",
  departmentId: "",
  pwd: "123456",
};

function UserDialog({ open, onClose }) {
  const [formData, setFormData] = useState(formInitData);
  const [createUser, { error }] = useCreateUser();

  useEffect(() => {
    setFormData(formInitData);
  }, [open]);

  const handleChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await createUser(formData);
    if (data) {
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>User Editing</DialogTitle>
      <DialogContent dividers>
        <Grid
          component="form"
          id="userForm"
          container
          spacing={2}
          onSubmit={handleSubmit}
        >
          <Grid item xs={8}>
            <TextField
              label="Name"
              value={formData.name}
              onChange={handleChange("name")}
              fullWidth
              variant="outlined"
              size="small"
              required
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Age"
              value={formData.age}
              onChange={handleChange("age")}
              fullWidth
              variant="outlined"
              size="small"
              type="number"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Email"
              value={formData.email}
              onChange={handleChange("email")}
              fullWidth
              variant="outlined"
              size="small"
              type="email"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Phone"
              value={formData.phone}
              onChange={handleChange("phone")}
              fullWidth
              variant="outlined"
              size="small"
              type="tel"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              value={formData.address}
              onChange={handleChange("address")}
              fullWidth
              variant="outlined"
              size="small"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Department"
              value={formData.departmentId}
              onChange={handleChange("departmentId")}
              fullWidth
              variant="outlined"
              size="small"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Typography color="error">{error && error.title}</Typography>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="default">
          Close
        </Button>
        <Button
          type="submit"
          form="userForm"
          onClick={handleSubmit}
          color="primary"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default UserDialog;
