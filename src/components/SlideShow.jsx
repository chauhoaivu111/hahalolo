import { Avatar, IconButton, Paper, Typography } from "@mui/material";

import React from "react";
import Slider from "react-slick";

import LeftArrow from "../asset/left-arrow.svg";
import RightArrow from "../asset/right-arrow.svg";

const SlideShow = ({ data }) => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <IconButton className="style_arrow_auhtor3" alt="prevArrow">
      <img
        src={LeftArrow}
        alt="prevArrow"
        {...props}
        className="style_arrow_auhtor_children"
      />
    </IconButton>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <IconButton className="style_arrow_auhtor4" alt="nextArrow">
      <img
        src={RightArrow}
        alt="nextArrow"
        {...props}
        className="style_arrow_auhtor_children"
      />
    </IconButton>
  );
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,

    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  const settings1 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,

    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  const settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,

    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <div>
      {/* display desktop */}
      <div className="frame_slideshow">
        <Slider {...settings} style={{ display: "flex", width: "1393px" }}>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <Paper className="paper_each_frame_slideshow">
                  <img src={item.url} className="img_slideshow" />
                  <div className="style_avatar_name_center">
                    <Avatar src={item.url1} className="avatar_author_elite" />
                    <Typography className="style_name_author_elite">
                      {item.name}
                    </Typography>
                    <Typography>@Author Job</Typography>
                  </div>
                </Paper>
              </div>
            );
          })}
        </Slider>
      </div>

      {/* display moblie */}

      <div className="frame_slideshow1">
        <Slider {...settings1} style={{ display: "flex", width: "330px" }}>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <Paper className="paper_each_frame_slideshow1">
                  <img src={item.url} className="img_slideshow1" />
                  <div className="style_avatar_name_center1">
                    <Avatar src={item.url1} className="avatar_author_elite" />
                    <Typography className="style_name_author_elite">
                      {item.name}
                    </Typography>
                    <Typography>@Author Job</Typography>
                  </div>
                </Paper>
              </div>
            );
          })}
        </Slider>
      </div>

      {/* display tablet */}

      <div className="frame_slideshow2">
        <Slider {...settings2} style={{ display: "flex", width: "730px" }}>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <Paper className="paper_each_frame_slideshow2">
                  <img src={item.url} className="img_slideshow2" />
                  <div className="style_avatar_name_center2">
                    <Avatar src={item.url1} className="avatar_author_elite" />
                    <Typography className="style_name_author_elite">
                      {item.name}
                    </Typography>
                    <Typography>@Author Job</Typography>
                  </div>
                </Paper>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SlideShow;
