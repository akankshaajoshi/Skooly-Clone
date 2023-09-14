import React, {useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';

const index = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const closeMenu = () => {
      setIsMenuOpen(false);
    };
  return (
    <div>
              <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleMenu}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <h1>My Website</h1>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isMenuOpen} onClose={closeMenu}>
        <List>
          <ListItem button onClick={closeMenu}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={closeMenu}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={closeMenu}>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem button onClick={closeMenu}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>        
    </div>
  )
}

export default index

