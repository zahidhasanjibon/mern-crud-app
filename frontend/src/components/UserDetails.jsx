import SendIcon from "@mui/icons-material/Send";
import {
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const URL = "http://localhost:5000/users";

function UserDetails() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    age: "",
    number: "",
    image: "",
    gender: "male",
  });

  const id = useParams().id;

  useEffect(() => {
    const fetchData = async () => {
      return await axios.get(`${URL}/${id}`).then((res) => res.data);
    };
    fetchData().then((data) => setInputs(data.user));
  }, [id]);
  const { name, age, number, image, gender } = inputs;

  const handleInput = (e) => {
    const targetInp = e.target.name;
    const targetVal = e.target.value;

    setInputs((prevState) => {
      return { ...prevState, [targetInp]: targetVal };
    });
  };

  const updateUser = async () => {
    return await axios
      .put(`${URL}/${id}`, {
        name,
        age,
        number,
        image,
        gender,
      })
      .then((res) => res.data);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    updateUser().then((data) => {
      history("/users");
    });
  };

  return (
    <div>
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
          <FormLabel>Name</FormLabel>
          <TextField
            onChange={(e) => handleInput(e)}
            value={name}
            name="name"
            id="outlined-basic"
            variant="outlined"
          />
          <br></br>
          <FormLabel>Age</FormLabel>
          <TextField
            onChange={(e) => handleInput(e)}
            value={age}
            name="age"
            type="number"
            id="outlined-basic"
            variant="outlined"
          />

          <br></br>
          <FormLabel>Number</FormLabel>
          <TextField
            onChange={(e) => handleInput(e)}
            value={number}
            name="number"
            type="number"
            id="outlined-basic"
            variant="outlined"
          />
          <br></br>
          <FormLabel>Image</FormLabel>
          <TextField
            onChange={(e) => handleInput(e)}
            value={image}
            name="image"
            id="outlined-basic"
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
            Update User
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default UserDetails;
