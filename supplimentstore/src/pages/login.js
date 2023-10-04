import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [model, setModel] = useState({});
  const navigate = useNavigate();

  const fillModel = (key, val) => {
    model[key] = val;
    setModel({ ...model });
  };

  const loginUser = () => {
    console.log(model);
    navigate(`/profile/${model.email}`, { state: model });
  };

  return (
    <>
      <Box
        sx={{ height: "100vh" }}
        className="d-flex bg-secondary justify-content-center align-items-center"
      >
        <Paper className="p-3">
          <Box className="p-3">
            <Typography className="text-center" variant="h5">
              Login
            </Typography>
          </Box>
          <Box className="p-3">
            <TextField
              onChange={(e) => fillModel("email", e.target.value)}
              variant="standard"
              type="email"
              label="Email"
            />
          </Box>
          <Box className="p-3">
            <TextField
              onChange={(e) => fillModel("password", e.target.value)}
              variant="standard"
              type="password"
              label="Password"
            />
          </Box>
          <Box className="p-3">
            <Button onClick={loginUser} fullWidth={true} variant="contained">
              Login
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
