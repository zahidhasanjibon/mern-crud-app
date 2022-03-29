import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import axios from "axios";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
const URL = "http://localhost:5000/users";

function User(props) {
  const { _id, name, age, number, image, gender } = props.details;
  const history = useNavigate();
  const deleteHandler = async () => {
    await axios
      .delete(`${URL}/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/users"));
  };

  return (
    <>
      <div className="user-card">
        <img className="img" src={image} alt="man" />
        <div className="desc">
          <p>Name : {name}</p>
          <p>Age : {age}</p>
          <p>Number : {number}</p>
          <p>Gender : {gender}</p>
        </div>
        <div>
          <Button
            LinkComponent={NavLink}
            to={`/users/${_id}`}
            className="update-btn"
            size="small"
            variant="outlined"
            endIcon={<SendIcon />}
          >
            Update
          </Button>
          <Button
            onClick={() => deleteHandler()}
            className="delete-btn"
            size="small"
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </div>
      </div>
    </>
  );
}

export default User;
