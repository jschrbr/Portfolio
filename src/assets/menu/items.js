import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BuildIcon from "@material-ui/icons/Build";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Find me on</ListSubheader>
    <ListItemLink href="https://github.com/jschrbr" target="_blank">
      <ListItemIcon>
        <GitHubIcon />
      </ListItemIcon>
      <ListItemText primary="GitHub" />
    </ListItemLink>

    <ListItemLink
      href="https://www.linkedin.com/in/techsmechs/"
      target="_blank"
    >
      <ListItemIcon>
        <LinkedInIcon />
      </ListItemIcon>
      <ListItemText primary="LinkedIn" />
    </ListItemLink>
    <ListItemLink href="mailto:schrbrr@gmail.com" target="_blank">
      <ListItemIcon>
        <EmailIcon />
      </ListItemIcon>
      <ListItemText primary="Email" />
    </ListItemLink>
  </div>
);
