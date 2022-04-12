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

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import imgpostbackgound from "../asset/post_img.jpg"
import Avatar from "@mui/material/Avatar";
import img1 from "../asset/avatar.jpg";
import { TextareaAutosize } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 10,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}

      <Typography className="title_dialogtitle_addpost"> {children}</Typography>
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};


const Header = () => {

  const [opendialog, setOpendialog] = React.useState(false);

  const handleClickOpendialog = () => {
    setOpendialog(true);
  };
  const handleClosedialog  = () => {
    setOpendialog(false);
  };

  const [imgpost, setImgpost] = useState({
    profileImg:
      imgpostbackgound,
  });

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImgpost({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const { profileImg } = imgpost;


  // ----------------------------------------------------------

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
        <div style={{ marginLeft: "-150px" }}>{getMenuButtons()}</div>
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
                  <Link to ="/Postdetail">
                  <ListItemText
                    className="showcolor"
                    sx={{ cursor: "pointer" }}
                  >
                    Cocktail
                  </ListItemText>
                  </Link>
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
                   Sound show
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
                    Baseball
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
                     Octopus
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
                    Milkshake
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
                    Music alpha
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
                    Golf Ball
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
                    Salmon
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
                     Champagne
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
                   Rockers
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
                   Tennis Ball
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
                    Shrimps
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
                    Liquor
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
                    Soul slayer
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
                    Wiffleball
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
                    Lobster
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
                  <Link to ="/">
                Home News
                </Link>
                </ListItemText>
                <ListItemText className="showcolor" sx={{ cursor: "pointer" }}>
                <Link to ="/">
                Home Demo 1
                </Link>
                </ListItemText>
                <ListItemText className="showcolor" sx={{ cursor: "pointer" }}>
                <Link to ="/">
                Update
                </Link>
                </ListItemText>
                <ListItemText className="showcolor" sx={{ cursor: "pointer" }}>
                <Link to ="/">
                  Home Demo 2
                  </Link>
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
                    Pizza
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
                    Soft Drink
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
                    Sandwich
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
                    Soda
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
                    Taco
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
                    Tea
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
                    Donuts
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
                    milktea
                  </ListItemText>
                </IconButton>
              </G>
            </MenuList>
          </ListItemText>
        </MenuList>

        <MenuList className="menulist_frame4">
      
          <IconButton
            sx={{ borderRadius: "10px", height: "40px", marginLeft: "40px" }}
            onClick={handleClickOpendialog}
          >
              
            <p style={{ color: "black" }}>Add Post</p>
         
          </IconButton>
        
       
         
        </MenuList>
        <BootstrapDialog
          PaperProps={{
            className: "frame_paper_dialog1",
          }}
          onClose={ handleClosedialog }
          aria-labelledby="customized-dialog-title"
          open={opendialog}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            className="title_dialogtitle_addpost"
            onClose={ handleClosedialog }
          >
            Create Post
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <div className="Top_element_post_dialog">
              <Avatar src={img1} />
              <Typography className="title_name_author_addpost">
                Cristiano Ronaldo
              </Typography>
            </div>

            <div className=" frame_textarea_addpost_and_img">
              <TextareaAutosize
                className="style_frame_textare_post"
                placeholder="What's on your mind ?"
              ></TextareaAutosize>

              <div className="frame_load_img">
                <div className="main_frame_post">
                  <input
                    type="file"
                    accept="image/*"
                    name="image-upload"
                    id="input"
                    onChange={imageHandler}
                  />

                  <label className="image_upload" htmlFor="input">
                    <img
                      src={profileImg}
                      alt=""
                      id="img"
                      className="img_user_input_post"
                    />
                  </label>

               
                </div>
              </div>
            </div>
          </DialogContent>

          <DialogActions className="frame_button_post_photo" >
            <Button className="button_post_photo"   onClick={ handleClosedialog } autoFocus>
             Add Post
            </Button>
          </DialogActions>
        </BootstrapDialog>
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


    <Button sx={{marginTop:"30px",
                
                backgroundColor:"#629CF4",
                color:"white"}} >
      
      create articles quickly</Button>

  

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


{/* <input
                type="file"
                accept="image/*"
                name="image-upload"
                id="input"
                onChange={imageHandler}
              />
              <div className="label">
                <label className="image_upload" htmlFor="input">
                  <h4>Thay Đổi</h4>
                </label>
                <p style={{ marginTop: "20px" }}>
                  Quản lý thông tin hồ sơ để bảo mật tài khoản
                </p>
              </div> */}