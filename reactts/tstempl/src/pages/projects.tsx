import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BAButton from "../components/BAButton";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Get, apiHandle } from "../config/apimethods";

export default function Projects() {
  const [listData, setListData] = useState<any>([]);

  const navigate = useNavigate();

  const deletePost = (id: any) => {
    apiHandle
      .delete(`posts/${id}`)
      .then(() => {
        console.log("Post Deleted Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let getData = () => {
    Get("posts")
      .then((res) => {
        setListData([...res.data]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <h1>Projects</h1>
        <button
          onClick={() => {
            navigate("/add");
          }}
        >
          Add
        </button>
        {listData &&
          Array.isArray(listData) &&
          listData.length > 0 &&
          listData.map((x: any, i: any) => (
            <div className="p-2 m-2 border border-dark rounded" key={i}>
              <h2>{x.title}</h2>
              <p>{x.body}</p>
              <p>{x.userId}</p>
              <IconButton
                onClick={() => deletePost(x.id)}
                color="error"
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  navigate(`/add/${x.id}`);
                }}
                color="primary"
                aria-label="delete"
              >
                <EditIcon />
              </IconButton>
            </div>
          ))}
      </div>
    </>
  );
}
