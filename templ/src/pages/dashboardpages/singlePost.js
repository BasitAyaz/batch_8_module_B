import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Singlepost() {
  let params = useParams();

  const [model, setModel] = useState({});

  let getData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setModel({ ...res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Box>
        <Typography>Single Post</Typography>
        <Button onClick={getData} variant="contained">
          Get Single Post
        </Button>
        <Typography variant="h3">{model.title ?? ""}</Typography>
        <Typography className="d-block" variant="body">
          {model.body ?? ""}
        </Typography>
        <Typography className="d-block" variant="body">
          User Id : {model.userId ?? ""}
        </Typography>
      </Box>
    </>
  );
}
