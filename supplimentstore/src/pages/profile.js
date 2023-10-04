import { Box, TextField, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";

export default function Profile() {
  const params = useParams();
  const location = useLocation();
  console.log(location.state);
  return (
    <>
      <Box>
        <Typography variant="h1">Profile {params.id}</Typography>
        <Box className="p-2">
          <TextField type="number" variant="standard" label="Testing Input" />
        </Box>
      </Box>
    </>
  );
}
