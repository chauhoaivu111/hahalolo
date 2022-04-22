import React from "react";
import Paper from "@mui/material/Paper";
import { Button, IconButton, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
import G from "../components/Grid";

import img2 from "../asset/Kevin_De_Bruyne.jpg";
import img3 from "../asset/Naymar-and-Nike-Split.jpg";
import img4 from "../asset/Kylian_Mbappe.jpg";
import img5 from "../asset/Lionel_Messi.jpg";
// import img6 from "https://i.picsum.photos/id/1033/2048/1365.jpg?hmac=zEuPfX7t6U866nzXjWF41bf-uxkKOnf1dDrHXmhcK-Q"

const Related_posts = () => {
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
              style={{ backgroundImage: `url(${img2})` }}
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
              style={{ backgroundImage: `url(${img3})` }}
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
              style={{ backgroundImage: `url(${img4})` }}
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
              style={{ backgroundImage: `url(${img5})` }}
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
    </div>
  );
};

export default Related_posts;
