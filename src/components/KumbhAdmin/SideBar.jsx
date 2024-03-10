import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <Sidebar
      rootStyles={{
        backgroundColor: "#754C00",
        minHeight:"100vh",
        // height: "100vh",
        fontFamily: "Georgia, serif",
      }}
    >
      <Menu>
          <SubMenu label="About">
          <MenuItem component={<Link to="/createsection" />}>
            {" "}
            Create Section
          </MenuItem>
          <MenuItem component={<Link to="/editsection" />}>
            {" "}
            Edit or Delete Section
          </MenuItem>
          <MenuItem component={<Link to="/aboutcreatemetatags" />}>Create meta tags</MenuItem>
          <MenuItem component={<Link to="/abouteditmetatags" />}>Edit or Delete meta tags</MenuItem>
        </SubMenu>
        <SubMenu label="Packages">
          <MenuItem component={<Link to="/createpackage" />}>
            {" "}
            Create Packages
          </MenuItem>
          <MenuItem component={<Link to="/editpackage" />}>
            {" "}
            Edit or Delete package
          </MenuItem>
        </SubMenu>
      
      </Menu>
    </Sidebar>
  );
}
