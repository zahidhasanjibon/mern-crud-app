import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [value, setvalue] = useState(0);
  return (
    <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
      <Toolbar>
        <Typography>
          <GroupAddIcon />
        </Typography>
        <Tabs
          sx={{ ml: "auto" }}
          indicatorColor="secondary"
          textColor="inherit"
          value={value}
          onChange={(e, val) => setvalue(val)}
        >
          <Tab LinkComponent={NavLink} to="/" label="home" />
          <Tab LinkComponent={NavLink} to="/adduser" label="Add User" />
          <Tab LinkComponent={NavLink} to="/users" label="Users" />
          <Tab LinkComponent={NavLink} to="/about" label="About" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
