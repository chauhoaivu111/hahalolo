import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  MenuItem,
  Typography,
  Menu,
  MenuList,
  Popper,
  TextField,
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
 

  Box,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

import ListItemText from "@mui/material/ListItemText";
import G from "../components/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import SearchIcon from "@mui/icons-material/Search";
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import CategoryIcon from '@mui/icons-material/Category';
import AcUnitIcon from '@mui/icons-material/AcUnit';

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Instagram from "@mui/icons-material/Instagram";
import YouTube from "@mui/icons-material/YouTube";
import Twitter from "@mui/icons-material/Twitter";



const Header = () => {

  const [open1, setOpen1] = React.useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  
  const [open2, setOpen2] = React.useState(false);

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  
  const [open3, setOpen3] = React.useState(false);

  const handleClick3 = () => {
    setOpen3(!open3);
  };

  
  const [open4, setOpen4] = React.useState(false);

  const handleClick4 = () => {
    setOpen4(!open4);
  };


    
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;






  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);


  const handleClose = () => {
    setAnchorEl(null);
  };

  // show toolbar for desktop______________________________________________________________________________________________________
  const displayDesktop = () => {
    return (
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {femmecubatorLogo}

        {/* menuButton */}
        <div style={{ marginLeft: "-200px" }}>{getMenuButtons()}</div>
        {femmecubatorSigin}
      </Toolbar>
    );
  };

  // show toolbar for mobile____________________________________________________________________________________________________________
  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}

      >
     

        <div>{femmecubatorLogo}</div>

        {/* menuButton */}

        <div style={{ display: "flex" }} >
          
          {SiginMobile}
         
          
        
          <MenuIcon  {...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }} sx={{ color: "black" ,fontSize:"30px" ,
            
          
            }} />
        </div>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
          PaperProps={{
            sx: { width: "80%" },
          }}
        >
          <div style={{ padding: "20px 30px" }}>{getDrawerChoices()}</div>
        </Drawer>
      </Toolbar>
    );
  };

  const femmecubatorLogo = (
    <Typography
      variant="h6"
      component="h1"
      sx={{
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#629CF4",
        textAlign: "left",
        fontSize: "30px",
        "@media (max-width: 1100px)": {
              marginRight:"90px"
            },
      }}
      className="logohahalolo"
    >

      Hahalolo
    </Typography>
  );

  const femmecubatorSigin = (
    <div style={{ display: "flex" }}>



          <Popper
             id={id} open={open} anchorEl={anchorEl} 
          >
            <TextField
            sx={{marginTop:"30px",marginRight:"50px"}}
              //  fullWidth
              margin="normal"
              variant="outlined"
              placeholder="Type and press enter"
              InputProps={{
                style: {
                  borderRadius: 50,
                  paddingLeft: "50px",
                  fontSize: 15,
                  width: "400px",
                  height:"50px"
                },

                endAdornment: (
                  <IconButton>
                    < SearchOutlinedIcon />
                  </IconButton>
                ),
              }}
            />
          </Popper>
       
      
      <IconButton sx={{marginRight:"20px"}}>
        {" "}
        <SearchIcon aria-describedby={id} type="button" onClick={handleClick} sx={{fontSize:"25px"}} />
      </IconButton>
      

  
      <Button sx={{backgroundColor:"blue",height:"35px"}} >
        <Link to ="/login">
        <Typography
          variant="h6"
          component="h1"
          sx={{
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            color: "white",
            textAlign: "left",
            textTransform: "capitalize",
          }}
          className="buttonSigin"
        >
          sigin 
        </Typography>
        </Link>
      </Button>
     
      
    </div>
  );

  const SiginMobile = (
    <div style={{ display: "flex" }}>
      <Button sx={{backgroundColor:"blue",marginRight:"10px",height:"30px"}}>
        <Typography
          variant="h6"
          component="h1"
          sx={{
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 500,
            color: "white",
            textAlign: "left",
          }}
          className="buttonSigin"
        >
          Sigin
        </Typography>
      </Button>
    </div>
  );

  const getMenuButtons = () => {
    return (
      <div style={{ display: "flex" }} className="frame_menu">
        <MenuList className="menulist_frame">
          <IconButton
            sx={{ borderRadius: "10px", height: "40px", marginLeft: "40px" }}
          >
            <p style={{ color: "black" }}>
              {" "}
              Categories <KeyboardArrowDownIcon
                sx={{ paddingTop: "5px" }}
              />{" "}
            </p>
          </IconButton>

          <ListItemText className="itemtext" sx={{ color: "black" }}>
            <MenuList className="frame_list">
              <G col={4}>
                <div
                  style={{
                    justifyContent: "center",
                    justifyItems: "center",
                    justifySelf: "center",
                  }}
                >
                  <img
                    style={{
                      height: "50px",
                      width: "70px",
                      borderRadius: "10px",
                      justifyContent: "center",
                      justifyItems: "center",
                      justifySelf: "center",
                    }}
                    alt="new"
                    src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
                  />
                  <p
                    style={{
                      justifyContent: "center",
                      justifyItems: "center",
                      justifySelf: "center",
                      textAlign: "center",
                      fontWeight: "900",
                    }}
                  >
                    coffee
                  </p>
                </div>
                <div
                  style={{
                    justifyContent: "center",
                    justifyItems: "center",
                    justifySelf: "center",
                  }}
                >
                  <img
                    style={{
                      height: "50px",
                      width: "70px",
                      borderRadius: "10px",
                      justifyContent: "center",
                      justifyItems: "center",
                      justifySelf: "center",
                    }}
                    alt="new"
                    src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
                  />
                  <p
                    style={{
                      justifyContent: "center",
                      justifyItems: "center",
                      justifySelf: "center",
                      textAlign: "center",
                      fontWeight: "900",
                    }}
                  >
                    Speaker
                  </p>
                </div>
                <div
                  style={{
                    justifyContent: "center",
                    justifyItems: "center",
                    justifySelf: "center",
                  }}
                >
                  <img
                    style={{
                      height: "50px",
                      width: "70px",
                      borderRadius: "10px",
                      justifyContent: "center",
                      justifyItems: "center",
                      justifySelf: "center",
                    }}
                    alt="new"
                    src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6"
                  />
                  <p
                    style={{
                      justifyContent: "center",
                      justifyItems: "center",
                      justifySelf: "center",
                      textAlign: "center",
                      fontWeight: "900",
                    }}
                  >
                    Basketball
                  </p>
                </div>
                <div
                  style={{
                    justifyContent: "center",
                    justifyItems: "center",
                    justifySelf: "center",
                  }}
                >
                  <img
                    style={{
                      height: "50px",
                      width: "70px",
                      borderRadius: "10px",
                      justifyContent: "center",
                      justifyItems: "center",
                      justifySelf: "center",
                    }}
                    alt="new"
                    src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1"
                  />
                  <p
                    style={{
                      justifyContent: "center",
                      justifyItems: "center",
                      justifySelf: "center",
                      textAlign: "center",
                      fontWeight: "900",
                    }}
                  >
                    Sea Star
                  </p>
                </div>

                <IconButton
                  className="showcolor"
                  sx={{ borderRadius: "10px", height: "40px", width: "100px" }}
                >
                  {" "}
                  <ListItemText
                    className="showcolor"
                    sx={{ cursor: "pointer" }}
                  >
                    chauhoaivu
                  </ListItemText>
                </IconButton>
                <IconButton
                  className="showcolor"
                  sx={{ borderRadius: "10px", height: "40px", width: "100px" }}
                >
                  {" "}
                  <ListItemText
                    className="showcolor"
                    sx={{ cursor: "pointer" }}
                  >
                    chauhoaivu
                  </ListItemText>
                </IconButton>
                <IconButton
                  className="showcolor"
                  sx={{ borderRadius: "10px", height: "40px", width: "100px" }}
                >
                  {" "}
                  <ListItemText
                    className="showcolor"
                    sx={{ cursor: "pointer" }}
                  >
                    chauhoaivu
                  </ListItemText>
                </IconButton>
                <IconButton
                  className="showcolor"
                  sx={{ borderRadius: "10px", height: "40px", width: "100px" }}
                >
                  {" "}
                  <ListItemText
                    className="showcolor"
                    sx={{ cursor: "pointer" }}
                  >
                    chauhoaivu
                  </ListItemText>
                </IconButton>

                <IconButton
                  className="showcolor"
                  sx={{ borderRadius: "10px", height: "40px", width: "100px" }}
                >
                  {" "}
                  <ListItemText
                    className="showcolor"
                    sx={{ cursor: "pointer" }}
                  >
                    chauhoaivu
                  </ListItemText>
                </IconButton>

                <IconButton
                  className="showcolor"
                  sx={{ borderRadius: "10px", height: "40px", width: "100px" }}
                >
                  {" "}
                  <ListItemText
                    className="showcolor"
                    sx={{ cursor: "pointer" }}
                  >
                    chauhoaivu
                  </ListItemText>
                </IconButton>
                <IconButton
                  className="showcolor"
                  sx={{ borderRadius: "10px", height: "40px", width: "100px" }}
                >
                  {" "}
                  <ListItemText
                    className="showcolor"
                    sx={{ cursor: "pointer" }}
                  >
                    chauhoaivu
                  </ListItemText>
                </IconButton>
                <IconButton
                  className="showcolor"
                  sx={{ borderRadius: "10px", height: "40px", width: "100px" }}
                >
                  {" "}
                  <ListItemText
                    className="showcolor"
                    sx={{ cursor: "pointer" }}
                  >
                    chauhoaivu
                  </ListItemText>
                </IconButton>
                <IconButton
                  className="showcolor"
                  sx={{ borderRadius: "10px", height: "40px", width: "100px" }}
                >
                  {" "}
                  <ListItemText
                    className="showcolor"
                    sx={{ cursor: "pointer" }}
                  >
                    chauhoaivu
                  </ListItemText>
                </IconButton>
                <IconButton
                  className="showcolor"
                  sx={{ borderRadius: "10px", height: "40px", width: "100px" }}
                >
                  {" "}
                  <ListItemText
                    className="showcolor"
                    sx={{ cursor: "pointer" }}
                  >
                    chauhoaivu
                  </ListItemText>
                </IconButton>
                <IconButton
                  className="showcolor"
                  sx={{ borderRadius: "10px", height: "40px", width: "100px" }}
                >
                  {" "}
                  <ListItemText
                    className="showcolor"
                    sx={{ cursor: "pointer" }}
                  >
                    chauhoaivu
                  </ListItemText>
                </IconButton>
                <IconButton
                  className="showcolor"
                  sx={{ borderRadius: "10px", height: "40px", width: "100px" }}
                >
                  {" "}
                  <ListItemText
                    className="showcolor"
                    sx={{ cursor: "pointer" }}
                  >
                    chauhoaivu
                  </ListItemText>
                </IconButton>
                <IconButton
                  className="showcolor"
                  sx={{ borderRadius: "10px", height: "40px", width: "100px" }}
                >
                  {" "}
                  <ListItemText
                    className="showcolor"
                    sx={{ cursor: "pointer" }}
                  >
                    chauhoaivu
                  </ListItemText>
                </IconButton>
                <IconButton
                  className="showcolor"
                  sx={{ borderRadius: "10px", height: "40px", width: "100px" }}
                >
                  {" "}
                  <ListItemText
                    className="showcolor"
                    sx={{ cursor: "pointer" }}
                  >
                    chauhoaivu
                  </ListItemText>
                </IconButton>
                <IconButton
                  className="showcolor"
                  sx={{ borderRadius: "10px", height: "40px", width: "100px" }}
                >
                  {" "}
                  <ListItemText
                    className="showcolor"
                    sx={{ cursor: "pointer" }}
                  >
                    chauhoaivu
                  </ListItemText>
                </IconButton>
                <IconButton
                  className="showcolor"
                  sx={{ borderRadius: "10px", height: "40px", width: "100px" }}
                >
                  {" "}
                  <ListItemText
                    className="showcolor"
                    sx={{ cursor: "pointer" }}
                  >
                    chauhoaivu
                  </ListItemText>
                </IconButton>
              </G>
            </MenuList>
          </ListItemText>
        </MenuList>

        <MenuList className="menulist_frame2">
          <IconButton
            sx={{ borderRadius: "10px", height: "40px", marginLeft: "40px" }}
          >
            <p style={{ color: "black" }}>
              Home <KeyboardArrowDownIcon sx={{ paddingTop: "5px" }} />
            </p>
          </IconButton>

          <ListItemText className="itemtext2" sx={{ color: "black" }}>
            <MenuList className="frame_list">
              <G col={2}>
                <ListItemText className="showcolor" sx={{ cursor: "pointer" }}>
                  chauhoaivu
                </ListItemText>
                <ListItemText className="showcolor" sx={{ cursor: "pointer" }}>
                  chauhoaivu
                </ListItemText>
                <ListItemText className="showcolor" sx={{ cursor: "pointer" }}>
                  chauhoaivu
                </ListItemText>
                <ListItemText className="showcolor" sx={{ cursor: "pointer" }}>
                  TranTrieuTuan
                </ListItemText>
              </G>
            </MenuList>
          </ListItemText>
        </MenuList>

        <MenuList className="menulist_frame3">
          <IconButton
            sx={{ borderRadius: "10px", height: "40px", marginLeft: "40px" }}
          >
            <p style={{ color: "black" }}>
              Templates <KeyboardArrowDownIcon sx={{ paddingTop: "5px" }} />{" "}
            </p>
          </IconButton>

          <ListItemText className="itemtext3" sx={{ color: "black" }}>
            <MenuList className="frame_list">
              <G col={2}>
                <div
                  style={{
                    justifyContent: "center",
                    justifyItems: "center",
                    justifySelf: "center",
                  }}
                >
                  <img
                    style={{
                      height: "50px",
                      width: "70px",
                      borderRadius: "10px",
                      justifyContent: "center",
                      justifyItems: "center",
                      justifySelf: "center",
                    }}
                    alt="new"
                    src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
                  />
                  <p
                    style={{
                      justifyContent: "center",
                      justifyItems: "center",
                      justifySelf: "center",
                      textAlign: "center",
                      fontWeight: "900",
                    }}
                  >
                    Burger
                  </p>
                </div>
                <div
                  style={{
                    justifyContent: "center",
                    justifyItems: "center",
                    justifySelf: "center",
                  }}
                >
                  <img
                    style={{
                      height: "50px",
                      width: "70px",
                      borderRadius: "10px",
                      justifyContent: "center",
                      justifyItems: "center",
                      justifySelf: "center",
                    }}
                    alt="new"
                    src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62"
                  />
                  <p
                    style={{
                      justifyContent: "center",
                      justifyItems: "center",
                      justifySelf: "center",
                      textAlign: "center",
                      fontWeight: "900",
                    }}
                  >
                    Honey
                  </p>
                </div>

                <IconButton
                  className="showcolor"
                  sx={{ borderRadius: "10px", height: "40px", width: "100px" }}
                >
                  {" "}
                  <ListItemText
                    className="showcolor"
                    sx={{ cursor: "pointer" }}
                  >
                    chauhoaivu
                  </ListItemText>
                </IconButton>
                <IconButton
                  className="showcolor"
                  sx={{ borderRadius: "10px", height: "40px", width: "100px" }}
                >
                  {" "}
                  <ListItemText
                    className="showcolor"
                    sx={{ cursor: "pointer" }}
                  >
                    chauhoaivu
                  </ListItemText>
                </IconButton>
                <IconButton
                  className="showcolor"
                  sx={{ borderRadius: "10px", height: "40px", width: "100px" }}
                >
                  {" "}
                  <ListItemText
                    className="showcolor"
                    sx={{ cursor: "pointer" }}
                  >
                    chauhoaivu
                  </ListItemText>
                </IconButton>
                <IconButton
                  className="showcolor"
                  sx={{ borderRadius: "10px", height: "40px", width: "100px" }}
                >
                  {" "}
                  <ListItemText
                    className="showcolor"
                    sx={{ cursor: "pointer" }}
                  >
                    chauhoaivu
                  </ListItemText>
                </IconButton>

                <IconButton
                  className="showcolor"
                  sx={{ borderRadius: "10px", height: "40px", width: "100px" }}
                >
                  {" "}
                  <ListItemText
                    className="showcolor"
                    sx={{ cursor: "pointer" }}
                  >
                    chauhoaivu
                  </ListItemText>
                </IconButton>

                <IconButton
                  className="showcolor"
                  sx={{ borderRadius: "10px", height: "40px", width: "100px" }}
                >
                  {" "}
                  <ListItemText
                    className="showcolor"
                    sx={{ cursor: "pointer" }}
                  >
                    chauhoaivu
                  </ListItemText>
                </IconButton>
                <IconButton
                  className="showcolor"
                  sx={{ borderRadius: "10px", height: "40px", width: "100px" }}
                >
                  {" "}
                  <ListItemText
                    className="showcolor"
                    sx={{ cursor: "pointer" }}
                  >
                    chauhoaivu
                  </ListItemText>
                </IconButton>
                <IconButton
                  className="showcolor"
                  sx={{ borderRadius: "10px", height: "40px", width: "100px" }}
                >
                  {" "}
                  <ListItemText
                    className="showcolor"
                    sx={{ cursor: "pointer" }}
                  >
                    chauhoaivu
                  </ListItemText>
                </IconButton>
              </G>
            </MenuList>
          </ListItemText>
        </MenuList>

        <MenuList className="menulist_frame4">
          <IconButton
            sx={{ borderRadius: "10px", height: "40px", marginLeft: "40px" }}
          >
            <p style={{ color: "black" }}>Add Post</p>
          </IconButton>
          {/* <KeyboardArrowDownIcon sx ={{paddingTop:"5px"}}/> */}

          {/* <ListItemText className="itemtext4" sx={{ color: "black" }}>
            <MenuList className="frame_list">
              <G col ={1}>

              <ListItemText  className="showcolor"  sx={{cursor:"pointer"}}>chauhoaivu</ListItemText>
              <ListItemText  className="showcolor" sx={{cursor:"pointer"}}>chauhoaivu</ListItemText>
              <ListItemText  className="showcolor" sx={{cursor:"pointer"}}>chauhoaivu</ListItemText>
              <ListItemText  className="showcolor" sx={{cursor:"pointer"}}>TranTrieuTuan</ListItemText>
            
              </G>

            
            </MenuList>
          </ListItemText> */}
        </MenuList>
      </div>
    );
  };

  // implement prop______________________________________________________________________________________________________________________
 
  
 
  const getDrawerChoices = () => {
    return (

      <div>

      <Typography sx ={{fontSize:"30px",fontWeight:"900",color:"#629CF4"}}>Hahalolo</Typography>

      <Typography sx={{color:"black",fontWeight:"600"}}>The most outstanding articles all on topics of life. Write your stores and share them.</Typography>

      <div style={{marginTop:"40px"}}>
        
        <IconButton sx={{backgroundColor:"#EFF2F8",borderRadius:"100%",marginLeft:"20px"}}> <FacebookIcon/></IconButton>
        <IconButton sx={{backgroundColor:"#EFF2F8",borderRadius:"100%",marginLeft:"20px"}}> <Instagram/></IconButton>
        <IconButton sx={{backgroundColor:"#EFF2F8",borderRadius:"100%",marginLeft:"20px"}}> <Twitter/></IconButton>
        <IconButton sx={{backgroundColor:"#EFF2F8",borderRadius:"100%",marginLeft:"20px"}}> <YouTube/></IconButton>

       
       
      </div>
      <hr style={{backgroundColor:"gray",marginLeft:"-32px",width:"331px" , marginTop:"30px"}}></hr>


      <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
     
    >
      
      <ListItemButton onClick={handleClick1}>
        <ListItemIcon>
          <HomeIcon/>
        </ListItemIcon>
        <ListItemText primary="Home" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Home Page HL" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Home Page SL" />
          </ListItemButton>
         
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick2}>
        <ListItemIcon>
          <ArticleIcon/>
        </ListItemIcon>
        <ListItemText primary="Article" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Seafood article" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Coffee article" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Esports article" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Basketball article" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick3}>
        <ListItemIcon>
          <CategoryIcon/>
        </ListItemIcon>
        <ListItemText primary="Categories" />
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Sport" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Music" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Food" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="News" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick4}>
        <ListItemIcon>
          <AcUnitIcon/>
        </ListItemIcon>
        <ListItemText primary="Templates" />
        {open4 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      
      <Collapse in={open4} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="React js" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Node js" />
          </ListItemButton>
          
        </List>
      </Collapse>

    </List>
    <hr style={{backgroundColor:"gray",marginLeft:"-32px",width:"331px" , marginTop:"20px",fontWeight:"10"}}></hr>


    <Button sx={{marginTop:"30px",backgroundColor:"#629CF4",color:"white"}} >create articles quickly</Button>

  

      </div>




    )
  };



  return (
    <header>
      <AppBar
        className="appname"
        // sx={{
        //   backgroundColor: "pink",
        // paddingRight: "60px",
        // paddingLeft: "118px",
        //   "@media (max-width: 900px)": {
        //     paddingLeft: 0,

        //   },
        //   "@media (max-width: 600px)": {
        //     paddingLeft: 0,
        //   },
        // }}
      >
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
      
    </header>
  );
};
export default Header;
