import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


export default function Nav() {
  const nav= useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = async () =>{
    alert("Logged out");
    await localStorage.removeItem("UserToken");
    localStorage.removeItem("loggedUser");
    setTimeout(()=>{
    nav("/log")
  },1000);
  }

  return (
    <div>
       <AppBar position="static" style={{background: "#343434"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Diversity1Icon sx={{ display: { xs: 'none', md: 'flex' ,background:"darkblue"}, mr: 1, }} /> 
        
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              color:"darkblue"
            }}
          >
            MDS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Link to="/" ><Button className='profile'
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                HOME
              </Button></Link>
               
            
             <Link to="/Reg" ><Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                COLLEGE
              </Button></Link>
               
             {/* <Link to="/event" ><Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                EVENTS
              </Button></Link> */}

              <Link to="/find" ><Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                EVENTFINDER
              </Button></Link>
            
              {/* <Link to="/admi"><Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                ADMIN
              </Button></Link> */}
              <Link to="/about"><Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                ABOUT
              </Button></Link>
          
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 ,marginRight:"20px"}}>
                <Avatar alt="Remy Sharp" src="https://cdn-icons-png.flaticon.com/512/4345/4345672.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
             
             <MenuItem  onClick={handleCloseUserMenu} ><Link to="/log" className='profile' >
               Login</Link>
               </MenuItem>
               <MenuItem  onClick={handleCloseUserMenu} ><Link to="/Reg" className='profile' >
                 Registration</Link>
                 </MenuItem>
               <MenuItem  onClick={handleCloseUserMenu} ><Link to="/admi" className='profile' >
               Admin</Link>
               </MenuItem>
            </Menu>
            
            <LogoutIcon className='logout'style={{color:"black",marginLeft:"20px"}}></LogoutIcon>
            <Button onClick={()=>handleLogout()} style={{color:"white",marginRight:"20px"}}>Logout</Button>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  )
}
