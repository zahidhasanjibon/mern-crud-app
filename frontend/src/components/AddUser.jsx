import SendIcon from "@mui/icons-material/Send";
import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddUser() {
  const notify = (msg) =>
    toast.warning(msg, {
      position: "bottom-center",
    });
  const history = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    age: "",
    number: "",
    image: "",
    gender: "male",
  });
  const { name, age, number, image, gender } = inputs;
  const handleInput = (e) => {
    const targetInp = e.target.name;
    const targetVal = e.target.value;

    setInputs((prevState) => {
      return { ...prevState, [targetInp]: targetVal };
    });
  };
  const sendData = async () => {
    const URL = "http://localhost:5000/users";

    fetch(URL, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        age,
        number,
        image,
        gender,
      }),
    })
      .then((res) => res.json())
      .then((data) => history("/"))
      .then(() => history("/users"));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!name || !age || !number || !gender || !image) {
      return notify("use added failed! all fields are required");
    }
    sendData().then(() => history("/users"));
  };

  return (
    <>
      <form onSubmit={(e) => submitHandler(e)}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          maxWidth={600}
          marginLeft="auto"
          marginRight="auto"
          marginTop={10}
        >
          <TextField
            onChange={(e) => handleInput(e)}
            value={name}
            name="name"
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <br></br>
          <TextField
            onChange={(e) => handleInput(e)}
            value={age}
            name="age"
            type="number"
            id="outlined-basic"
            label="Age"
            variant="outlined"
          />

          <br></br>
          <TextField
            onChange={(e) => handleInput(e)}
            value={number}
            name="number"
            type="number"
            id="outlined-basic"
            label="Number"
            variant="outlined"
          />
          <br></br>
          <TextField
            onChange={(e) => handleInput(e)}
            value={image}
            name="image"
            id="outlined-basic"
            label="Image"
            variant="outlined"
          />
          <br></br>

          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              name="gender"
              value="female"
              checked={gender === "female"}
              control={<Radio />}
              label="Female"
              onChange={(e) => handleInput(e)}
            />
            <FormControlLabel
              name="gender"
              value="male"
              checked={gender === "male"}
              control={<Radio />}
              label="Male"
              onChange={(e) => handleInput(e)}
            />
          </RadioGroup>
          <br></br>
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            Add User
          </Button>
        </Box>
      </form>
      <ToastContainer />
    </>
  );
}

export default AddUser;
