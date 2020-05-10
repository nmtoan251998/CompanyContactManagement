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
  CircularProgress,
  MenuItem,
} from "@material-ui/core";
import useCreateUser from "../hooks/useCreateUser";
import useUpdateUser from "../hooks/useUpdateUser";
import useDepartments from "../hooks/useDepartments";

const formInitData = {
  name: "",
  email: "",
  age: "",
  phone: "",
  address: "",
  departmentId: "",
  pwd: "123456",
};

function UserDialog({ open, onClose, onCompleted, userData }) {
  const [formData, setFormData] = useState(userData || formInitData);
  const { data: departments } = useDepartments();
  const [
    createUser,
    { error: createError, isLoading: creating },
  ] = useCreateUser();
  const [
    updateUser,
    { error: updateError, isLoading: updating },
  ] = useUpdateUser();

  const error = updateError || createError;
  const isLoading = updating || creating;

  useEffect(() => {
    setFormData(userData || formInitData);
  }, [open, userData, setFormData]);

  const handleChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = userData
      ? await updateUser(formData)
      : await createUser(formData);
    if (data) {
      onCompleted(formData);
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
              select
            >
              <MenuItem value="" disabled>
                Choose a department
              </MenuItem>
              {departments &&
                departments.map((d) => (
                  <MenuItem key={d.id} value={d.id}>
                    {`${d.name} (${d.company.name})`}
                  </MenuItem>
                ))}
            </TextField>
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
          disabled={isLoading}
        >
          {isLoading ? <CircularProgress size={24} /> : "Save"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default UserDialog;
