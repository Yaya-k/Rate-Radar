import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@mui/material/ListItemIcon';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import Contact from "../components/contactComponent";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontWeight: 'bold',
      fontSize:"20px",
      fontFamily:"Poppins",
      textDecoration:"none",
      color:"black"
    },
    button: {
      flexGrow: 1,
      fontWeight: 500,
      fontSize:"15px",
      fontFamily:"Poppins",
      textDecoration:"none",
      color:"white",
      '&:hover': {textDecoration: 'underline',color: '#00BFA6'}
    },
  }));



export default function PrimarySearchAppBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
 
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';

  const renderMenu = (
    <Menu
      sx={{ mt: '50px', color:"black" }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Se connecter</MenuItem>
    </Menu>
  );


  
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
        <Typography variant="h6" sx={{ padding: 2, color:"#00BFA6", fontWeight:"bold"}} >
            <a style={{ color: '#00BFA6', textDecoration: 'none' }} href='/'> Yaya</a>
        </Typography>
        <Divider />
        <List>

            <a href="/a-propos">
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'left' }}>
                        <ListItemIcon>
                            <BusinessOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText sx={{ color: 'black' }} primary="A propos"/>
                    </ListItemButton>
                </ListItem>
            </a>

            <a href="/contact">
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'left' }}>
                        <ListItemIcon>
                            <LocalPhoneOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText sx={{ color: 'black' }} primary="Contact"/>
                    </ListItemButton>
                </ListItem>
            </a>

        </List>
  </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const classes = useStyles();

  return (
      <>
      <AppBar position='sticky' sx={{boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}>
        <Toolbar style={{background:"white", height:"90px", boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}>
          <IconButton
            size="large"
            edge="start"
            onClick={handleDrawerToggle}
            aria-label="open drawer"
            sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            <a className={classes.title} href='/'>Rate Radar</a>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          
              <Button className={classes.button} href='/a-propos' sx={{color:"black"}}>A propos</Button>
              <Button className={classes.button} href='/contact' sx={{color:"black"}}>Contact</Button>
            </Box>
        </Toolbar>
      </AppBar>
      <Contact/>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {renderMenu}
     </>
  );
}