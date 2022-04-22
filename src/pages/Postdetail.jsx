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
import View from "../components/View";
import Body from "../components/Body";

import Comment from "../components/Comment";

import Related_posts from "../components/Related_posts";
import Moreauthor from "../components/Moreauthor";

const Postdetail = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    let computeProgress = () => {
      // The scrollTop gives length of window that has been scrolled
      const scrolled = document.documentElement.scrollTop;
      // scrollHeight gives total length of the window and
      // The clientHeight gives the length of viewport
      const scrollLength =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = `${(100 * scrolled) / scrollLength}`;

      setProgress(progress);
    };

    // Adding event listener on mounting
    window.addEventListener("scroll", computeProgress);

    // Removing event listener upon unmounting
    return () => window.removeEventListener("scroll", computeProgress);
  });

  const { scrollX, scrollY } = useWindowScrollPositions();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setanchorEl1(null);
  };

  const open = Boolean(anchorEl);

  const [anchorEl1, setanchorEl1] = useState(null);

  const handleClick1 = (event) => {
    setanchorEl1(anchorEl1 ? null : event.currentTarget);
    setAnchorEl(null);
  };
  const open1 = Boolean(anchorEl1);
  // /------------------------------------------------------------------------------------------------------------------------------/
  return (
    <Helmet title="Postdetail">
      <div className="main_post">
        <div className="main_frame_Postdetails">
          <Paper
            sx={{
              backgroundColor: "red",
              backgroundImage: `url(${im})`,
              height: "400px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="frame_Top_gallary">
              <Button className="button_gallary">Garden</Button>
              <Button className="button_gallary2">Jewelry</Button>
              <div className="frame_title_postdetail">
                <Typography className="text_title_postdetail">
                  Quiet ingenuity: 120,000 lunches and counting
                </Typography>
              </div>
              <hr className="underline_postdetail" />
              <div style={{ marginTop: "2%" }}>
                <Stack direction="row" spacing={2} sx={{ color: "white" }}>
                  <Avatar alt="Remy Sharp" src={avt} />
                  <div className="frame_IconbuttonRight">
                    <div>
                      <Typography>Cristiano Ronaldo</Typography>

                      <Typography>May 20, 2021 · 6 min read</Typography>
                    </div>

                    <div className="frame_button_right">
                      <Button className="button_favorite">
                        <FavoriteIcon className="icon_favorite" />
                        220
                      </Button>
                      <Button className="button_chat">
                        <ChatOutlinedIcon className="icon_chat" />
                        12
                      </Button>
                      |
                      <IconButton
                        className="Button_share"
                        sx={{ backgroundColor: "rgba(212, 248, 255, 0.1)" }}
                        onClick={handleClick}
                      >
                        <ShareOutlinedIcon
                          sx={{ color: "white" }}
                          className="icon_share"
                        />
                      </IconButton>
                      <Popper
                        open={open}
                        anchorEl={anchorEl}
                        sx={{ position: "absoluted" }}
                      >
                        <Box className="popper_box">
                          <MenuItem
                            sx={{ color: "black" }}
                            className="menuhover"
                          >
                            <FacebookIcon />
                            <Typography sx={{ marginLeft: "30px" }}>
                              {" "}
                              Facebook{" "}
                            </Typography>
                          </MenuItem>
                          <MenuItem
                            sx={{ color: "black" }}
                            className="menuhover"
                          >
                            <Twitter />
                            <Typography sx={{ marginLeft: "30px" }}>
                              {" "}
                              Twitter{" "}
                            </Typography>
                          </MenuItem>
                          <MenuItem
                            sx={{ color: "black" }}
                            className="menuhover"
                          >
                            <Instagram />
                            <Typography sx={{ marginLeft: "30px" }}>
                              {" "}
                              Instagram{" "}
                            </Typography>
                          </MenuItem>
                        </Box>
                      </Popper>
                      <IconButton
                        className="Button_share"
                        sx={{ backgroundColor: "rgba(212, 248, 255, 0.1)" }}
                      >
                        <BookmarkAddedOutlinedIcon
                          sx={{ color: "white" }}
                          className="icon_share"
                        />
                      </IconButton>
                      <IconButton
                        className="Button_share"
                        sx={{ backgroundColor: "rgba(212, 248, 255, 0.1)" }}
                      >
                        <MoreHorizOutlinedIcon
                          sx={{ color: "white" }}
                          className="icon_share"
                          onClick={handleClick1}
                        />
                      </IconButton>
                      <Popper open={open1} anchorEl={anchorEl1}>
                        <Box className="popper_box">
                          <MenuItem
                            sx={{ color: "black" }}
                            className="menuhover"
                          >
                            <ContentCopyIcon />
                            <Typography sx={{ marginLeft: "30px" }}>
                              {" "}
                              Copy{" "}
                            </Typography>
                          </MenuItem>
                          <MenuItem
                            sx={{ color: "black" }}
                            className="menuhover"
                          >
                            <MarkChatUnreadOutlinedIcon />
                            <Typography sx={{ marginLeft: "30px" }}>
                              {" "}
                              Comment this article{" "}
                            </Typography>
                          </MenuItem>
                          <MenuItem
                            sx={{ color: "black" }}
                            className="menuhover"
                          >
                            <HideSourceIcon />
                            <Typography sx={{ marginLeft: "30px" }}>
                              {" "}
                              Hide this author{" "}
                            </Typography>
                          </MenuItem>

                          <MenuItem
                            sx={{ color: "black" }}
                            className="menuhover"
                          >
                            <FlagOutlinedIcon />
                            <Typography sx={{ marginLeft: "30px" }}>
                              {" "}
                              Report this article{" "}
                            </Typography>
                          </MenuItem>
                        </Box>
                      </Popper>
                      <div></div>
                    </div>
                  </div>
                </Stack>
              </div>
            </div>
          </Paper>

          {/* -------------------------------------------taskbar_header--------------------------------------------------------------- */}

          <div
            style={{
              display: scrollY > 400 ? "block" : "none",
            }}
            className="taskbar"
          >
            <div
              style={{
                width: "1250px",
                height: "40px",
                margin: "auto",
                marginTop: "13px",
                display: "flex",
              }}
            >
              <Avatar alt="Remy Sharp" src={avt} sx={{ marginLeft: "10px" }} />
              <div className="frame_elemet_taskbar">
                <Typography className="title_taskbar">
                  Quiet ingenuity: 120,000 lunches and counting
                </Typography>
              </div>
              <Button className="button_favorite1" sx={{ marginLeft: "15%" }}>
                <FavoriteIcon sx={{ color: "red" }} />
                220
              </Button>

              <IconButton className="Button_share1">
                <ShareOutlinedIcon
                  sx={{ color: "white" }}
                  className="icon_share"
                  onClick={handleClick}
                />
              </IconButton>
              <IconButton
                // className="Button_share"
                sx={{ marginLeft: "5px", marginRight: "5px" }}
              >
                <BookmarkAddedOutlinedIcon
                  sx={{ color: "white" }}
                  className="icon_share"
                />
              </IconButton>

              <IconButton className="Button_share" onClick={handleClick1}>
                <MoreHorizOutlinedIcon
                  sx={{ color: "white" }}
                  className="icon_share"
                />
              </IconButton>

              <Typography
                sx={{ color: "white", paddingTop: "3px", fontSize: "20px" }}
              >
                |
              </Typography>
              <Popper open={open1} anchorEl={anchorEl1}>
                <Box className="popper_box">
                  <MenuItem sx={{ color: "black" }} className="menuhover">
                    <ContentCopyIcon />
                    <Typography sx={{ marginLeft: "30px" }}> Copy </Typography>
                  </MenuItem>
                  <MenuItem sx={{ color: "black" }} className="menuhover">
                    <MarkChatUnreadOutlinedIcon />
                    <Typography sx={{ marginLeft: "30px" }}>
                      {" "}
                      Comment this article{" "}
                    </Typography>
                  </MenuItem>
                  <MenuItem sx={{ color: "black" }} className="menuhover">
                    <HideSourceIcon />
                    <Typography sx={{ marginLeft: "30px" }}>
                      {" "}
                      Hide this author{" "}
                    </Typography>
                  </MenuItem>

                  <MenuItem sx={{ color: "black" }} className="menuhover">
                    <FlagOutlinedIcon />
                    <Typography sx={{ marginLeft: "30px" }}>
                      {" "}
                      Report this article{" "}
                    </Typography>
                  </MenuItem>
                </Box>
              </Popper>
              <IconButton
                sx={{
                  borderRadius: "100%",
                  height: "100%",
                  width: "40px",
                  color: "white",
                  marginLeft: "1%",
                  backgroundColor: "rgba(212, 248, 255, 0.1)",
                }}
              >
                {" "}
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{
                  borderRadius: "100%",
                  height: "100%",
                  width: "40px",
                  color: "white",
                  marginLeft: "1%",
                  backgroundColor: "rgba(212, 248, 255, 0.1)",
                }}
              >
                {" "}
                <Instagram />
              </IconButton>
              <IconButton
                sx={{
                  borderRadius: "100%",
                  height: "100%",
                  width: "40px",
                  color: "white",
                  marginLeft: "1%",
                  backgroundColor: "rgba(212, 248, 255, 0.1)",
                }}
              >
                {" "}
                <Twitter />
              </IconButton>
              <IconButton
                sx={{
                  borderRadius: "100%",
                  height: "100%",
                  width: "40px",
                  color: "white",
                  marginLeft: "1%",
                  backgroundColor: "rgba(212, 248, 255, 0.1)",
                }}
              >
                {" "}
                <YouTube />
              </IconButton>
            </div>

            <div
              style={{ position: "fixed", width: "100%", marginTop: "7px" }}
              className="frame_linear"
            >
              <LinearProgress
                variant="buffer"
                color="success"
                value={progress}
                className="linear"
              />
            </div>
          </div>

          <div className="frame_main_body_postdetail">
            <G col={2} smCol={1} mdCol={1} gap={10}>
              <div className="frame_left_body">
                <Body />

                <Comment />
                <Comment />
                <Comment />

                <Button className="button_full_comment">
                  View Full comment (+117 comments){" "}
                </Button>
              </div>

              <View />
            </G>
          </div>
        </div>
      </div>

      <div className="frame_bottom_postdetail">
        <Typography className="first_title_bottom">Related posts </Typography>

        <div className="main_frame_element_bottom">
          <Related_posts />

          <div style={{ marginTop: "10%" }}>
            {" "}
            <Typography sx={{ fontSize: "30px", fontWeight: "600" }}>
              More from author
            </Typography>
          </div>

          <Moreauthor />
        </div>
      </div>
    </Helmet>
  );
};

export default Postdetail;
