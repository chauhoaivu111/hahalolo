import React from "react";

import { Button, Typography } from "@mui/material";

import img1 from "../asset/avatar.jpg";

import TextareaAutosize from "@mui/material/TextareaAutosize";

const Addcomment = () => {
  return (
    <div>
      <div className="frame_comment">
        <div>
          <img className="img_avatar_comment" alt="new" src={img1} />
        </div>
        <div className="frame_title_comment">
          <Typography>WRITEN BY</Typography>
          <Typography className="size_comment_title">
            Cristiano Ronaldo
          </Typography>
          <Typography className="size_comment_title">
            There's no stopping the tech giant. Apple now opens its 100th store
            in China.There's no stopping the tech giant.Readmore
          </Typography>
        </div>
      </div>

      <div>
        <Typography
          sx={{ fontSize: "15px", fontWeight: "600", margin: "20px" }}
        >
          Responses (14)
        </Typography>
      </div>

      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="Add to discussion"
        className="textarea_comment"
        minRows={6}
      />

      <div style={{ display: "flex" }}>
        <Button
          sx={{
            backgroundColor: "blue",
            color: "white",
            margin: "30px",
            borderRadius: "10px",
            border: "1",
          }}
          className="submit_button"
        >
          Submit
        </Button>
        <Button
          sx={{
            backgroundColor: "white",
            color: "black",
            margin: "30px",
            borderRadius: "10px",
            border: "1px solid gray",
          }}
          className="submit_button"
        >
          Cancle
        </Button>
      </div>
    </div>
  );
};

export default Addcomment;
