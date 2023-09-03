import { AppBar, Badge, Box, IconButton, Menu, MenuItem, /*MenuItem,*/ Toolbar/*, Typography, Menu*/ } from '@mui/material'
import {Search, More, NotificationsOutlined, GridView, CropFree, SettingsOutlined} from '@mui/icons-material'
// import MenuIcon from '@mui/icons-material/Menu'
import React, { FC, useState } from 'react'
import { LogoBox, LogoImg } from './navbarStyle'
import { Link } from 'react-router-dom'


const Navbar:FC = () => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu anchorEl={anchorEl} anchorOrigin={{vertical: 'top', horizontal: 'right'}} id={menuId} keepMounted transformOrigin={{vertical: 'top', horizontal: 'right'}} open={isMenuOpen} onClose={handleMenuClose} className='menu1' sx={{
      '& .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiMenu-paper.MuiPopover-paper.MuiMenu-paper.css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper': {minHeight:'100vh'}
    }}>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
  

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      className='menu2'
      anchorEl={mobileMoreAnchorEl} sx={{ display: { md: 'none' },  '& .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiMenu-paper.MuiPopover-paper.MuiMenu-paper.css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper': {top:'0 !important',right:'0',minHeight:'100vh', bottom:'0', left:'60% !important', bgcolor:'rgb(12 24 49 / 90%)', color: '#fff'} }}
      anchorOrigin={{vertical: 'top', horizontal: 'right'}} id={mobileMenuId} keepMounted transformOrigin={{vertical: 'top', horizontal: 'right'}} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
      <MenuItem onClick={handleMenuClose}>
        <IconButton size="large" color="inherit"><Search /></IconButton>
        <p>Search</p>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <IconButton size="large" color="inherit"><GridView /></IconButton>
        <p>Grid View</p>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <IconButton size="large" color="inherit"><CropFree /></IconButton>
        <p>Zoom</p>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <IconButton size="large" color="inherit">
          <Badge badgeContent={17} color="error"><NotificationsOutlined /></Badge>
        </IconButton>
        <p>Notification</p>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <IconButton size="large" color="inherit"><SettingsOutlined /></IconButton>
        <p>Settings</p>
      </MenuItem>
    </Menu>
  );
  

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" sx={{backgroundColor:'bg.main', backgroundImage: 'none', boxShadow: 'none'}}>
        <Toolbar>
          <Link to='/'>
          <LogoBox sx={{ml: '0'}}>
            <LogoImg src='/imgs/logo.png' alt='Mando logo' />
          </LogoBox>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" color="inherit"><Search /></IconButton>
            <IconButton size="large" color="inherit"><GridView /></IconButton>
            <IconButton size="large" color="inherit"><CropFree /></IconButton>
            <IconButton size="large" color="inherit">
              <Badge badgeContent={17} color="error"><NotificationsOutlined /></Badge>
            </IconButton>
              {/* <LogoBox sx={{width: '26px', height: '26px', display: 'flex', alignItems: 'center'}} >
                <LogoImg src='/imgs/user.svg' alt='user image' sx={{borderRadius: '50%', border: '1px solid #fff'}} />
              </LogoBox> */}
            <IconButton size="large" color="inherit"><SettingsOutlined /></IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" color="inherit" onClick={handleMobileMenuOpen}><More /></IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  )
}

export default Navbar