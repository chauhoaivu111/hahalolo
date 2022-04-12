
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
import imgpostbackgound from "../asset/post_img.jpg"
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