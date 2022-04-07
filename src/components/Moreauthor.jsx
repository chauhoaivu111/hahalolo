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
import TextareaAutosize from "@mui/material/TextareaAutosize";
import img6 from "../asset/151358_01leicester1-silo-note-master675.jpg"
import img7 from "../asset/argentina_venezuela.jpg"
import img8 from "../asset/danh-sach-world-cup-2022-9928.jpeg"
import img9 from "../asset/psg-02-1725.jpg"
const Moreauthor = () => {
  return (
    <div>
      <G col={4}  mdCol={2} smCol={1} gap={20}>
        <div>
          <Paper
            className="main_paper_more_author1"
            sx={{ borderRadius: "20px", backgroundImage:  `url(${img6})` }}
          >
            <div className="active_button_moreauthor">
              <div style={{ display: "flex", marginTop: "10px" }}>
                <div className="frame_two_button_left_related_post">
                  <Button className="button_favorite_related_post">
                    <FavoriteIcon /> 1.19k
                  </Button>
                  <Button className="button_favorite_related_post1">
                    <ChatOutlinedIcon /> 39{" "}
                  </Button>
                </div>

                <div>
                  <IconButton sx={{ backgroundColor: "white" }}>
                    <BookmarkAddedOutlinedIcon />
                  </IconButton>
                </div>
              </div>
            </div>

            <div className="active_button_moreauthor2">
              
            </div>

            <div style={{paddingTop:"180px",marginBottom:"10px",marginLeft:"20px"}}>

              <Button sx={{backgroundColor:"#E4F3A6",color:"#7C3603"}}>Industrial</Button>
            </div>
            <div>
              <Typography className="content_related_post1" >news tools and  advocay support Black pregnant an..</Typography>
            </div>
            <div style={{marginLeft:"20px",marginTop:"5px"}}> <Typography className="frame_title_related_post">Kevin De Bruyne - May 20.2022</Typography></div>
          </Paper>
        </div>
        <div>
          <Paper
            className="main_paper_more_author1"
            sx={{ borderRadius: "20px", backgroundImage: `url(${img7})` }}
          >
            <div className="active_button_moreauthor">
              <div style={{ display: "flex", marginTop: "10px" }}>
                <div className="frame_two_button_left_related_post">
                  <Button className="button_favorite_related_post">
                    <FavoriteIcon /> 1.19k
                  </Button>
                  <Button className="button_favorite_related_post1">
                    <ChatOutlinedIcon /> 39{" "}
                  </Button>
                </div>

                <div>
                  <IconButton sx={{ backgroundColor: "white" }}>
                    <BookmarkAddedOutlinedIcon />
                  </IconButton>
                </div>
              </div>
            </div>

            <div className="active_button_moreauthor2">
              
            </div>

            <div style={{paddingTop:"180px",marginBottom:"10px",marginLeft:"20px"}}>

              <Button sx={{backgroundColor:"#E4F3A6",color:"#7C3603"}}>Industrial</Button>
            </div>
            <div>
              <Typography className="content_related_post1" >news tools and  advocay support Black pregnant an..</Typography>
            </div>
            <div style={{marginLeft:"20px",marginTop:"5px"}}> <Typography className="frame_title_related_post">Kevin De Bruyne - May 20.2022</Typography></div>
          </Paper>
        </div>
        <div>
          <Paper
            className="main_paper_more_author1"
            sx={{ borderRadius: "20px", backgroundImage: `url(${img8})` }}
          >
            <div className="active_button_moreauthor">
              <div style={{ display: "flex", marginTop: "10px" }}>
                <div className="frame_two_button_left_related_post">
                  <Button className="button_favorite_related_post">
                    <FavoriteIcon /> 1.19k
                  </Button>
                  <Button className="button_favorite_related_post1">
                    <ChatOutlinedIcon /> 39{" "}
                  </Button>
                </div>

                <div>
                  <IconButton sx={{ backgroundColor: "white" }}>
                    <BookmarkAddedOutlinedIcon />
                  </IconButton>
                </div>
              </div>
            </div>

            <div className="active_button_moreauthor2">
              
            </div>

            <div style={{paddingTop:"180px",marginBottom:"10px",marginLeft:"20px"}}>

              <Button sx={{backgroundColor:"#E4F3A6",color:"#7C3603"}}>Industrial</Button>
            </div>
            <div>
              <Typography className="content_related_post1" >news tools and  advocay support Black pregnant an..</Typography>
            </div>
            <div style={{marginLeft:"20px",marginTop:"5px"}}> <Typography className="frame_title_related_post">Kevin De Bruyne - May 20.2022</Typography></div>
          </Paper>
        </div>
        <div>
          <Paper
            className="main_paper_more_author1"
            sx={{ borderRadius: "20px", backgroundImage: `url(${img9})` }}
          >
            <div className="active_button_moreauthor">
              <div style={{ display: "flex", marginTop: "10px" }}>
                <div className="frame_two_button_left_related_post">
                  <Button className="button_favorite_related_post">
                    <FavoriteIcon /> 1.19k
                  </Button>
                  <Button className="button_favorite_related_post1">
                    <ChatOutlinedIcon /> 39{" "}
                  </Button>
                </div>

                <div>
                  <IconButton sx={{ backgroundColor: "white" }}>
                    <BookmarkAddedOutlinedIcon />
                  </IconButton>
                </div>
              </div>
            </div>

            <div className="active_button_moreauthor2">
              
            </div>

            <div style={{paddingTop:"180px",marginBottom:"10px",marginLeft:"20px"}}>

              <Button sx={{backgroundColor:"#E4F3A6",color:"#7C3603"}}>Industrial</Button>
            </div>
            <div>
              <Typography className="content_related_post1" >news tools and  advocay support Black pregnant an..</Typography>
            </div>
            <div style={{marginLeft:"20px",marginTop:"5px"}}> <Typography className="frame_title_related_post">Kevin De Bruyne - May 20.2022</Typography></div>
          </Paper>
        </div>
      </G>
    </div>
  );
};

export default Moreauthor;
