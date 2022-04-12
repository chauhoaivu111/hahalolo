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
import img11 from "../asset/img11.png";
import img12 from "../asset/img12.webp";
import img13 from "../asset/img13.webp";
import img14 from "../asset/img14.jpg";
import img15 from "../asset/img15.png";
import img16 from "../asset/img16.jpg";
import img17 from "../asset/img17.jpg";
import img18 from "../asset/img18.png";
import img19 from "../asset/img19.png";
import img20 from "../asset/img20.jpg";
import img21 from "../asset/img21.jpg";
import img22 from "../asset/img22.jpg";
import img23 from "../asset/img23.jpg";
import img24 from "../asset/img24.png";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const HomePost = () => {
  return (
    <div>
      <G col={4} mdCol={2} smCol={1} gap={20}>
        <div>
          <Paper
            className="main_paper_related_post"
            sx={{ borderRadius: "20px" }}
          >
            <div
              className="top_img_related_post"
              style={{ backgroundImage: `url(${img11})` }}
            />

            <div className="frame_avatar_title_related_post">
              <Avatar src={img2} className="frame_avatar_related_post"></Avatar>
              <Typography className="frame_title_related_post">
                Kevin De Bruyne - May 20.2022
              </Typography>
            </div>

            <di>
              <Typography className="content_related_post">
                To cool datacenter servers, Microsoft turn to boiling liqui...
              </Typography>
            </di>
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
                <IconButton>
                  <BookmarkAddedOutlinedIcon />
                </IconButton>
              </div>
            </div>
          </Paper>
        </div>
        <div>
          <Paper
            className="main_paper_related_post"
            sx={{ borderRadius: "20px" }}
          >
            <div
              className="top_img_related_post"
              style={{ backgroundImage: `url(${img12})` }}
            />

            <div className="frame_avatar_title_related_post">
              <Avatar src={img3} className="frame_avatar_related_post"></Avatar>
              <Typography className="frame_title_related_post">
                Naymar - May 20.2022
              </Typography>
            </div>

            <di>
              <Typography className="content_related_post">
                To cool datacenter servers, Microsoft turn to boiling liqui...
              </Typography>
            </di>
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
                <IconButton>
                  <BookmarkAddedOutlinedIcon />
                </IconButton>
              </div>
            </div>
          </Paper>
        </div>
        <div>
          <Paper
            className="main_paper_related_post"
            sx={{ borderRadius: "20px" }}
          >
            <div
              className="top_img_related_post"
              style={{ backgroundImage: `url(${img13})` }}
            />

            <div className="frame_avatar_title_related_post">
              <Avatar src={img4} className="frame_avatar_related_post"></Avatar>
              <Typography className="frame_title_related_post">
                Kylian Mbappe - May 20.2022
              </Typography>
            </div>

            <di>
              <Typography className="content_related_post">
                To cool datacenter servers, Microsoft turn to boiling liqui...
              </Typography>
            </di>
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
                <IconButton>
                  <BookmarkAddedOutlinedIcon />
                </IconButton>
              </div>
            </div>
          </Paper>
        </div>
        <div>
          <Paper
            className="main_paper_related_post"
            sx={{ borderRadius: "20px" }}
          >
            <div
              className="top_img_related_post"
              style={{ backgroundImage: `url(${img14})` }}
            />

            <div className="frame_avatar_title_related_post">
              <Avatar src={img5} className="frame_avatar_related_post"></Avatar>
              <Typography className="frame_title_related_post">
                Lionel Messi - May 20.2022
              </Typography>
            </div>

            <di>
              <Typography className="content_related_post">
                To cool datacenter servers, Microsoft turn to boiling liqui...
              </Typography>
            </di>
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
                <IconButton>
                  <BookmarkAddedOutlinedIcon />
                </IconButton>
              </div>
            </div>
          </Paper>
        </div>
        <div>
          <Paper
            className="main_paper_related_post"
            sx={{ borderRadius: "20px" }}
          >
            <div
              className="top_img_related_post"
              style={{ backgroundImage: `url(${img15})` }}
            />

            <div className="frame_avatar_title_related_post">
              <Avatar src={img5} className="frame_avatar_related_post"></Avatar>
              <Typography className="frame_title_related_post">
                Lionel Messi - May 20.2022
              </Typography>
            </div>

            <di>
              <Typography className="content_related_post">
                To cool datacenter servers, Microsoft turn to boiling liqui...
              </Typography>
            </di>
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
                <IconButton>
                  <BookmarkAddedOutlinedIcon />
                </IconButton>
              </div>
            </div>
          </Paper>
        </div>
        <div>
          <Paper
            className="main_paper_related_post"
            sx={{ borderRadius: "20px" }}
          >
            <div
              className="top_img_related_post"
              style={{ backgroundImage: `url(${img16})` }}
            />

            <div className="frame_avatar_title_related_post">
              <Avatar src={img5} className="frame_avatar_related_post"></Avatar>
              <Typography className="frame_title_related_post">
                Lionel Messi - May 20.2022
              </Typography>
            </div>

            <di>
              <Typography className="content_related_post">
                To cool datacenter servers, Microsoft turn to boiling liqui...
              </Typography>
            </di>
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
                <IconButton>
                  <BookmarkAddedOutlinedIcon />
                </IconButton>
              </div>
            </div>
          </Paper>
        </div>
        <div>
          <Paper
            className="main_paper_related_post"
            sx={{ borderRadius: "20px" }}
          >
            <div
              className="top_img_related_post"
              style={{ backgroundImage: `url(${img17})` }}
            />

            <div className="frame_avatar_title_related_post">
              <Avatar src={img5} className="frame_avatar_related_post"></Avatar>
              <Typography className="frame_title_related_post">
                Lionel Messi - May 20.2022
              </Typography>
            </div>

            <di>
              <Typography className="content_related_post">
                To cool datacenter servers, Microsoft turn to boiling liqui...
              </Typography>
            </di>
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
                <IconButton>
                  <BookmarkAddedOutlinedIcon />
                </IconButton>
              </div>
            </div>
          </Paper>
        </div>
        <div>
          <Paper
            className="main_paper_related_post"
            sx={{ borderRadius: "20px" }}
          >
            <div
              className="top_img_related_post"
              style={{ backgroundImage: `url(${img18})` }}
            />

            <div className="frame_avatar_title_related_post">
              <Avatar src={img5} className="frame_avatar_related_post"></Avatar>
              <Typography className="frame_title_related_post">
                Lionel Messi - May 20.2022
              </Typography>
            </div>

            <di>
              <Typography className="content_related_post">
                To cool datacenter servers, Microsoft turn to boiling liqui...
              </Typography>
            </di>
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
                <IconButton>
                  <BookmarkAddedOutlinedIcon />
                </IconButton>
              </div>
            </div>
          </Paper>
        </div>
        <div>
          <Paper
            className="main_paper_related_post"
            sx={{ borderRadius: "20px" }}
          >
            <div
              className="top_img_related_post"
              style={{ backgroundImage: `url(${img24})` }}
            />

            <div className="frame_avatar_title_related_post">
              <Avatar src={img5} className="frame_avatar_related_post"></Avatar>
              <Typography className="frame_title_related_post">
                Lionel Messi - May 20.2022
              </Typography>
            </div>

            <di>
              <Typography className="content_related_post">
                To cool datacenter servers, Microsoft turn to boiling liqui...
              </Typography>
            </di>
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
                <IconButton>
                  <BookmarkAddedOutlinedIcon />
                </IconButton>
              </div>
            </div>
          </Paper>
        </div>
        <div>
          <Paper
            className="main_paper_related_post"
            sx={{ borderRadius: "20px" }}
          >
            <div
              className="top_img_related_post"
              style={{ backgroundImage: `url(${img20})` }}
            />

            <div className="frame_avatar_title_related_post">
              <Avatar src={img5} className="frame_avatar_related_post"></Avatar>
              <Typography className="frame_title_related_post">
                Lionel Messi - May 20.2022
              </Typography>
            </div>

            <di>
              <Typography className="content_related_post">
                To cool datacenter servers, Microsoft turn to boiling liqui...
              </Typography>
            </di>
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
                <IconButton>
                  <BookmarkAddedOutlinedIcon />
                </IconButton>
              </div>
            </div>
          </Paper>
        </div>
        <div>
          <Paper
            className="main_paper_related_post"
            sx={{ borderRadius: "20px" }}
          >
            <div
              className="top_img_related_post"
              style={{ backgroundImage: `url(${img21})` }}
            />

            <div className="frame_avatar_title_related_post">
              <Avatar src={img5} className="frame_avatar_related_post"></Avatar>
              <Typography className="frame_title_related_post">
                Lionel Messi - May 20.2022
              </Typography>
            </div>

            <di>
              <Typography className="content_related_post">
                To cool datacenter servers, Microsoft turn to boiling liqui...
              </Typography>
            </di>
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
                <IconButton>
                  <BookmarkAddedOutlinedIcon />
                </IconButton>
              </div>
            </div>
          </Paper>
        </div>
        <div>
          <Paper
            className="main_paper_related_post"
            sx={{ borderRadius: "20px" }}
          >
            <div
              className="top_img_related_post"
              style={{ backgroundImage: `url(${img22})` }}
            />

            <div className="frame_avatar_title_related_post">
              <Avatar src={img5} className="frame_avatar_related_post"></Avatar>
              <Typography className="frame_title_related_post">
                Lionel Messi - May 20.2022
              </Typography>
            </div>

            <di>
              <Typography className="content_related_post">
                To cool datacenter servers, Microsoft turn to boiling liqui...
              </Typography>
            </di>
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
                <IconButton>
                  <BookmarkAddedOutlinedIcon />
                </IconButton>
              </div>
            </div>
          </Paper>
        </div>
      </G>

      <div className="main_frame_video">
        <Typography className="title_video_trending">
          Top Video Trending
        </Typography>
        <Typography className="title_video_trending1">Discover over 100 Videos</Typography>
      </div>

      <div>
        <G col={4} mdCol={2} smCol={1} gap={20}>
          <div>
            <Paper
              className="main_paper_related_post"
              sx={{ borderRadius: "20px" }}
            >
             
              <div>
                <iframe
                className="top_img_related_post"
                  src="https://www.youtube.com/embed/dTNlcoY14y0"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                />
              </div>

              <div className="frame_avatar_title_related_post">
                <Avatar
                  src={img2}
                  className="frame_avatar_related_post"
                ></Avatar>
                <Typography className="frame_title_related_post">
                  Kevin De Bruyne - May 20.2022
                </Typography>
              </div>

              <di>
                <Typography className="content_related_post">
                  To cool datacenter servers, Microsoft turn to boiling liqui...
                </Typography>
              </di>
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
                  <IconButton>
                    <BookmarkAddedOutlinedIcon />
                  </IconButton>
                </div>
              </div>
            </Paper>
          </div>
          <div>
            <Paper
              className="main_paper_related_post"
              sx={{ borderRadius: "20px" }}
            >
             
              <div>
                <iframe
                className="top_img_related_post"
                  src="https://www.youtube.com/embed/WFnrNcg3DiM"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                />
              </div>

              <div className="frame_avatar_title_related_post">
                <Avatar
                  src={img2}
                  className="frame_avatar_related_post"
                ></Avatar>
                <Typography className="frame_title_related_post">
                  Kevin De Bruyne - May 20.2022
                </Typography>
              </div>

              <di>
                <Typography className="content_related_post">
                  To cool datacenter servers, Microsoft turn to boiling liqui...
                </Typography>
              </di>
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
                  <IconButton>
                    <BookmarkAddedOutlinedIcon />
                  </IconButton>
                </div>
              </div>
            </Paper>
          </div>
          <div>
            <Paper
              className="main_paper_related_post"
              sx={{ borderRadius: "20px" }}
            >
             
              <div>
                <iframe
                className="top_img_related_post"
                  src="https://www.youtube.com/embed/s9XAtvEKUIo"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                />
              </div>

              <div className="frame_avatar_title_related_post">
                <Avatar
                  src={img2}
                  className="frame_avatar_related_post"
                ></Avatar>
                <Typography className="frame_title_related_post">
                  Kevin De Bruyne - May 20.2022
                </Typography>
              </div>

              <di>
                <Typography className="content_related_post">
                  To cool datacenter servers, Microsoft turn to boiling liqui...
                </Typography>
              </di>
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
                  <IconButton>
                    <BookmarkAddedOutlinedIcon />
                  </IconButton>
                </div>
              </div>
            </Paper>
          </div>
          <div>
            <Paper
              className="main_paper_related_post"
              sx={{ borderRadius: "20px" }}
            >
             
              <div>
                <iframe
                className="top_img_related_post"
                  src="https://www.youtube.com/embed/MVwJmYYBUMc"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                />
              </div>

              <div className="frame_avatar_title_related_post">
                <Avatar
                  src={img2}
                  className="frame_avatar_related_post"
                ></Avatar>
                <Typography className="frame_title_related_post">
                  Kevin De Bruyne - May 20.2022
                </Typography>
              </div>

              <di>
                <Typography className="content_related_post">
                  To cool datacenter servers, Microsoft turn to boiling liqui...
                </Typography>
              </di>
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
                  <IconButton>
                    <BookmarkAddedOutlinedIcon />
                  </IconButton>
                </div>
              </div>
            </Paper>
          </div>
          <div>
            <Paper
              className="main_paper_related_post"
              sx={{ borderRadius: "20px" }}
            >
             
              <div>
                <iframe
                className="top_img_related_post"
                  src="https://www.youtube.com/embed/1RHDhtbqo94"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                />
              </div>

              <div className="frame_avatar_title_related_post">
                <Avatar
                  src={img2}
                  className="frame_avatar_related_post"
                ></Avatar>
                <Typography className="frame_title_related_post">
                  Kevin De Bruyne - May 20.2022
                </Typography>
              </div>

              <di>
                <Typography className="content_related_post">
                  To cool datacenter servers, Microsoft turn to boiling liqui...
                </Typography>
              </di>
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
                  <IconButton>
                    <BookmarkAddedOutlinedIcon />
                  </IconButton>
                </div>
              </div>
            </Paper>
          </div>
          <div>
            <Paper
              className="main_paper_related_post"
              sx={{ borderRadius: "20px" }}
            >
             
              <div>
                <iframe
                className="top_img_related_post"
                  src="https://www.youtube.com/embed/9DDX3US3kss"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                />
              </div>

              <div className="frame_avatar_title_related_post">
                <Avatar
                  src={img2}
                  className="frame_avatar_related_post"
                ></Avatar>
                <Typography className="frame_title_related_post">
                  Kevin De Bruyne - May 20.2022
                </Typography>
              </div>

              <di>
                <Typography className="content_related_post">
                  To cool datacenter servers, Microsoft turn to boiling liqui...
                </Typography>
              </di>
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
                  <IconButton>
                    <BookmarkAddedOutlinedIcon />
                  </IconButton>
                </div>
              </div>
            </Paper>
          </div>
          <div>
            <Paper
              className="main_paper_related_post"
              sx={{ borderRadius: "20px" }}
            >
             
              <div>
                <iframe
                className="top_img_related_post"
                  src="https://www.youtube.com/embed/ZwFA3YMfkoc"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                />
              </div>

              <div className="frame_avatar_title_related_post">
                <Avatar
                  src={img2}
                  className="frame_avatar_related_post"
                ></Avatar>
                <Typography className="frame_title_related_post">
                  Kevin De Bruyne - May 20.2022
                </Typography>
              </div>

              <di>
                <Typography className="content_related_post">
                  To cool datacenter servers, Microsoft turn to boiling liqui...
                </Typography>
              </di>
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
                  <IconButton>
                    <BookmarkAddedOutlinedIcon />
                  </IconButton>
                </div>
              </div>
            </Paper>
          </div>
          <div>
            <Paper
              className="main_paper_related_post"
              sx={{ borderRadius: "20px" }}
            >
             
              <div>
                <iframe
                className="top_img_related_post"
                  src="https://www.youtube.com/embed/_ivIUCSOZ78"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                />
              </div>

              <div className="frame_avatar_title_related_post">
                <Avatar
                  src={img2}
                  className="frame_avatar_related_post"
                ></Avatar>
                <Typography className="frame_title_related_post">
                  Kevin De Bruyne - May 20.2022
                </Typography>
              </div>

              <di>
                <Typography className="content_related_post">
                  To cool datacenter servers, Microsoft turn to boiling liqui...
                </Typography>
              </di>
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
                  <IconButton>
                    <BookmarkAddedOutlinedIcon />
                  </IconButton>
                </div>
              </div>
            </Paper>
          </div>
          <div>
            <Paper
              className="main_paper_related_post"
              sx={{ borderRadius: "20px" }}
            >
             
              <div>
                <iframe
                className="top_img_related_post"
                  src="https://www.youtube.com/embed/p_PQ4VyPDEA"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                />
              </div>

              <div className="frame_avatar_title_related_post">
                <Avatar
                  src={img2}
                  className="frame_avatar_related_post"
                ></Avatar>
                <Typography className="frame_title_related_post">
                  Kevin De Bruyne - May 20.2022
                </Typography>
              </div>

              <di>
                <Typography className="content_related_post">
                  To cool datacenter servers, Microsoft turn to boiling liqui...
                </Typography>
              </di>
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
                  <IconButton>
                    <BookmarkAddedOutlinedIcon />
                  </IconButton>
                </div>
              </div>
            </Paper>
          </div>
          <div>
            <Paper
              className="main_paper_related_post"
              sx={{ borderRadius: "20px" }}
            >
             
              <div>
                <iframe
                className="top_img_related_post"
                  src="https://www.youtube.com/embed/UWdfaNWThnA"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                />
              </div>

              <div className="frame_avatar_title_related_post">
                <Avatar
                  src={img2}
                  className="frame_avatar_related_post"
                ></Avatar>
                <Typography className="frame_title_related_post">
                  Kevin De Bruyne - May 20.2022
                </Typography>
              </div>

              <di>
                <Typography className="content_related_post">
                  To cool datacenter servers, Microsoft turn to boiling liqui...
                </Typography>
              </di>
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
                  <IconButton>
                    <BookmarkAddedOutlinedIcon />
                  </IconButton>
                </div>
              </div>
            </Paper>
          </div>
          <div>
            <Paper
              className="main_paper_related_post"
              sx={{ borderRadius: "20px" }}
            >
             
              <div>
                <iframe
                className="top_img_related_post"
                  src="https://www.youtube.com/embed/CxwJrzEdw1U"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                />
              </div>

              <div className="frame_avatar_title_related_post">
                <Avatar
                  src={img2}
                  className="frame_avatar_related_post"
                ></Avatar>
                <Typography className="frame_title_related_post">
                  Kevin De Bruyne - May 20.2022
                </Typography>
              </div>

              <di>
                <Typography className="content_related_post">
                  To cool datacenter servers, Microsoft turn to boiling liqui...
                </Typography>
              </di>
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
                  <IconButton>
                    <BookmarkAddedOutlinedIcon />
                  </IconButton>
                </div>
              </div>
            </Paper>
          </div>
          <div>
            <Paper
              className="main_paper_related_post"
              sx={{ borderRadius: "20px" }}
            >
             
              <div>
                <iframe
                className="top_img_related_post"
                  src="https://www.youtube.com/embed/F8MN0o6RS9o"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                />
              </div>

              <div className="frame_avatar_title_related_post">
                <Avatar
                  src={img2}
                  className="frame_avatar_related_post"
                ></Avatar>
                <Typography className="frame_title_related_post">
                  Kevin De Bruyne - May 20.2022
                </Typography>
              </div>

              <di>
                <Typography className="content_related_post">
                  To cool datacenter servers, Microsoft turn to boiling liqui...
                </Typography>
              </di>
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
                  <IconButton>
                    <BookmarkAddedOutlinedIcon />
                  </IconButton>
                </div>
              </div>
            </Paper>
          </div>
        </G>
      </div>
    </div>
  );
};

export default HomePost;
