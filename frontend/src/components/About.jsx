import { Box, Typography } from "@mui/material";
import React from "react";

function About() {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h2">This is a CRUD Application</Typography>
        <Typography variant="h4">by React Nodejs Mongodb</Typography>
      </Box>
    </div>
  );
}

export default About;
