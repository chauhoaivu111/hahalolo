import React from "react";



import Paper from "@mui/material/Paper";

import {
 
  Typography,
 
} from "@mui/material";

import Avatar from "@mui/material/Avatar";

import G from "../components/Grid";

import img25 from "../asset/img25.png";
import img26 from "../asset/img26.webp";
import img27 from "../asset/img27.webp";
import img28 from "../asset/img28.jpg";
import img29 from "../asset/img29.jpg";
import img30 from "../asset/img30.webp";
import img31 from "../asset/img31.jpg";
import img32 from "../asset/img32.jpg";
import img33 from "../asset/img33.png";
import img34 from "../asset/img34.jpg";



const Topic = () => {
  return (
    <div className="main_frame_trending_topic">
      <div>
        <Typography className="title_trending_topics">
          {" "}
          Top trending Topic
        </Typography>
        <Typography className="title_trending_topics1">
          Discover over 100 Topics
        </Typography>
      </div>

      <div className="frame_element_trending_topics">
        <G col={5} mdCol={2} smCol={2} gap={20}>
          <div>
              <Paper className="Paper_element_trending_topics">
                  <div className="frame_avatar_element_trending_topics">
                  <Avatar src={img25} className="avatar_element_trending_topics" />
                  </div>
                  <div className="frame_title_topic_avatar">
                      <Typography className="first_title_avatar_topic">Garden</Typography>
                      <Typography>13 Articles</Typography>
                  </div>
              </Paper>
          </div>
          <div>
              <Paper className="Paper_element_trending_topics">
                  <div className="frame_avatar_element_trending_topics">
                  <Avatar src={img26} className="avatar_element_trending_topics" />
                  </div>
                  <div className="frame_title_topic_avatar">
                      <Typography className="first_title_avatar_topic">Jewelry</Typography>
                      <Typography>16 Articles</Typography>
                  </div>
              </Paper>
          </div> <div>
              <Paper className="Paper_element_trending_topics">
                  <div className="frame_avatar_element_trending_topics">
                  <Avatar src={img27} className="avatar_element_trending_topics" />
                  </div>
                  <div className="frame_title_topic_avatar">
                      <Typography className="first_title_avatar_topic">Industrial</Typography>
                      <Typography>15 Articles</Typography>
                  </div>
              </Paper>
          </div> <div>
              <Paper className="Paper_element_trending_topics">
                  <div className="frame_avatar_element_trending_topics">
                  <Avatar src={img28} className="avatar_element_trending_topics" />
                  </div>
                  <div className="frame_title_topic_avatar">
                      <Typography className="first_title_avatar_topic">Tools</Typography>
                      <Typography>21 Articles</Typography>
                  </div>
              </Paper>
          </div> <div>
              <Paper className="Paper_element_trending_topics">
                  <div className="frame_avatar_element_trending_topics">
                  <Avatar src={img29} className="avatar_element_trending_topics" />
                  </div>
                  <div className="frame_title_topic_avatar">
                      <Typography className="first_title_avatar_topic">Automotive</Typography>
                      <Typography>16 Articles</Typography>
                  </div>
              </Paper>
          </div> <div>
              <Paper className="Paper_element_trending_topics">
                  <div className="frame_avatar_element_trending_topics">
                  <Avatar src={img30} className="avatar_element_trending_topics" />
                  </div>
                  <div className="frame_title_topic_avatar">
                      <Typography className="first_title_avatar_topic">Toys</Typography>
                      <Typography>25 Articles</Typography>
                  </div>
              </Paper>
          </div> <div>
              <Paper className="Paper_element_trending_topics">
                  <div className="frame_avatar_element_trending_topics">
                  <Avatar src={img31} className="avatar_element_trending_topics" />
                  </div>
                  <div className="frame_title_topic_avatar">
                      <Typography className="first_title_avatar_topic">Outdoors</Typography>
                      <Typography>14 Articles</Typography>
                  </div>
              </Paper>
          </div> <div>
              <Paper className="Paper_element_trending_topics">
                  <div className="frame_avatar_element_trending_topics">
                  <Avatar src={img32} className="avatar_element_trending_topics" />
                  </div>
                  <div className="frame_title_topic_avatar">
                      <Typography className="first_title_avatar_topic">Health</Typography>
                      <Typography>4 Articles</Typography>
                  </div>
              </Paper>
          </div> <div>
              <Paper className="Paper_element_trending_topics">
                  <div className="frame_avatar_element_trending_topics">
                  <Avatar src={img33} className="avatar_element_trending_topics" />
                  </div>
                  <div className="frame_title_topic_avatar">
                      <Typography className="first_title_avatar_topic">Electronics</Typography>
                      <Typography>7 Articles</Typography>
                  </div>
              </Paper>
          </div> <div>
              <Paper className="Paper_element_trending_topics">
                  <div className="frame_avatar_element_trending_topics">
                  <Avatar src={img34} className="avatar_element_trending_topics" />
                  </div>
                  <div className="frame_title_topic_avatar">
                      <Typography className="first_title_avatar_topic">Company</Typography>
                      <Typography>26 Articles</Typography>
                  </div>
              </Paper>
          </div>
        </G>
      </div>
    </div>
  );
};

export default Topic;
