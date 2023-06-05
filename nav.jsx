import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {Link} from 'react-router-dom';



export default function Home() {
  return (
    <>
    
      <AppBar position="absolute" color=''>
        <Toolbar variant="contained">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 100 }}>
           FORM POSTING AND GETTING 
          </IconButton>
          <Typography variant="h6" color="inherit" component="div" sx={{mr:20}} >
              <Link to="/">HOME</Link> 
            
          </Typography>
          <Typography variant="h6" color="inherit" component="div" >
            <Link to="/Data">DATA</Link> 
            
           
          </Typography>
        </Toolbar>
      </AppBar>
    
   

    </>
  );
}