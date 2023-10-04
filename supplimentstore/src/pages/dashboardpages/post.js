import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PostScreen() {
  const [listData, setListData] = useState([]);
  let getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setListData([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const navigate = useNavigate();
  let clickCard = (id) => {
    navigate(`/dashboard/singlePost/${id}`);
  };
  return (
    <>
      <Box>
        <Typography>Post</Typography>
        <Button onClick={getData} variant="contained">
          Get Post
        </Button>
        {listData.map((x, i) => (
          <Box
            onClick={() => clickCard(x.id)}
            key={i}
            style={{
              padding: 10,
              backgroundColor: "lightgrey",
              marginBottom: 10,
            }}
          >
            <Typography>{x.title}</Typography>
            <Typography>{x.body}</Typography>
            <Typography>{x.userId}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}
