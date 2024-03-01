import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <Sidebar
      rootStyles={{
        backgroundColor: "#754C00",
        height: "91vh",
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
        <MenuItem> Documentation </MenuItem>
        <MenuItem> Calendar </MenuItem>
      </Menu>
    </Sidebar>
  );
}
