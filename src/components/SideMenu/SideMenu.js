import React from 'react'
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import Link from 'next/link';

import Drawer from "@mui/material/Drawer";
import CameraIcon from "@mui/icons-material/Camera";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VisibilityIcon from "@mui/icons-material/Visibility";
import HomeIcon from "@mui/icons-material/Home";

const drawerWidth = 200;
const mainMenuItems = [
  { text: "Home", url: "/", icon: <HomeIcon /> },
  { text: "Iris", url: "/iris", icon: <CameraIcon /> },
  { text: "Digital Vision", url: "/digital-vision", icon: <VisibilityIcon /> },
  { text: "Cockpit", url: "/cockpit", icon: <DashboardIcon /> },
  { text: "Settings", url: "/settings", icon: <SettingsIcon /> },
];

export default function SideMenu() {
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography variant="body2" noWrap component="div">
            <strong>Roots Platform</strong>
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          {mainMenuItems.map((link) => (
            <ListItem key={link.text} disablePadding>
              <ListItemButton>
                {link.icon && <ListItemIcon>{link.icon}</ListItemIcon>}
                <Link href={link.url}>{link.text}</Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
