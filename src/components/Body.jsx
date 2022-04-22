import React from "react";

import { Button, Typography } from "@mui/material";

import { Divider } from "@mui/material";

const Body = () => {
  return (
    <div className="frame_left_body">
      <div style={{ margin: "20px" }}>
        <Typography className="content_body">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure vel
          officiis ipsum placeat itaque neque dolorem modi perspiciatis dolor
          distinctio veritatis sapiente, minima corrupti dolores necessitatibus
          suscipit accusantium dignissimos culpa cumque.
        </Typography>
        <Typography className="content_body">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </Typography>
        <Typography className="content_body">
          1. We want everything to look good out of the box. <br />
          2. Really just the first reason, that's the whole point of the plugin.
          <br />
          3. Here's a third pretend reason though a list with three items looks
          more realistic than a list with two items.
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
          <Typography className="content_body1">
            "Typography is pretty important if you don't want your stuff to look
            like trash. Make it good then it won't be bad."
          </Typography>
        </div>
        <Typography className="content_body">
          It's probably important that images look okay here by default as well:
        </Typography>
        <img
          className="img_body"
          alt="new"
          src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
        />
        <Typography className="content_body">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure vel
          officiis ipsum placeat itaque neque dolorem modi perspiciatis dolor
          distinctio veritatis sapiente
        </Typography>
        <Typography className="content_body">
          Now I'm going to show you an example of an unordered list to make sure
          that looks good, too: So here is the first item in this list. In this
          example we're keeping the items short. Later, we'll use longer, more
          complex list items. And that's the end of this section.
        </Typography>
        <Typography component="h" className="content_tittle_body">
          Code should look okay by default.
        </Typography>
        <Typography className="content_body">
          I think most people are going to use highlight.js or Prism or
          something if they want to style their code blocks but it wouldn't hurt
          to make them look okay out of the box, even with no syntax
          highlighting. What I've written here is probably long enough, but
          adding this final sentence can't hurt.
        </Typography>
        <img
          className="img_body"
          alt="new"
          src="https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g"
        />

        <Typography className="content_body">
          Hopefully that looks good enough to you.
        </Typography>

        <Typography component="h" className="content_tittle_body">
          We still need to think about stacked headings though.
          <br />
          <Typography
            sx={{ fontStyle: "oblique" }}
            className="content_tittle_body"
          >
            {" "}
            Let's make sure we don't screw that up with "h4" elements, either.
          </Typography>
        </Typography>
        <Typography className="content_body">
          Phew, with any luck we have styled the headings above this text and
          they look pretty good. Let's add a closing paragraph here so things
          end with a decently sized block of text. I can't explain why I want
          things to end that way but I have to assume it's because I think
          things will look weird or unbalanced if there is a heading too close
          to the end of the document. What I've written here is probably long
          enough, but adding this final sentence can't hurt.
        </Typography>
        <div style={{ display: "flex" }}>
          <Button className="button_body_bottom">Garden</Button>
          <Button className="button_body_bottom">jewelry</Button>
          <Button className="button_body_bottom">Tools</Button>
        </div>
      </div>
      <Divider sx={{ margin: "20px", marginTop: "70px" }} />
    </div>
  );
};

export default Body;
