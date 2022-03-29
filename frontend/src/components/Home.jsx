import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button variant="contained" LinkComponent={NavLink} to="/users">
          <Typography variant="h3">View All Users</Typography>
        </Button>
      </Box>
    </div>
  );
}

export default Home;
