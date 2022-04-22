import React from "react";

import Helmet from "../components/Helmet";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Typography } from "@mui/material";

import Stack from "@mui/material/Stack";

import G from "../components/Grid";

import img1 from "../asset/avatar.jpg";
import img2 from "../asset/Kevin_De_Bruyne.jpg";
import img3 from "../asset/Naymar-and-Nike-Split.jpg";
import img4 from "../asset/Kylian_Mbappe.jpg";
import img5 from "../asset/Lionel_Messi.jpg";
import img6 from "../asset/Home1.jpg";

import Dialog2 from "../components/Dialog2";
import Selected from "../components/Selected";

import HomePost from "../components/HomePost";
import Pagination from "@mui/material/Pagination";
import Topic from "../components/Topic";
import SlideShow from "../components/SlideShow";

import img12 from "../asset/img12.webp";
import img13 from "../asset/img13.webp";

import img21 from "../asset/img21.jpg";
import img22 from "../asset/img22.jpg";

import img24 from "../asset/img24.png";

import img26 from "../asset/img26.webp";

import img29 from "../asset/img29.jpg";
import img30 from "../asset/img30.webp";

import img33 from "../asset/img33.png";

import Newsletters from "../components/Newsletters";
import Dialog1 from "../components/Dialog1";

const dataTop = [
  { url: img21, url1: img1, name: "Ronaldo" },
  { url: img22, url1: img2, name: "De Bruyne" },
  { url: img24, url1: img3, name: "Neymar" },
  { url: img30, url1: img4, name: "Mbappé" },
  { url: img29, url1: img5, name: "Messi" },
  { url: img33, url1: img13, name: "Kendavis" },
  { url: img26, url1: img12, name: "Drew" },
];

const Home = () => {
  return (
    <Helmet title="Home">
      <div className="main_frame_Home">
        <div
          className="img_background_top"
          style={{ backgroundImage: `url(${img6})` }}
        >
          <Typography className="title_background_Home">Garden</Typography>
          <Typography className="title_background_Home1">
            {" "}
            13 Articles
          </Typography>
        </div>

        <G col={2} smCol={1}>
          <div className="frame_selected_right1">
            <Dialog1 />
            <Dialog2 />
          </div>
          <div className="frame_selected_right">
            <Selected />
          </div>
        </G>
        <div>
          <HomePost />
        </div>

        <div className="frame_stack">
          <Stack spacing={2}>
            <Pagination
              className="frame_stack1"
              size="large"
              count={5}
              color="primary"
            />
          </Stack>
        </div>

        <div className="frame_trending_topic">
          <Topic />
        </div>
        <div className="slideShow_more_author">
          <div className="Second_slideShow_more_author">
            <div className="main_frame_video">
              <Typography className="title_video_trending">
                Top elite authors
              </Typography>
              <Typography className="title_video_trending1">
                Discover over our eliter writers
              </Typography>
            </div>

            <SlideShow data={dataTop} />
          </div>
        </div>

        <div className="frame_newsletter_home">
          <Newsletters />
        </div>
      </div>
    </Helmet>
  );
};

export default Home;
