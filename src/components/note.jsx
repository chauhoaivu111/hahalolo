import React from "react";
import Helmet from "../components/Helmet";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";

import { Button, Typography } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Helmet title="Login">
      <div
        // style={{
        //   height: "950px",
        //   width: "100%",
        //   backgroundColor: "white",
        //   textAlign: "center",
        //   justifyContent: "center",
        //   justifyItems: "center",
        //   justifySelf: "center",
        //   margin: "0px",
        // }}
        className="main_frame_login"
      >
        <div
        className="Top_frame"
          // style={{
          //   height: "600px",
          //   width: "100%",
          //   backgroundColor: "#F0F4FA",
          //   textAlign: "center",
          //   justifyContent: "center",
          //   justifyItems: "center",
          //   justifySelf: "center",
          //   margin: "0px",
          //   // display: "flex",
          // }}
        
        >
          <div
            // style={{
            //   height: "600px",
            //   width: "70%",
            //   backgroundColor: "#F0F4FA",
            //   textAlign: "center",
            //   justifyContent: "center",
            //   justifyItems: "center",
            //   justifySelf: "center",
            //   margin: "0px",
            // }}
            className="sub_Frame"
          >
            <Typography
              sx={{
                textAlign: "center",
                paddingTop: "6%",
                fontWeight: "900",
                fontSize: "50px",
              }}
            >
              <PersonOutlineIcon
                sx={{ fontSize: "50px", marginRight: "30px" }}
              />
              Login
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
              Welcome to our blog magazine Community
            </Typography>

            <Paper
              // sx={{
              //   height: "650px",
              //   backgroundColor: "white",
              //   textAlign: "center",
              //   justifyContent: "center",
              //   justifyItems: "center",
              //   justifySelf: "center",
              //   display: "flex",

              //   marginTop: "70px",
              //   borderRadius: "20px",
              // }}
              className="main_paper"
            >
              <div  className="frame_button_connect">
                <Button
                  // sx={{
                  //   backgroundColor: "#F0F4FA",
                  //   width: "400px",
                  //   height: "50px",
                  //   justifyContent: "left",
                  //   marginTop: "7%",
                  //   textTransform: "capitalize",
                  //   borderRadius: "10px",
                  // }}
                  className="button1"
                >
                  <FacebookIcon />

                  <Typography className="text_in_button1">
                    Continue with facebook
                  </Typography>
                </Button>

                <Button
                  // sx={{
                  //   backgroundColor: "#F0F4FA",
                  //   width: "400px",
                  //   height: "50px",
                  //   justifyContent: "left",
                  //   marginTop: "3%",
                  //   textTransform: "capitalize",
                  //   borderRadius: "10px",
                  // }}
                  className="button2"
                >
                  <img src="https://chisnghiax.com/ncmaz/assets/Google.e6e5ddf2.svg" />

                  <Typography className="text_in_button">
                    Continue with Google
                  </Typography>
                </Button>

                <Button
                  // sx={{
                  //   backgroundColor: "#F0F4FA",
                  //   width: "400px",
                  //   height: "50px",
                  //   justifyContent: "left",
                  //   marginTop: "3%",
                  //   textTransform: "capitalize",
                  //   borderRadius: "10px",
                  // }}
                  className="button2"
                >
                  <TwitterIcon sx={{ color: "#629CF4" }} />

                  <Typography className="text_in_button" >
                    Continue with Twitter
                  </Typography>
                </Button>

                <div style={{ display: "flex", marginTop: "30px" }}>
                  <hr
                    style={{
                      width: "43%",
                      height: "2px",
                      marginTop: "20px",
                      backgroundColor: "#DBDCDD",
                      border: "none",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "600",
                      marginLeft: "15px",
                      marginRight: "15px",
                      marginTop: "10px",
                    }}
                  >
                    OR
                  </Typography>
                  <hr
                    style={{
                      width: "43%",
                      height: "2px",
                      marginTop: "20px",
                      backgroundColor: "#DBDCDD",
                      border: "none",
                    }}
                  />
                </div>

                {/*-_________________________________________________________ textfield______________________________________________________  */}
                <div style={{ textAlign: "left", marginTop: "30px" }}>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                      marginBottom: "5px",
                    }}
                  >
                    Email address
                  </Typography>
                  <TextField
                    sx={{ display: "block" }}
                    className="inputtextcricle"
                    fullWidth
                    placeholder="chauhoaivu111@gmail.com"
                  ></TextField>

                  <div
                    style={{
                      justifyContent: "space-between",
                      display: "flex",
                      marginTop: "30px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "500",
                        marginBottom: "5px",
                      }}
                    >
                      Password
                    </Typography>

                    <Typography
                      sx={{
                        textAlign: "right",
                        fontSize: "15px",
                        fontWeight: "500",
                        marginBottom: "5px",
                      }}
                    >
                      {" "}
                      <Link to ="/Forgotpass">
                      <span
                        style={{
                          color: "#346EC6",
                          cursor: "pointer",
                          fontWeight: "500",
                        }}
                      >
                        Forgot password?
                      </span>
                      </Link>
                    </Typography>
                  </div>
                  <TextField
                    sx={{ display: "block", marginBottom: "30px" }}
                    className="inputtextcricle"
                    fullWidth
                  ></TextField>

                  <Button
                    sx={{
                      backgroundColor: "#035BDE",
                      borderRadius: "30px",
                      height: "45px",
                      color: "white",
                      textTransform: "capitalize",
                      marginBottom: "30px",
                    }}
                    fullWidth
                  >
                    Continue
                  </Button>

                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: "15px",
                      fontWeight: "500",
                      marginBottom: "5px",
                    }}
                  >
                    New user?{" "}
                    <Link to="/SignUp">
                    <span
                      style={{
                        color: "#346EC6",
                        cursor: "pointer",
                        fontWeight: "500",
                      }}
                    >
                      Create an account
                    </span>
                    </Link>
                  </Typography>
                </div>
              </div>
            </Paper>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Login;


// import React from "react";
// import { useState } from "react";

// import Helmet from "../components/Helmet";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import avt from "../asset/avatar.jpg";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import { height, textAlign } from "@mui/system";
// import {
//   Button,
//   CardMedia,
//   IconButton,
//   Image,
//   LinearProgress,
//   Typography,
//   Popper,
//   MenuItem,
//   Menu,
// } from "@mui/material";
// import useWindowScrollPositions from "../hooks/useWindowScrollPositions";
// import Avatar from "@mui/material/Avatar";
// import Stack from "@mui/material/Stack";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
// import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
// import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
// import im from "../asset/background.png";
// import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
// import Instagram from "@mui/icons-material/Instagram";
// import YouTube from "@mui/icons-material/YouTube";
// import Twitter from "@mui/icons-material/Twitter";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import ContentCopyIcon from "@mui/icons-material/ContentCopy";
// import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
// import HideSourceIcon from "@mui/icons-material/HideSource";
// import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";

// const Home = () => {
//   const [progress, setProgress] = React.useState(0);

//   React.useEffect(() => {
//     let computeProgress = () => {
//       // The scrollTop gives length of window that has been scrolled
//       const scrolled = document.documentElement.scrollTop;
//       // scrollHeight gives total length of the window and
//       // The clientHeight gives the length of viewport
//       const scrollLength =
//         document.documentElement.scrollHeight -
//         document.documentElement.clientHeight;
//       const progress = `${(100 * scrolled) / scrollLength}`;

//       setProgress(progress);
//     };

//     // Adding event listener on mounting
//     window.addEventListener("scroll", computeProgress);

//     // Removing event listener upon unmounting
//     return () => window.removeEventListener("scroll", computeProgress);
//   });

//   const { scrollX, scrollY } = useWindowScrollPositions();

//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(anchorEl ? null : event.currentTarget);
//     setanchorEl1(null);
//   };

//   const open = Boolean(anchorEl);

//   const [anchorEl1, setanchorEl1] = useState(null);

//   const handleClick1 = (event) => {
//     setanchorEl1(anchorEl1 ? null : event.currentTarget);
//     setAnchorEl(null);
//   };
//   const open1 = Boolean(anchorEl1);
// // /------------------------------------------------------------------------------------------------------------------------------/ 
//   return (
//     <Helmet title="Home">
//       <div style={{ height: "2000px" }}>
//         <div className="main_frame_Postdetails">
//           <Paper
//             sx={{
//               backgroundColor: "red",
//               backgroundImage: `url(${im})`,
//               height: "400px",
//               backgroundRepeat: "no-repeat",
//             }}
//           >
//             <div className="frame_Top_gallary">
//               <Button className="button_gallary">Garden</Button>
//               <Button className="button_gallary2">Jewelry</Button>
//               <div className="frame_title_postdetail">
//                 <Typography className="text_title_postdetail">
//                   Quiet ingenuity: 120,000 lunches and counting
//                 </Typography>
//               </div>
//               <hr
             
//                 className="underline_postdetail"
//               />
//               <div style={{ marginTop: "2%" }}>
//                 <Stack direction="row" spacing={2} sx={{ color: "white" }}>
//                   <Avatar alt="Remy Sharp" src={avt} />
//                   <div className="frame_IconbuttonRight">
//                     <div>
//                       <Typography>Cristiano Ronaldo</Typography>

//                       <Typography>May 20, 2021 · 6 min read</Typography>
//                     </div>

//                     <div className="frame_button_right">
//                       <Button className="button_favorite">
//                         <FavoriteIcon className="icon_favorite" />
//                         220
//                       </Button>
//                       <Button className="button_chat">
//                         <ChatOutlinedIcon className="icon_chat" />
//                         12
//                       </Button>
//                       |
//                       <IconButton
//                         className="Button_share"
//                         sx={{ backgroundColor: "rgba(212, 248, 255, 0.1)"  }}
//                         onClick={handleClick}
//                       >
//                         <ShareOutlinedIcon
//                           sx={{ color: "white" }}
//                           className="icon_share"
//                         />
//                       </IconButton>
//                       <Popper
//                         open={open}
//                         anchorEl={anchorEl}
//                         sx={{ position: "absoluted" }}
//                       >
//                         <Box
//                           sx={{
//                             border: 1,
//                             p: 1,
//                             backgroundColor: "white",
//                             width: "200px",
//                             marginTop: "10px",
//                             borderRadius: "10px",
//                           }}
//                         >
//                           <MenuItem
//                             sx={{ color: "black" }}
//                             className="menuhover"
//                           >
//                             <FacebookIcon />
//                             <Typography sx={{ marginLeft: "30px" }}>
//                               {" "}
//                               Facebook{" "}
//                             </Typography>
//                           </MenuItem>
//                           <MenuItem
//                             sx={{ color: "black" }}
//                             className="menuhover"
//                           >
//                             <Twitter />
//                             <Typography sx={{ marginLeft: "30px" }}>
//                               {" "}
//                               Twitter{" "}
//                             </Typography>
//                           </MenuItem>
//                           <MenuItem
//                             sx={{ color: "black" }}
//                             className="menuhover"
//                           >
//                             <Instagram />
//                             <Typography sx={{ marginLeft: "30px" }}>
//                               {" "}
//                               Instagram{" "}
//                             </Typography>
//                           </MenuItem>
//                         </Box>
//                       </Popper>
//                       <IconButton
//                         className="Button_share"
//                         sx={{ backgroundColor: "rgba(212, 248, 255, 0.1)" }}
//                       >
//                         <BookmarkAddedOutlinedIcon
//                           sx={{ color: "white" }}
//                           className="icon_share"
//                         />
//                       </IconButton>
//                       <IconButton
//                         className="Button_share"
//                         sx={{ backgroundColor: "rgba(212, 248, 255, 0.1)" }}
//                       >
//                         <MoreHorizOutlinedIcon
//                           sx={{ color: "white" }}
//                           className="icon_share"
//                           onClick={handleClick1}
//                         />
//                       </IconButton>
//                       <Popper open={open1} anchorEl={anchorEl1}>
//                         <Box
//                           sx={{
//                             border: 1,
//                             p: 1,
//                             backgroundColor: "white",
//                             width: "200px",
//                             marginTop: "10px",
//                             borderRadius: "10px",
//                           }}
//                         >
//                           <MenuItem
//                             sx={{ color: "black" }}
//                             className="menuhover"
//                           >
//                             <ContentCopyIcon />
//                             <Typography sx={{ marginLeft: "30px" }}>
//                               {" "}
//                               Copy{" "}
//                             </Typography>
//                           </MenuItem>
//                           <MenuItem
//                             sx={{ color: "black" }}
//                             className="menuhover"
//                           >
//                             <MarkChatUnreadOutlinedIcon />
//                             <Typography sx={{ marginLeft: "30px" }}>
//                               {" "}
//                               Comment this article{" "}
//                             </Typography>
//                           </MenuItem>
//                           <MenuItem
//                             sx={{ color: "black" }}
//                             className="menuhover"
//                           >
//                             <HideSourceIcon />
//                             <Typography sx={{ marginLeft: "30px" }}>
//                               {" "}
//                               Hide this author{" "}
//                             </Typography>
//                           </MenuItem>

//                           <MenuItem
//                             sx={{ color: "black" }}
//                             className="menuhover"
//                           >
//                             <FlagOutlinedIcon />
//                             <Typography sx={{ marginLeft: "30px" }}>
//                               {" "}
//                               Report this article{" "}
//                             </Typography>
//                           </MenuItem>
//                         </Box>
//                       </Popper>
//                       <div></div>
//                     </div>
//                   </div>
//                 </Stack>
//               </div>
//             </div>
//           </Paper>

//           {/* -------------------------------------------taskbar_header--------------------------------------------------------------- */}

//           <div
//             style={{
         
//               display: scrollY > 400 ? "block" : "none",
            
//             }}
//             className="taskbar"
//           >
//             <div
//               style={{
//                 width: "1250px",
//                 height: "40px",
//                 margin: "auto",
//                 marginTop: "13px",
//                 display: "flex",
//               }}
//             >
//               <Avatar alt="Remy Sharp" src={avt} sx={{ marginLeft: "10px" }} />
//               <div className="frame_elemet_taskbar">
//                 <Typography className="title_taskbar">
//                   Quiet ingenuity: 120,000 lunches and counting
//                 </Typography>
//               </div>
//               <Button className="button_favorite1" sx={{marginLeft:"17%"}} >
//                 <FavoriteIcon sx={{ color: "red" }} />
//                 220
//               </Button>
              
//               <IconButton className="Button_share1">
//                 <ShareOutlinedIcon
//                   sx={{ color: "white" }}
//                   className="icon_share"
//                   onClick={handleClick}
//                 />
//               </IconButton>
//               <IconButton
//                 // className="Button_share"
//                 sx={{ marginLeft: "5px", marginRight: "5px" }}
//               >
//                 <BookmarkAddedOutlinedIcon
//                   sx={{ color: "white" }}
//                   className="icon_share"
//                 />
//               </IconButton>
              
//               <IconButton className="Button_share" onClick={handleClick1}>
//                 <MoreHorizOutlinedIcon
//                   sx={{ color: "white" }}
//                   className="icon_share"
//                 />
//               </IconButton>

//               <Typography sx={{color:"white",paddingTop:"3px",fontSize:"20px"}}>|</Typography>
//               <Popper open={open1} anchorEl={anchorEl1}>
//                 <Box
//                   sx={{
//                     border: 1,
//                     p: 1,
//                     backgroundColor: "white",
//                     width: "250px",
//                     marginTop: "10px",
//                     borderRadius: "10px",
//                   }}
//                 >
//                   <MenuItem sx={{ color: "black" }} className="menuhover">
//                     <ContentCopyIcon />
//                     <Typography sx={{ marginLeft: "30px" }}> Copy </Typography>
//                   </MenuItem>
//                   <MenuItem sx={{ color: "black" }} className="menuhover">
//                     <MarkChatUnreadOutlinedIcon />
//                     <Typography sx={{ marginLeft: "30px" }}>
//                       {" "}
//                       Comment this article{" "}
//                     </Typography>
//                   </MenuItem>
//                   <MenuItem sx={{ color: "black" }} className="menuhover">
//                     <HideSourceIcon />
//                     <Typography sx={{ marginLeft: "30px" }}>
//                       {" "}
//                       Hide this author{" "}
//                     </Typography>
//                   </MenuItem>

//                   <MenuItem sx={{ color: "black" }} className="menuhover">
//                     <FlagOutlinedIcon />
//                     <Typography sx={{ marginLeft: "30px" }}>
//                       {" "}
//                       Report this article{" "}
//                     </Typography>
//                   </MenuItem>
//                 </Box>
//               </Popper>
//               <IconButton
//                 sx={{
//                   borderRadius: "100%",
//                   height: "100%",
//                   width: "40px",
//                   color: "white",
//                   marginLeft: "1%",
//                   backgroundColor: "rgba(212, 248, 255, 0.1)",
//                 }}
//               >
//                 {" "}
//                 <FacebookIcon />
//               </IconButton>
//               <IconButton
//                 sx={{
//                   borderRadius: "100%",
//                   height: "100%",
//                   width: "40px",
//                   color: "white",
//                   marginLeft: "1%",
//                   backgroundColor: "rgba(212, 248, 255, 0.1)",
//                 }}
//               >
//                 {" "}
//                 <Instagram />
//               </IconButton>
//               <IconButton
//                 sx={{
//                   borderRadius: "100%",
//                   height: "100%",
//                   width: "40px",
//                   color: "white",
//                   marginLeft: "1%",
//                   backgroundColor: "rgba(212, 248, 255, 0.1)",
//                 }}
//               >
//                 {" "}
//                 <Twitter />
//               </IconButton>
//               <IconButton
//                 sx={{
//                   borderRadius: "100%",
//                   height: "100%",
//                   width: "40px",
//                   color: "white",
//                   marginLeft: "1%",
//                   backgroundColor: "rgba(212, 248, 255, 0.1)",
//                 }}
//               >
//                 {" "}
//                 <YouTube />
//               </IconButton>
//             </div>

//             <div
//               style={{ position: "fixed", width: "100%", marginTop: "7px" }}
//               className="frame_linear"
//             >
//               <LinearProgress
//                 variant="buffer"
//                 color="success"
//                 value={progress}
//                 className="linear"
//               />
//             </div>
//           </div>

//           <div style={{ marginTop: "600px" }}>chauhoaivu</div>
//         </div>
//       </div>
//     </Helmet>
//   );
// };

// export default Home;




{/* <G col={2} smCol={1} mdCol={1} gap={10}>
<div className="frame_left_body">
  <div style={{ margin: "20px" }}>
    <Typography className="content_body">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
      vel officiis ipsum placeat itaque neque dolorem modi
      perspiciatis dolor distinctio veritatis sapiente, minima
      corrupti dolores necessitatibus suscipit accusantium dignissimos
      culpa cumque.
    </Typography>
    <Typography className="content_body">
      It is a long established fact that a reader will be distracted
      by the readable content of a page when looking at its layout.
      The point of using Lorem Ipsum is that it has a more-or-less
      normal distribution of letters.
    </Typography>
    <Typography className="content_body">
      1. We want everything to look good out of the box. <br />
      2. Really just the first reason, that's the whole point of the
      plugin.
      <br />
      3. Here's a third pretend reason though a list with three items
      looks more realistic than a list with two items.
    </Typography>
    <Typography component="h" className="content_tittle_body">
      Typography should be easy
    </Typography>

    <Typography className="content_body">
      So that's a header for you — with any luck if we've done our job
      correctly that will look pretty reasonable.
      <br />
      Something a wise person once told me about typography is:
    </Typography>
    <div
      style={{
        width: "100%",
        borderLeft: "3px solid gray",
        height: "50px",
        marginBottom: "30px",
      }}
    >
      <Typography
        className="content_body"
        sx={{ marginLeft: "20px", fontStyle: "italic" }}
      >
        "Typography is pretty important if you don't want your stuff
        to look like trash. Make it good then it won't be bad."
      </Typography>
    </div>
    <Typography className="content_body">
      It's probably important that images look okay here by default as
      well:
    </Typography>
    <img
      className="img_body"
      alt="new"
      src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
    />
    <Typography className="content_body">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
      vel officiis ipsum placeat itaque neque dolorem modi
      perspiciatis dolor distinctio veritatis sapiente
    </Typography>
    <Typography className="content_body">
      Now I'm going to show you an example of an unordered list to
      make sure that looks good, too: So here is the first item in
      this list. In this example we're keeping the items short. Later,
      we'll use longer, more complex list items. And that's the end of
      this section.
    </Typography>
    <Typography component="h" className="content_tittle_body">
      Code should look okay by default.
    </Typography>
    <Typography className="content_body">
      I think most people are going to use highlight.js or Prism or
      something if they want to style their code blocks but it
      wouldn't hurt to make them look okay out of the box, even with
      no syntax highlighting. What I've written here is probably long
      enough, but adding this final sentence can't hurt.
    </Typography>
    <img
      className="img_body"
      alt="new"
      src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
    />

    <Typography className="content_body">
      Hopefully that looks good enough to you.
    </Typography>

    <Typography component="h" className="content_tittle_body">
      We still need to think about stacked headings though.
      <br />
     <Typography sx={{fontStyle:"oblique"}} className="content_tittle_body"> Let's make sure we don't screw that up with "h4" elements,
      either.</Typography>
    </Typography>
    <Typography className="content_body">
      Phew, with any luck we have styled the headings above this text
      and they look pretty good. Let's add a closing paragraph here so
      things end with a decently sized block of text. I can't explain
      why I want things to end that way but I have to assume it's
      because I think things will look weird or unbalanced if there is
      a heading too close to the end of the document. What I've
      written here is probably long enough, but adding this final
      sentence can't hurt.
    </Typography>
    <div style={{ display: "flex" }}>
      <Button className="button_body_bottom">Garden</Button>
      <Button  className="button_body_bottom">jewelry</Button>
      <Button  className="button_body_bottom">Tools</Button>
    </div>
  </div>
  <Divider sx ={{margin:"20px",marginTop:"70px"}} />
</div>


<div>fghjhgf</div> */}


{/* <div>
            <div className="main_frame_right">
              {" "}
              <Paper
                className="main_paper_element_right"
                sx={{ backgroundColor: "#F2F3F4", borderRadius: "20px" }}
              >
                <Box>
                  <div className="frame_Top_element_right">
                    <G col={2}>
                      <div>
                        <Typography className="title_left_element_right">
                          {" "}
                          🏷️ discover more tags
                        </Typography>
                      </div>
                      <div>
                        <Typography className="title_right_element_right">
                          view all
                        </Typography>
                      </div>
                    </G>
                  </div>
                  <Divider />
                  <div className="frame_each_button">
                    <Button className="button_view_element_right">
                      Outdoors(14)
                    </Button>
                    <Button className="button_view_element_right button_margin_left">
                      Health(4)
                    </Button>
                    <Button className="button_view_element_right button_margin_left">
                      Electronics(7)
                    </Button>
                  </div>

                  <div className="frame_each_button">
                    <Button className="button_view_element_right">
                      Industrial (26)
                    </Button>
                    <Button className="button_view_element_right button_margin_left">
                      Health (20)
                    </Button>
                    <Button className="button_view_element_right button_margin_left">
                      Toys (22)
                    </Button>
                  </div>
                  <div className="frame_each_button">
                    <Button className="button_view_element_right">
                      Sports (15)
                    </Button>
                    <Button className="button_view_element_right button_margin_left">
                      Automovie (9)
                    </Button>
                  </div>

                  <div className="frame_each_button">
                    <Button className="button_view_element_right ">
                      Computers (26)
                    </Button>
                    <Button className="button_view_element_right button_margin_left">
                      Design (15)
                    </Button>
                  </div>

                  <div className="frame_each_button">
                    <Button className="button_view_element_right ">
                      Beauty (27)
                    </Button>
                    <Button className="button_view_element_right button_margin_left">
                      Books (25)
                    </Button>
                    <Button className="button_view_element_right button_margin_left">
                      Life style (18)
                    </Button>
                  </div>
                  <div className="frame_each_button">
                    <Button className="button_view_element_right">
                      Graphic design (28)
                    </Button>
                  </div>
                </Box>
              </Paper>
            </div>
            {/* ------------------------------------------------------------------------- */}
          {/* <div className="main_frame_right">
              {" "}
              <Paper
                className="main_paper_element_right2"
                sx={{ backgroundColor: "#F2F3F4", borderRadius: "20px" }}
              >
                <Box>
                  <div className="frame_Top_element_right">
                    <G col={2}>
                      <div>
                        <Typography className="title_left_element_right">
                          {" "}
                          ✨ Trending topic
                        </Typography>
                      </div>
                      <div>
                        <Typography className="title_right_element_right">
                          view all
                        </Typography>
                      </div>
                    </G>
                  </div>
                  <Divider sx={{ marginBottom: "-8px" }} />

                  <div>
                    <MenuList sx={{ height: "100%" }}>
                      <MenuItem sx={{ height: "100px" }}>
                        <img
                          className="style_image_second_element_right"
                          alt="new"
                          src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
                        />
                        <div className="frame_title_second_element_right">
                          <Typography className="first_title">
                            Electronics
                          </Typography>
                          <Typography>7 article</Typography>
                        </div>
                      </MenuItem>
                    </MenuList>
                  </div>
                  <Divider sx={{ marginTop: "-8px", marginBottom: "-8px" }} />

                  <div>
                    <MenuList sx={{ height: "100%" }}>
                      <MenuItem sx={{ height: "100px" }}>
                        <img
                          className="style_image_second_element_right"
                          alt="new"
                          src="https://i.picsum.photos/id/1029/4887/2759.jpg?hmac=uMSExsgG8_PWwP9he9Y0LQ4bFDLlij7voa9lU9KMXDE"
                        />
                        <div className="frame_title_second_element_right">
                          <Typography className="first_title">
                            Industrial
                          </Typography>
                          <Typography>20 article</Typography>
                        </div>
                      </MenuItem>
                    </MenuList>
                  </div>
                  <Divider sx={{ marginTop: "-8px", marginBottom: "-8px" }} />

                  <div>
                    <MenuList sx={{ height: "100%" }}>
                      <MenuItem sx={{ height: "100px" }}>
                        <img
                          className="style_image_second_element_right"
                          alt="new"
                          src="https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE"
                        />
                        <div className="frame_title_second_element_right">
                          <Typography className="first_title">
                            Health
                          </Typography>
                          <Typography>14 article</Typography>
                        </div>
                      </MenuItem>
                    </MenuList>
                  </div>
                  <Divider sx={{ marginTop: "-8px", marginBottom: "-8px" }} />

                  <div>
                    <MenuList sx={{ height: "100%" }}>
                      <MenuItem sx={{ height: "100px" }}>
                        <img
                          className="style_image_second_element_right"
                          alt="new"
                          src="https://i.picsum.photos/id/119/3264/2176.jpg?hmac=PYRYBOGQhlUm6wS94EkpN8dTIC7-2GniC3pqOt6CpNU"
                        />
                        <div className="frame_title_second_element_right">
                          <Typography className="first_title">Toys</Typography>
                          <Typography>31 article</Typography>
                        </div>
                      </MenuItem>
                    </MenuList>
                  </div>
                  <Divider sx={{ marginTop: "-8px", marginBottom: "-8px" }} />

                  <div>
                    <MenuList sx={{ height: "100%" }}>
                      <MenuItem sx={{ height: "100px" }}>
                        <img
                          className="style_image_second_element_right"
                          alt="new"
                          src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
                        />
                        <div className="frame_title_second_element_right">
                          <Typography className="first_title">
                            Sports
                          </Typography>
                          <Typography>21 article</Typography>
                        </div>
                      </MenuItem>
                    </MenuList>
                  </div>
                  <Divider sx={{ marginTop: "-8px", marginBottom: "-8px" }} />
                  <div>
                    <MenuList sx={{ height: "100%" }}>
                      <MenuItem sx={{ height: "100px" }}>
                        <img
                          className="style_image_second_element_right"
                          alt="new"
                          src="https://i.picsum.photos/id/328/3264/2448.jpg?hmac=rR8AM7aOiJkj7PHfKTv_1H0_2Mmi2tYEuXvKR1S0wNU"
                        />
                        <div className="frame_title_second_element_right">
                          <Typography className="first_title">
                            Electronics
                          </Typography>
                          <Typography>7 article</Typography>
                        </div>
                      </MenuItem>
                    </MenuList>
                  </div>
                  <Divider sx={{ marginTop: "-8px", marginBottom: "-8px" }} />
                </Box>
              </Paper>
            </div> */}

          {/* ----------------------------------------------------------------------- */}
          {/* <div className="main_frame_right">
              {" "}
              <Paper
                className="main_paper_element_right3"
                sx={{ backgroundColor: "#F2F3F4", borderRadius: "20px" }}
              >
                <Box>
                  <div className="frame_Top_element_right">
                    <G col={2}>
                      <div>
                        <Typography className="title_left_element_right">
                          {" "}
                          🎭 Discover Auhtors
                        </Typography>
                      </div>
                      <div>
                        <Typography className="title_right_element_right">
                          view all
                        </Typography>
                      </div>
                    </G>
                  </div>
                  <Divider sx={{ marginBottom: "-8px" }} />

                  <div>
                    <MenuList sx={{ height: "100%" }}>
                      <MenuItem sx={{ height: "100px" }}>
                        <Avatar src={img1}></Avatar>
                        <div className="frame_title_second_element_right">
                          <Typography className="first_title">
                            Cristiano Ronaldo
                          </Typography>
                          <Typography>7 article</Typography>
                        </div>
                      </MenuItem>
                    </MenuList>
                  </div>
                  <Divider sx={{ marginTop: "-8px", marginBottom: "-8px" }} />

                  <div>
                    <MenuList sx={{ height: "100%" }}>
                      <MenuItem sx={{ height: "100px" }}>
                        <Avatar src={img2}></Avatar>
                        <div className="frame_title_second_element_right">
                          <Typography className="first_title">
                            Kevin De Bruyne
                          </Typography>
                          <Typography>17 article</Typography>
                        </div>
                      </MenuItem>
                    </MenuList>
                  </div>
                  <Divider sx={{ marginTop: "-8px", marginBottom: "-8px" }} />

                  <div>
                    <MenuList sx={{ height: "100%" }}>
                      <MenuItem sx={{ height: "100px" }}>
                        <Avatar src={img3}></Avatar>
                        <div className="frame_title_second_element_right">
                          <Typography className="first_title">
                            Neymar
                          </Typography>
                          <Typography>10 article</Typography>
                        </div>
                      </MenuItem>
                    </MenuList>
                  </div>
                  <Divider sx={{ marginTop: "-8px", marginBottom: "-8px" }} />

                  <div>
                    <MenuList sx={{ height: "100%" }}>
                      <MenuItem sx={{ height: "100px" }}>
                        <Avatar src={img4}></Avatar>
                        <div className="frame_title_second_element_right">
                          <Typography className="first_title">
                            Kylian Mbappé
                          </Typography>
                          <Typography>7 article</Typography>
                        </div>
                      </MenuItem>
                    </MenuList>
                  </div>
                  <Divider sx={{ marginTop: "-8px", marginBottom: "-8px" }} />

                  <div>
                    <MenuList sx={{ height: "100%" }}>
                      <MenuItem sx={{ height: "100px" }}>
                        <Avatar src={img5}></Avatar>
                        <div className="frame_title_second_element_right">
                          <Typography className="first_title">
                            Lionel Messi
                          </Typography>
                          <Typography>10 article</Typography>
                        </div>
                      </MenuItem>
                    </MenuList>
                  </div>
                  <Divider sx={{ marginTop: "-8px", marginBottom: "-8px" }} />
                </Box>
              </Paper>
            </div> */}

          {/*  -------------------------------------------------------------------------------------------------------*/}
          {/* <div className="main_frame_right">
              {" "}
              <Paper
                className="main_paper_element_right4"
                sx={{ backgroundColor: "#F2F3F4", borderRadius: "20px" }}
              >
                <Box>
                  <div className="frame_Top_element_right">
                    <G col={2}>
                      <div>
                        <Typography className="title_left_element_right">
                          {" "}
                          🎯 Popular Posts
                        </Typography>
                      </div>
                      <div>
                        <Typography className="title_right_element_right">
                          view all
                        </Typography>
                      </div>
                    </G>
                  </div>
                  <Divider sx={{ marginBottom: "0px" }} />

                  <div>
                    <div className="DivHover">
                      <div className="Top_avatar_and_title">
                        <Avatar src={img1} className="avatar_authors"></Avatar>
                        <Typography className="subtititle_avatar">
                          Tousy Vita · May 20, 2021
                        </Typography>
                      </div>

                      <div className="second_frame_title_and_img">
                        <div className="frame_main_title_avatar">
                          <Typography className="style_main_title">
                            News tool for Black pregnant and postpartum mothers
                            to save lives
                          </Typography>
                        </div>

                        <div className="frame_img_right_avatar">
                          <img
                            className="img_right_avatar"
                            alt="new"
                            src="https://i.picsum.photos/id/328/3264/2448.jpg?hmac=rR8AM7aOiJkj7PHfKTv_1H0_2Mmi2tYEuXvKR1S0wNU"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Divider sx={{ marginTop: "0px" }} />

                  <div>
                    <div className="DivHover">
                      <div className="Top_avatar_and_title">
                        <Avatar src={img2} className="avatar_authors"></Avatar>
                        <Typography className="subtititle_avatar">
                          Tousy Vita · May 20, 2021
                        </Typography>
                      </div>

                      <div className="second_frame_title_and_img">
                        <div className="frame_main_title_avatar">
                          <Typography className="style_main_title">
                            News tool for Black pregnant and postpartum mothers
                            to save lives
                          </Typography>
                        </div>

                        <div className="frame_img_right_avatar">
                          <img
                            className="img_right_avatar"
                            alt="new"
                            src="https://i.picsum.photos/id/328/3264/2448.jpg?hmac=rR8AM7aOiJkj7PHfKTv_1H0_2Mmi2tYEuXvKR1S0wNU"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Divider sx={{ marginTop: "0px" }} />
                  <div>
                    <div className="DivHover">
                      <div className="Top_avatar_and_title">
                        <Avatar src={img3} className="avatar_authors"></Avatar>
                        <Typography className="subtititle_avatar">
                          Tousy Vita · May 20, 2021
                        </Typography>
                      </div>

                      <div className="second_frame_title_and_img">
                        <div className="frame_main_title_avatar">
                          <Typography className="style_main_title">
                            News tool for Black pregnant and postpartum mothers
                            to save lives
                          </Typography>
                        </div>

                        <div className="frame_img_right_avatar">
                          <img
                            className="img_right_avatar"
                            alt="new"
                            src="https://i.picsum.photos/id/328/3264/2448.jpg?hmac=rR8AM7aOiJkj7PHfKTv_1H0_2Mmi2tYEuXvKR1S0wNU"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Divider sx={{ marginTop: "0px" }} />
                  <div>
                    <div className="DivHover">
                      <div className="Top_avatar_and_title">
                        <Avatar src={img4} className="avatar_authors"></Avatar>
                        <Typography className="subtititle_avatar">
                          Tousy Vita · May 20, 2021
                        </Typography>
                      </div>

                      <div className="second_frame_title_and_img">
                        <div className="frame_main_title_avatar">
                          <Typography className="style_main_title">
                            News tool for Black pregnant and postpartum mothers
                            to save lives
                          </Typography>
                        </div>

                        <div className="frame_img_right_avatar">
                          <img
                            className="img_right_avatar"
                            alt="new"
                            src="https://i.picsum.photos/id/328/3264/2448.jpg?hmac=rR8AM7aOiJkj7PHfKTv_1H0_2Mmi2tYEuXvKR1S0wNU"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Divider sx={{ marginTop: "0px"}} />
                </Box>
              </Paper>
            </div> */}
          {/* </div>  */}




// .test1 {
//   width: 100px;
//   background-color: aquamarine;
//   @include mobile {
//     width: 100px;
//     background-color: aquamarine;
//   }
//   @include tablet {
//     width: 100px;
//     background-color: aquamarine;
//   }
// }

// .main_frame_right {
//   // background-color: yellow;
//   width: 100%;

//   @include mobile {
//     width: 100%;
//   }
// }

// .main_paper_element_right {
//   margin-top: 20px;
//   width: 100%;
//   height: 400px;

//   @include mobile {
//     height: 350px;
//     margin: auto;
//   }

//   .frame_each_button {
//     display: flex;
//     margin: 20px;
//     @include mobile {
//       margin: 15px;
//     }
//   }
//   .button_view_element_right {
//     background-color: white;
//     border-radius: 10px;
//     border: 1px solid gray;
//     color: #000;
//   }

//   .button_margin_left {
//     margin-left: 20px;
//     @include mobile {
//       margin-left: 5px;
//     }
//   }

//   .frame_Top_element_right {
//     height: 50px;
//     @include mobile {
//       height: 40px;
//     }

//     .title_left_element_right {
//       margin: 8%;
//       // background-color: red;
//       font-weight: 900;

//       font-size: 15px;
//       @include mobile {
//         font-size: 12px;
//         margin: 8%;
//       }
//     }
//     .title_right_element_right {
//       margin: 6%;
//       color: blue;
//       font-weight: 600;
//       cursor: pointer;
//       justify-self: right;
//       text-align: right;
//       font-size: 15px;
//       @include mobile {
//         margin: 8%;
//         font-size: 13px;
//       }
//     }
//   }

 
// }

// .main_paper_element_right2 {
//   margin-top: 20px;
//   width: 100%;
//   height: 680px;
  

//   @include mobile {
//     height: 670px;
//     margin: auto;
//     margin-top: 20px;
//   }

//   .frame_each_button {
//     display: flex;
//     margin: 20px;
//     @include mobile {
//       margin: 15px;
//     }
//   }
//   .button_view_element_right {
//     background-color: white;
//     border-radius: 10px;
//     border: 1px solid gray;
//     color: #000;
//   }

//   .button_margin_left {
//     margin-left: 20px;
//     @include mobile {
//       margin-left: 5px;
//     }
//   }

//   .frame_Top_element_right {
//     height: 50px;
//     @include mobile {
//       height: 40px;
//     }

//     .title_left_element_right {
//       margin: 8%;
//       // background-color: red;
//       font-weight: 900;

//       font-size: 15px;
//       @include mobile {
//         font-size: 12px;
//         margin: 8%;
//       }
//     }
//     .title_right_element_right {
//       margin: 6%;
//       color: blue;
//       font-weight: 600;
//       cursor: pointer;
//       justify-self: right;
//       text-align: right;
//       font-size: 15px;
//       @include mobile {
//         margin: 8%;
//         font-size: 13px;
//       }
//     }
//   }

//   .style_image_second_element_right {
//     height: 50px;
//     width: 70px;
//     border-radius: 10px;
//     justify-content: left;
//     justify-items: left;
//     justify-self: left;
//   }

//   .frame_title_second_element_right {
//     margin: 20px;
//   }
//   .first_title {
//     font-size: 15px;
//     font-weight: 600;
//   }
// }




// .main_paper_element_right3 {
//   margin-top: 20px;
//   width: 100%;
//   height: 580px;
  

//   @include mobile {
//     height: 570px;
//     margin: auto;
//     margin-top: 20px;
//   }

//   .frame_each_button {
//     display: flex;
//     margin: 20px;
//     @include mobile {
//       margin: 15px;
//     }
//   }
//   .button_view_element_right {
//     background-color: white;
//     border-radius: 10px;
//     border: 1px solid gray;
//     color: #000;
//   }

//   .button_margin_left {
//     margin-left: 20px;
//     @include mobile {
//       margin-left: 5px;
//     }
//   }

//   .frame_Top_element_right {
//     height: 50px;
//     @include mobile {
//       height: 40px;
//     }

//     .title_left_element_right {
//       margin: 8%;
//       // background-color: red;
//       font-weight: 900;

//       font-size: 15px;
//       @include mobile {
//         font-size: 12px;
//         margin: 8%;
//       }
//     }
//     .title_right_element_right {
//       margin: 6%;
//       color: blue;
//       font-weight: 600;
//       cursor: pointer;
//       justify-self: right;
//       text-align: right;
//       font-size: 15px;
//       @include mobile {
//         margin: 8%;
//         font-size: 13px;
//       }
//     }
//   }

//   .style_image_second_element_right {
//     height: 50px;
//     width: 70px;
//     border-radius: 10px;
//     justify-content: left;
//     justify-items: left;
//     justify-self: left;
//   }

//   .frame_title_second_element_right {
//     margin: 20px;
//   }
//   .first_title {
//     font-size: 15px;
//     font-weight: 600;
//   }
// }




// .main_paper_element_right4 {
//   margin-top: 20px;
//   width: 100%;
//   height: 690px;
  

//   @include mobile {
//     height: 690px;
//     margin: auto;
//     margin-top: 20px;
//   }

//   .frame_each_button {
//     display: flex;
//     margin: 20px;
//     @include mobile {
//       margin: 15px;
//     }
//   }
//   .button_view_element_right {
//     background-color: white;
//     border-radius: 10px;
//     border: 1px solid gray;
//     color: #000;
//   }

//   .button_margin_left {
//     margin-left: 20px;
//     @include mobile {
//       margin-left: 5px;
//     }
//   }

//   .frame_Top_element_right {
//     height: 50px;
//     @include mobile {
//       height: 40px;
//     }

//     .title_left_element_right {
//       margin: 8%;
//       // background-color: red;
//       font-weight: 900;

//       font-size: 15px;
//       @include mobile {
//         font-size: 12px;
//         margin: 8%;
//       }
//     }
//     .title_right_element_right {
//       margin: 6%;
//       color: blue;
//       font-weight: 600;
//       cursor: pointer;
//       justify-self: right;
//       text-align: right;
//       font-size: 15px;
//       @include mobile {
//         margin: 8%;
//         font-size: 13px;
//       }
//     }
//   }

//   .style_image_second_element_right {
//     height: 50px;
//     width: 70px;
//     border-radius: 10px;
//     justify-content: left;
//     justify-items : left;
//     justify-self: left;
//   }
  
//   .frame_title_second_element_right {
//     margin: 20px;
//   }
//   .first_title {
//     font-size: 15px;
//     font-weight: 600;
//   }
//   .avatar_authors{
//     height: 30px;
//     width: 30px;
//   }
//   .subtititle_avatar{
//     margin-left: 20px;
//     margin-top: 5px;
//     font-size: 15px;
//     cursor: pointer;
//     @include mobile {
//       font-size: 12px;
//     }
    
//   }

//   .main_title_avatar{
    
//     // text-align: left;
//     background-color: red;
//     display: block;
//     width: 90%;
//     height: 100px;
//   }

//   .DivHover{
//     height: 150px;


//     .Top_avatar_and_title{
//       display: flex;
//       padding: 20px;
//     }

//     .second_frame_title_and_img{
//       display: flex;
//     }
//     .frame_main_title_avatar{
//       width: 70%;
//       // background-color: red;
//       margin-left: 20px;
//     }
//     .style_main_title{
//       font-size: 20px;
//       cursor: pointer;
//       @include mobile{
//         font-size: 14px;
//       }
//     }
//     .frame_img_right_avatar{
//       width: 20%;
//       // background-color: rebeccapurple;
//       margin-top: -40px;
//       @include mobile{
//         width: 17%;
//       }
//     }
//     .img_right_avatar{
//       height: 90px;
//       width: 100px;
//       cursor: pointer;
     
//       border-radius: 10px;
//       @include mobile {
//         height: 50px;
//         width: 60px;
//         margin-top: 10px;
//       }
//       // @include tablet{
//       //   height: 70px;
//       //   width: 80px;
//       //   margin-left: 20px;
//       // }
//     }
//   }
//   .DivHover:hover{
//     background-color: #D4D6D8;
//   }
 
 
// }



// second-----------------------------------

// <div className="main_frame_content_Secondcomment">
    //   <div className="frame_sending_secondcomment">
    // <div>
    //   <Avatar src={img1} className="avatar_authors1"></Avatar>
    // </div>
    //     <div>
    //       <Paper className="paper_content">
    //         <div className="frame_name_more">
    // <div className="name_author_comment">
    //   <Typography>Pillifant Vern · May 20, 2021</Typography>
    // </div>

    // <Button  aria-describedby={id} type="button" onClick={handleClick}>more</Button>
    //           <Popper id={id} open={open} anchorEl={anchorEl}>
    //             <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
    //                 <MenuList>
    //                     <MenuItem>
    //                     <DeleteOutlineOutlinedIcon/>
    //                     <Typography>report</Typography>
    //                     </MenuItem>
    //                 </MenuList>
    //                 <MenuList>
    //                     <MenuItem>
    //                     <ReplyAllRoundedIcon/>
    //                     <Typography>report</Typography>
    //                     </MenuItem>
    //                 </MenuList>
    //                 <MenuList>
    //                     <MenuItem>
    //                     <FlagOutlinedIcon/>
    //                     <Typography>report</Typography>
    //                     </MenuItem>
    //                 </MenuList>
    //             </Box>
    //             </Popper>
    //         </div>
    // <div className="frame_name_more1">
    //   <Typography className="name_author_comment1">
    //     Praesent id massa id nisl venenatis lacinia. Aenean sit amet
    //     justo.Morbi ut odio.id massa id nisl venenatis
    //     lacinia. Aenean sit amet justo. Morbi ut odio.Praesent id massa
    //     id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
    //   </Typography>
    // </div>

    //         {/* map different component */}

    //         <div >
    //           <div>
    // {active === "Reply" && (
    //   <div className="frame_button_favorite_reply">
    //     <Button className="button_favorite_comment1"><FavoriteIcon/> 220 </Button>

    //     <Button className="button_favorite_comment2" onClick={() => setActive("Response")}> <ReplyAllRoundedIcon/>    <Typography sx={{paddingTop:"3px",marginLeft:"5px"}}>Reply</Typography></Button>
    //   </div>
    // )}
    // {active === "Response" && (
    //   <div className="frame_text_reply_comment">
    //     <TextareaAutosize
    //       aria-label="empty textarea"
    //       placeholder="Add to discussion"
    //       className="textarea_comment"
    //       minRows={4}
    //     />
    //     <div className="frame_button_cancle_submit_reply">

    //     <Button className="button_favorite_comment3" >Submit</Button>
    //     <Button className="button_favorite_comment" onClick={() => setActive("Reply")}>
    //       Cancle
    //     </Button>
    //     </div>

    //   </div>
    // )}
    //           </div>
    //         </div>
    //       </Paper>

    //     </div>
    //   </div>
    // </div>





    // .main_frame_content_Secondcomment{
//     min-height: 300px;
//     margin: 20px;
//     width: 100%;
//     // margin-top: -40px;
//     // position: relative;
  
//     .frame_sending_secondcomment {
//       display: flex;
//     //   background-color: aquamarine;
//       width: 1000px;
//       height: 200px;
//     //   text-align: right;
//       justify-content: right;
//       justify-items: right;
//       justify-self: right;
      
//       @include tablet{
//           width: 90%;
//       }
//       @include mobile {
//           width: 90%;
         
//       }

    //   .avatar_authors1{
    //     height: 20px;
    //     width: 20px;
    //   }

      
      
//     }
    
  
//     .paper_content{
//       width: 95%;
//       margin-left: 20px;
//       @include tablet{
//         width: 95%;
//     }
//       @include mobile{
//           width: 95%;
//       }



//       .frame_name_more{
//         width: 830px;
//         // background-color: bisque;
//         display: flex;
//         margin-left: 20px;
//         margin-right: 35px;
//         @include tablet{
//             width: 95%;
//         }
        
//         @include mobile {
//             width: 95%;
//         }
//     }

//     .frame_name_more1{
//         width: 790px;
//         // background-color: royalblue;
//         display: flex;
//         margin-left: 20px;
//         margin-right: 20px;
//         @include tablet{
//             width: 90%;
//         }
//         @include mobile{
//             width: 90%;
//         }
//     }

//     .name_author_comment{
//         padding-top: 10px;
//         font-size: 13px;
//         width: 100%;
       
//     }

//     .name_author_comment1{
      
//         font-size: 16px;
//         font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
//         @include mobile{
//             font-size: 13px;
//         }
//     }
      
      
  
//     }
//     .frame_text_reply_comment{
//         // background-color: aquamarine;
//         width: 800px;
//         margin-top: 20px;
//         @include tablet{
//             width: 100%;
//         }
//         @include mobile{
//             width: 100%;
//         }
//         .textarea_comment{
//             width: 820px;
//             margin-left: 20px;
//             padding: 20px;
//             border-radius: 10px;
           
//             @include tablet{
//                 width: 95%;
//             }
        
//             @include mobile {
//               width: 85%;
              
//           }
          
//           }
    
//           .frame_button_cancle_submit_reply{
//               display: flex;
//           }
//     }

//     .frame_button_favorite_reply{
//         display: flex;
//         margin-left: 20px;
        
//     }
//     .button_favorite_comment{
//         border: 1px solid gray;
//         border-radius: 10px;
//         margin: 20px;
        
        
//     }
//     .button_favorite_comment1{
//         border: 1px solid gray;
//         border-radius: 10px;
//         margin: 20px;
//         color: red;
//     }
//     .button_favorite_comment2{
//         border: 1px solid gray;
//         border-radius: 10px;
//         margin: 20px;
//         color: black;
        
        
//     }
//     .button_favorite_comment3{
//         border: 1px solid gray;
//         border-radius: 10px;
//         margin: 20px;
//         color: white;
//         background-color: blue;
        
//     }
    
//   }



// .main_frame_content_comment{
//     min-height: 100px;
//     margin: 20px;
//     width: 100%;
//     // position: absolute;
  
//     .frame_sending {
//       display: flex;
//     //   background-color: aquamarine;
//       width: 94%;
      
//       @include tablet{
//           width: 90%;
//       }
//       @include mobile {
//           width: 90%;
//       }
      
//     }
    
  
//     .paper_content{
//       width: 100%;
//       margin-left: 20px;
//       @include tablet{
//         width: 85%;
//     }
//       @include mobile{
//           width:75%;
//       }



//       .frame_name_more{
//         width: 870px;
//         // background-color: bisque;
//         display: flex;
//         margin-left: 20px;
//         @include tablet{
//             width: 95%;
//         }
        
//         @include mobile {
//             width: 95%;
//         }
//     }

//     .frame_name_more1{
//         width: 820px;
//         // background-color: bisque;
//         display: flex;
//         margin-left: 20px;
//         @include tablet{
//             width: 90%;
//         }
//         @include mobile{
//             width: 90%;
//         }
//     }

//     .name_author_comment{
//         padding-top: 10px;
//         font-size: 13px;
//         width: 100%;
//         margin-left: 20px;

       
//     }

//     .name_author_comment1{
      
//         font-size: 20px;
//         font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
//         @include mobile{
//             font-size: 13px;
//         }
//     }
      
      
  
//     }
//     .frame_text_reply_comment{
//         // background-color: aquamarine;
//         width: 870px;
//         margin-top: 20px;
//         @include tablet{
//             width: 100%;
//         }
//         @include mobile{
//             width: 100%;
//         }
//         .textarea_comment{
//             width: 820px;
//             margin-left: 20px;
//             padding: 20px;
//             border-radius: 10px;
           
//             @include tablet{
//                 width: 95%;
//             }
        
//             @include mobile {
//               width: 85%;
              
//           }
          
//           }
    
//           .frame_button_cancle_submit_reply{
//               display: flex;
//           }
//     }

//     .frame_button_favorite_reply{
//         display: flex;
//         margin-left: 20px;
        
//     }
//     .button_favorite_comment{
//         border: 1px solid gray;
//         border-radius: 10px;
//         margin: 20px;
        
        
//     }
//     .button_favorite_comment1{
//         border: 1px solid gray;
//         border-radius: 10px;
//         margin: 20px;
//         color: red;
//     }
//     .button_favorite_comment2{
//         border: 1px solid gray;
//         border-radius: 10px;
//         margin: 20px;
//         color: black;
        
        
//     }
//     .button_favorite_comment3{
//         border: 1px solid gray;
//         border-radius: 10px;
//         margin: 20px;
//         color: white;
//         background-color: blue;
        
//     }
    
//   }





// comment---------------------------------------------------------------------

// import React from "react";
// import { useState } from "react";

// import Helmet from "../components/Helmet";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import avt from "../asset/avatar.jpg";

// import {
//   Button,
//   IconButton,
//   LinearProgress,
//   Typography,
//   Popper,
//   MenuItem,
//   MenuList,
// } from "@mui/material";
// import useWindowScrollPositions from "../hooks/useWindowScrollPositions";
// import Avatar from "@mui/material/Avatar";
// import Stack from "@mui/material/Stack";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
// import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
// import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
// import im from "../asset/background.png";
// import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
// import Instagram from "@mui/icons-material/Instagram";
// import YouTube from "@mui/icons-material/YouTube";
// import Twitter from "@mui/icons-material/Twitter";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import ContentCopyIcon from "@mui/icons-material/ContentCopy";
// import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
// import HideSourceIcon from "@mui/icons-material/HideSource";
// import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
// import G from "../components/Grid";
// import { Divider } from "@mui/material";
// import img1 from "../asset/avatar.jpg";
// import img2 from "../asset/Kevin_De_Bruyne.jpg";
// import img3 from "../asset/Naymar-and-Nike-Split.jpg";
// import img4 from "../asset/Kylian_Mbappe.jpg";
// import img5 from "../asset/Lionel_Messi.jpg";
// import TextareaAutosize from '@mui/material/TextareaAutosize';

// const Home = () => {
//   return (
//     <Helmet title="Home">
//       <div>
//       <div className="frame_comment">
//         <div>
//           <img className="img_avatar_comment" alt="new" src={img1} />
//         </div>
//         <div className="frame_title_comment">
//           <Typography>WRITEN BY</Typography>
//           <Typography className="size_comment_title">
//             Cristiano Ronaldo
//           </Typography>
//           <Typography className="size_comment_title">
//             There’s no stopping the tech giant. Apple now opens its 100th store
//             in China.There’s no stopping the tech giant.Readmore
//           </Typography>
//         </div>
//       </div>

//       <div>
//         <Typography  sx={{fontSize:"15px",fontWeight:"600",margin:"20px"}}>Responses (14)</Typography>
//       </div>

//       <TextareaAutosize
//       aria-label="empty textarea"
//       placeholder="Add to discussion"
//       className="textarea_comment"
//       minRows={6}
//     />

//     <div style={{display:"flex"}}>

//       <Button>Submit</Button>
//       <Button>Cancle</Button>
//     </div>

//       </div>
//     </Helmet>
//   );
// };

// export default Home;

// import React from "react";
// import { useState } from "react";

// import Helmet from "../components/Helmet";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import avt from "../asset/avatar.jpg";

// import {
//   Button,
//   IconButton,
//   LinearProgress,
//   Typography,
//   Popper,
//   MenuItem,
//   MenuList,
// } from "@mui/material";
// import useWindowScrollPositions from "../hooks/useWindowScrollPositions";
// import Avatar from "@mui/material/Avatar";
// import Stack from "@mui/material/Stack";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
// import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
// import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
// import im from "../asset/background.png";
// import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
// import Instagram from "@mui/icons-material/Instagram";
// import YouTube from "@mui/icons-material/YouTube";
// import Twitter from "@mui/icons-material/Twitter";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import ContentCopyIcon from "@mui/icons-material/ContentCopy";
// import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
// import HideSourceIcon from "@mui/icons-material/HideSource";
// import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
// import G from "../components/Grid";
// import { Divider } from "@mui/material";
// import img1 from "../asset/avatar.jpg";
// import img2 from "../asset/Kevin_De_Bruyne.jpg";
// import img3 from "../asset/Naymar-and-Nike-Split.jpg";
// import img4 from "../asset/Kylian_Mbappe.jpg";
// import img5 from "../asset/Lionel_Messi.jpg";
// import TextareaAutosize from "@mui/material/TextareaAutosize";
// import ReplyAllRoundedIcon from '@mui/icons-material/ReplyAllRounded';
// import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
// const Comment = () => {
//   const [active, setActive] = useState("Reply");

//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(anchorEl ? null : event.currentTarget);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? 'simple-popper' : undefined;
//   return (
//     <div className="main_frame_content_comment">
//       <div className="frame_sending">
//         <div>
//           <Avatar src={img3} className="avatar_authors"></Avatar>
//         </div>
//         <div>
//           <Paper className="paper_content">
//             <div className="frame_name_more">
//               <div className="name_author_comment">
//                 <Typography>Pillifant Vern · May 20, 2021</Typography>
//               </div>

//               <Button  aria-describedby={id} type="button" onClick={handleClick}>more</Button>
              // <Popper id={id} open={open} anchorEl={anchorEl}>
              //   <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
              //       <MenuList>
              //           <MenuItem>
              //           <DeleteOutlineOutlinedIcon/>
              //           <Typography>report</Typography>
              //           </MenuItem>
              //       </MenuList>
              //       <MenuList>
              //           <MenuItem>
              //           <ReplyAllRoundedIcon/>
              //           <Typography>report</Typography>
              //           </MenuItem>
              //       </MenuList>
              //       <MenuList>
              //           <MenuItem>
              //           <FlagOutlinedIcon/>
              //           <Typography>report</Typography>
              //           </MenuItem>
              //       </MenuList>
              //   </Box>
              //   </Popper>
//             </div>
//             <div className="frame_name_more1">
//               <Typography className="name_author_comment1">
//                 Praesent id massa id nisl venenatis lacinia. Aenean sit amet
//                 justo.Morbi ut odio.id massa id nisl venenatis
//                 lacinia. Aenean sit amet justo. Morbi ut odio.Praesent id massa
//                 id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
//               </Typography>
//             </div>

//             {/* map different component */}

//             <div >
//               <div>
//                 {active === "Reply" && (
//                   <div className="frame_button_favorite_reply">
//                     <Button className="button_favorite_comment1"><FavoriteIcon/> 220 </Button>

//                     <Button className="button_favorite_comment2" onClick={() => setActive("Response")}> <ReplyAllRoundedIcon/>    <Typography sx={{paddingTop:"3px",marginLeft:"5px"}}>Reply</Typography></Button>
//                   </div>
//                 )}
//                 {active === "Response" && (
//                   <div className="frame_text_reply_comment">
//                     <TextareaAutosize
//                       aria-label="empty textarea"
//                       placeholder="Add to discussion"
//                       className="textarea_comment"
//                       minRows={4}
//                     />
//                     <div className="frame_button_cancle_submit_reply">

//                     <Button className="button_favorite_comment3" >Submit</Button>
//                     <Button className="button_favorite_comment" onClick={() => setActive("Reply")}>
//                       Cancle
//                     </Button>
//                     </div>

//                   </div>
//                 )}
//               </div>
//             </div>
//           </Paper>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Comment;


// .main_frame_content_comment{
//     min-height: 100px;
//     margin: 20px;
//     width: 100%;
//     // position: absolute;
  
//     .frame_sending {
//       display: flex;
//     //   background-color: aquamarine;
//       width: 94%;
      
//       @include tablet{
//           width: 90%;
//       }
//       @include mobile {
//           width: 90%;
//       }
      
//     }
    
  
//     .paper_content{
//       width: 100%;
//       margin-left: 20px;
//       @include tablet{
//         width: 95%;
//     }
//       @include mobile{
//           width: 95%;
//       }



//       .frame_name_more{
//         width: 870px;
//         // background-color: bisque;
//         display: flex;
//         margin-left: 20px;
//         @include tablet{
//             width: 95%;
//         }
        
//         @include mobile {
//             width: 95%;
//         }
//     }

//     .frame_name_more1{
//         width: 820px;
//         // background-color: bisque;
//         display: flex;
//         margin-left: 20px;
//         @include tablet{
//             width: 90%;
//         }
//         @include mobile{
//             width: 90%;
//         }
//     }

//     .name_author_comment{
//         padding-top: 10px;
//         font-size: 13px;
//         width: 100%;
       
//     }

//     .name_author_comment1{
      
//         font-size: 20px;
//         font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
//         @include mobile{
//             font-size: 13px;
//         }
//     }
      
      
  
//     }
//     .frame_text_reply_comment{
//         // background-color: aquamarine;
//         width: 870px;
//         margin-top: 20px;
//         @include tablet{
//             width: 100%;
//         }
//         @include mobile{
//             width: 100%;
//         }
//         .textarea_comment{
//             width: 820px;
//             margin-left: 20px;
//             padding: 20px;
//             border-radius: 10px;
           
//             @include tablet{
//                 width: 95%;
//             }
        
//             @include mobile {
//               width: 85%;
              
//           }
          
//           }
    
//           .frame_button_cancle_submit_reply{
//               display: flex;
//           }
//     }

//     .frame_button_favorite_reply{
//         display: flex;
//         margin-left: 20px;
        
//     }
//     .button_favorite_comment{
//         border: 1px solid gray;
//         border-radius: 10px;
//         margin: 20px;
        
        
//     }
//     .button_favorite_comment1{
//         border: 1px solid gray;
//         border-radius: 10px;
//         margin: 20px;
//         color: red;
//     }
//     .button_favorite_comment2{
//         border: 1px solid gray;
//         border-radius: 10px;
//         margin: 20px;
//         color: black;
        
        
//     }
//     .button_favorite_comment3{
//         border: 1px solid gray;
//         border-radius: 10px;
//         margin: 20px;
//         color: white;
//         background-color: blue;
        
//     }
    
//   }



<div>
<iframe src='https://www.youtube.com/embed/OrvbP_NXw2U'
frameborder='0'
allow='autoplay; encrypted-media'
allowfullscreen
title='video'
/>
</div>








import React from "react";
import { useState } from "react";

import Helmet from "../components/Helmet";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import avt from "../asset/avatar.jpg";

import {
  Button,
  IconButton,
  LinearProgress,
  Typography,
  Popper,
  MenuItem,
  MenuList,
} from "@mui/material";
import useWindowScrollPositions from "../hooks/useWindowScrollPositions";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
import im from "../asset/background.png";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import Instagram from "@mui/icons-material/Instagram";
import YouTube from "@mui/icons-material/YouTube";
import Twitter from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
import HideSourceIcon from "@mui/icons-material/HideSource";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import G from "../components/Grid";
import { Divider } from "@mui/material";
import img1 from "../asset/avatar.jpg";
import img2 from "../asset/Kevin_De_Bruyne.jpg";
import img3 from "../asset/Naymar-and-Nike-Split.jpg";
import img4 from "../asset/Kylian_Mbappe.jpg";
import img5 from "../asset/Lionel_Messi.jpg";
import img6 from "../asset/Home1.jpg";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import PropTypes from "prop-types";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";

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

const AddPost1 = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [imgpost, setImgpost] = useState({
    profileImg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
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

  return (
    <Helmet title="Home">
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open dialog
        </Button>

        <BootstrapDialog
          PaperProps={{
            className: "frame_paper_dialog1",
          }}
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            className="title_dialogtitle_addpost"
            onClose={handleClose}
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
            <Button className="button_post_photo" autoFocus>
             Add Post
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
    </Helmet>
  );
};

export default AddPost1;
