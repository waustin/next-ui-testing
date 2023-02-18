import React from 'react'
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

function AppBar(props) {
  return (
    <MuiAppBar postion="static" {...props}>
      <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Dashboard Test 
          </Typography>  
      </Toolbar>
    </MuiAppBar>
  )
}

export default AppBar