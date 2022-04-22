import React from "react";

import { IconButton, Typography } from "@mui/material";

import G from "../components/Grid";

import { TextField } from "@mui/material";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";

const Newsletters = () => {
  return (
    <div className="main_frame_newsletters">
      <G col={2} smCol={1} mdCol={1} gap={10}>
        <div className="frame_left_element_newsletters">
          <div>
            <Typography className="title_newsletters">
              Join our newsletters 🎉{" "}
            </Typography>
            <br />
            <Typography className="sub_title_Newsletters">
              Read and share new perspectives on just about any topic.
              Everyone's welcome.
            </Typography>
          </div>
          <br />

          <div className="frame_01_title">
            <Typography className="button_newsletters">01</Typography>
            <Typography className="title_01_newsletters">
              Get more discount
            </Typography>
          </div>

          <br />
          <div className="frame_01_title">
            <Typography className="button_newsletters1">02</Typography>
            <Typography className="title_01_newsletters">
              Get premium magaizines
            </Typography>
          </div>

          <div>
            <TextField
              sx={{ marginTop: "30px", marginRight: "50px" }}
              //  fullWidth
              margin="normal"
              variant="outlined"
              placeholder="Enter your Email"
              InputProps={{
                style: {
                  borderRadius: 50,
                  paddingLeft: "50px",
                  fontSize: 15,
                },

                className: "text_field",

                endAdornment: (
                  <IconButton>
                    <ArrowForwardSharpIcon />
                  </IconButton>
                ),
              }}
            />
          </div>
        </div>

        <div>
          <img
            src="https://chisnghiax.com/ncmaz/assets/SVG-subcribe2.2e868cd7.png"
            className="style_img_newsletter"
          />
        </div>
      </G>
    </div>
  );
};

export default Newsletters;
