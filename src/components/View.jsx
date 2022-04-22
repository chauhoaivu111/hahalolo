import React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import { Button, Typography, MenuItem, MenuList } from "@mui/material";

import Avatar from "@mui/material/Avatar";

import G from "../components/Grid";
import { Divider } from "@mui/material";
import img1 from "../asset/avatar.jpg";
import img2 from "../asset/Kevin_De_Bruyne.jpg";
import img3 from "../asset/Naymar-and-Nike-Split.jpg";
import img4 from "../asset/Kylian_Mbappe.jpg";
import img5 from "../asset/Lionel_Messi.jpg";

const View = () => {
  // /------------------------------------------------------------------------------------------------------------------------------/
  return (
    <div>
      <div className="main_frame_right">
        {" "}
        <Paper
          className="main_paper_element_right"
          sx={{ backgroundColor: "#F2F3F4", borderRadius: "20px" }}
        >
          <Box>
            <div className="frame_Top_element_right">
              <G col={2}>
                <div>
                  <Typography className="title_left_element_right">
                    {" "}
                    🏷️ discover more tags
                  </Typography>
                </div>
                <div>
                  <Typography className="title_right_element_right">
                    view all
                  </Typography>
                </div>
              </G>
            </div>
            <Divider />
            <div className="frame_each_button">
              <Button className="button_view_element_right">
                Outdoors(14)
              </Button>
              <Button className="button_view_element_right button_margin_left">
                Health(4)
              </Button>
              <Button className="button_view_element_right button_margin_left">
                Electronics(7)
              </Button>
            </div>

            <div className="frame_each_button">
              <Button className="button_view_element_right">
                Industrial (26)
              </Button>
              <Button className="button_view_element_right button_margin_left">
                Health (20)
              </Button>
              <Button className="button_view_element_right button_margin_left">
                Toys (22)
              </Button>
            </div>
            <div className="frame_each_button">
              <Button className="button_view_element_right">Sports (15)</Button>
              <Button className="button_view_element_right button_margin_left">
                Automovie (9)
              </Button>
            </div>

            <div className="frame_each_button">
              <Button className="button_view_element_right ">
                Computers (26)
              </Button>
              <Button className="button_view_element_right button_margin_left">
                Design (15)
              </Button>
            </div>

            <div className="frame_each_button">
              <Button className="button_view_element_right ">
                Beauty (27)
              </Button>
              <Button className="button_view_element_right button_margin_left">
                Books (25)
              </Button>
              <Button className="button_view_element_right button_margin_left">
                Life style (18)
              </Button>
            </div>
            <div className="frame_each_button">
              <Button className="button_view_element_right">
                Graphic design (28)
              </Button>
            </div>
          </Box>
        </Paper>
      </div>
      {/* ------------------------------------------------------------------------- */}
      <div className="main_frame_right">
        {" "}
        <Paper
          className="main_paper_element_right2"
          sx={{ backgroundColor: "#F2F3F4", borderRadius: "20px" }}
        >
          <Box>
            <div className="frame_Top_element_right">
              <G col={2}>
                <div>
                  <Typography className="title_left_element_right">
                    {" "}
                    ✨ Trending topic
                  </Typography>
                </div>
                <div>
                  <Typography className="title_right_element_right">
                    view all
                  </Typography>
                </div>
              </G>
            </div>
            <Divider sx={{ marginBottom: "-8px" }} />

            <div>
              <MenuList sx={{ height: "100%" }}>
                <MenuItem sx={{ height: "100px" }}>
                  <img
                    className="style_image_second_element_right"
                    alt="new"
                    src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
                  />
                  <div className="frame_title_second_element_right">
                    <Typography className="first_title">Electronics</Typography>
                    <Typography>7 article</Typography>
                  </div>
                </MenuItem>
              </MenuList>
            </div>
            <Divider sx={{ marginTop: "-8px", marginBottom: "-8px" }} />

            <div>
              <MenuList sx={{ height: "100%" }}>
                <MenuItem sx={{ height: "100px" }}>
                  <img
                    className="style_image_second_element_right"
                    alt="new"
                    src="https://i.picsum.photos/id/1029/4887/2759.jpg?hmac=uMSExsgG8_PWwP9he9Y0LQ4bFDLlij7voa9lU9KMXDE"
                  />
                  <div className="frame_title_second_element_right">
                    <Typography className="first_title">Industrial</Typography>
                    <Typography>20 article</Typography>
                  </div>
                </MenuItem>
              </MenuList>
            </div>
            <Divider sx={{ marginTop: "-8px", marginBottom: "-8px" }} />

            <div>
              <MenuList sx={{ height: "100%" }}>
                <MenuItem sx={{ height: "100px" }}>
                  <img
                    className="style_image_second_element_right"
                    alt="new"
                    src="https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE"
                  />
                  <div className="frame_title_second_element_right">
                    <Typography className="first_title">Health</Typography>
                    <Typography>14 article</Typography>
                  </div>
                </MenuItem>
              </MenuList>
            </div>
            <Divider sx={{ marginTop: "-8px", marginBottom: "-8px" }} />

            <div>
              <MenuList sx={{ height: "100%" }}>
                <MenuItem sx={{ height: "100px" }}>
                  <img
                    className="style_image_second_element_right"
                    alt="new"
                    src="https://i.picsum.photos/id/119/3264/2176.jpg?hmac=PYRYBOGQhlUm6wS94EkpN8dTIC7-2GniC3pqOt6CpNU"
                  />
                  <div className="frame_title_second_element_right">
                    <Typography className="first_title">Toys</Typography>
                    <Typography>31 article</Typography>
                  </div>
                </MenuItem>
              </MenuList>
            </div>
            <Divider sx={{ marginTop: "-8px", marginBottom: "-8px" }} />

            <div>
              <MenuList sx={{ height: "100%" }}>
                <MenuItem sx={{ height: "100px" }}>
                  <img
                    className="style_image_second_element_right"
                    alt="new"
                    src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
                  />
                  <div className="frame_title_second_element_right">
                    <Typography className="first_title">Sports</Typography>
                    <Typography>21 article</Typography>
                  </div>
                </MenuItem>
              </MenuList>
            </div>
            <Divider sx={{ marginTop: "-8px", marginBottom: "-8px" }} />
            <div>
              <MenuList sx={{ height: "100%" }}>
                <MenuItem sx={{ height: "100px" }}>
                  <img
                    className="style_image_second_element_right"
                    alt="new"
                    src="https://i.picsum.photos/id/328/3264/2448.jpg?hmac=rR8AM7aOiJkj7PHfKTv_1H0_2Mmi2tYEuXvKR1S0wNU"
                  />
                  <div className="frame_title_second_element_right">
                    <Typography className="first_title">Electronics</Typography>
                    <Typography>7 article</Typography>
                  </div>
                </MenuItem>
              </MenuList>
            </div>
            <Divider sx={{ marginTop: "-8px", marginBottom: "-8px" }} />
          </Box>
        </Paper>
      </div>

      {/* ----------------------------------------------------------------------- */}
      <div className="main_frame_right">
        {" "}
        <Paper
          className="main_paper_element_right3"
          sx={{ backgroundColor: "#F2F3F4", borderRadius: "20px" }}
        >
          <Box>
            <div className="frame_Top_element_right">
              <G col={2}>
                <div>
                  <Typography className="title_left_element_right">
                    {" "}
                    🎭 Discover Auhtors
                  </Typography>
                </div>
                <div>
                  <Typography className="title_right_element_right">
                    view all
                  </Typography>
                </div>
              </G>
            </div>
            <Divider sx={{ marginBottom: "-8px" }} />

            <div>
              <MenuList sx={{ height: "100%" }}>
                <MenuItem sx={{ height: "100px" }}>
                  <Avatar src={img1}></Avatar>
                  <div className="frame_title_second_element_right">
                    <Typography className="first_title">
                      Cristiano Ronaldo
                    </Typography>
                    <Typography>7 article</Typography>
                  </div>
                </MenuItem>
              </MenuList>
            </div>
            <Divider sx={{ marginTop: "-8px", marginBottom: "-8px" }} />

            <div>
              <MenuList sx={{ height: "100%" }}>
                <MenuItem sx={{ height: "100px" }}>
                  <Avatar src={img2}></Avatar>
                  <div className="frame_title_second_element_right">
                    <Typography className="first_title">
                      Kevin De Bruyne
                    </Typography>
                    <Typography>17 article</Typography>
                  </div>
                </MenuItem>
              </MenuList>
            </div>
            <Divider sx={{ marginTop: "-8px", marginBottom: "-8px" }} />

            <div>
              <MenuList sx={{ height: "100%" }}>
                <MenuItem sx={{ height: "100px" }}>
                  <Avatar src={img3}></Avatar>
                  <div className="frame_title_second_element_right">
                    <Typography className="first_title">Neymar</Typography>
                    <Typography>10 article</Typography>
                  </div>
                </MenuItem>
              </MenuList>
            </div>
            <Divider sx={{ marginTop: "-8px", marginBottom: "-8px" }} />

            <div>
              <MenuList sx={{ height: "100%" }}>
                <MenuItem sx={{ height: "100px" }}>
                  <Avatar src={img4}></Avatar>
                  <div className="frame_title_second_element_right">
                    <Typography className="first_title">
                      Kylian Mbappé
                    </Typography>
                    <Typography>7 article</Typography>
                  </div>
                </MenuItem>
              </MenuList>
            </div>
            <Divider sx={{ marginTop: "-8px", marginBottom: "-8px" }} />

            <div>
              <MenuList sx={{ height: "100%" }}>
                <MenuItem sx={{ height: "100px" }}>
                  <Avatar src={img5}></Avatar>
                  <div className="frame_title_second_element_right">
                    <Typography className="first_title">
                      Lionel Messi
                    </Typography>
                    <Typography>10 article</Typography>
                  </div>
                </MenuItem>
              </MenuList>
            </div>
            <Divider sx={{ marginTop: "-8px", marginBottom: "-8px" }} />
          </Box>
        </Paper>
      </div>

      {/*  -------------------------------------------------------------------------------------------------------*/}
      <div className="main_frame_right">
        {" "}
        <Paper
          className="main_paper_element_right4"
          sx={{ backgroundColor: "#F2F3F4", borderRadius: "20px" }}
        >
          <Box>
            <div className="frame_Top_element_right">
              <G col={2}>
                <div>
                  <Typography className="title_left_element_right">
                    {" "}
                    🎯 Popular Posts
                  </Typography>
                </div>
                <div>
                  <Typography className="title_right_element_right">
                    view all
                  </Typography>
                </div>
              </G>
            </div>
            <Divider sx={{ marginBottom: "0px" }} />

            <div>
              <div className="DivHover">
                <div className="Top_avatar_and_title">
                  <Avatar src={img1} className="avatar_authors"></Avatar>
                  <Typography className="subtititle_avatar">
                    Tousy Vita · May 20, 2021
                  </Typography>
                </div>

                <div className="second_frame_title_and_img">
                  <div className="frame_main_title_avatar">
                    <Typography className="style_main_title">
                      News tool for Black pregnant and postpartum mothers to
                      save lives
                    </Typography>
                  </div>

                  <div className="frame_img_right_avatar">
                    <img
                      className="img_right_avatar"
                      alt="new"
                      src="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Divider sx={{ marginTop: "0px" }} />

            <div>
              <div className="DivHover">
                <div className="Top_avatar_and_title">
                  <Avatar src={img2} className="avatar_authors"></Avatar>
                  <Typography className="subtititle_avatar">
                    Tousy Vita · May 20, 2021
                  </Typography>
                </div>

                <div className="second_frame_title_and_img">
                  <div className="frame_main_title_avatar">
                    <Typography className="style_main_title">
                      News tool for Black pregnant and postpartum mothers to
                      save lives
                    </Typography>
                  </div>

                  <div className="frame_img_right_avatar">
                    <img
                      className="img_right_avatar"
                      alt="new"
                      src="https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Divider sx={{ marginTop: "0px" }} />
            <div>
              <div className="DivHover">
                <div className="Top_avatar_and_title">
                  <Avatar src={img3} className="avatar_authors"></Avatar>
                  <Typography className="subtititle_avatar">
                    Tousy Vita · May 20, 2021
                  </Typography>
                </div>

                <div className="second_frame_title_and_img">
                  <div className="frame_main_title_avatar">
                    <Typography className="style_main_title">
                      News tool for Black pregnant and postpartum mothers to
                      save lives
                    </Typography>
                  </div>

                  <div className="frame_img_right_avatar">
                    <img
                      className="img_right_avatar"
                      alt="new"
                      src="https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Divider sx={{ marginTop: "0px" }} />
            <div>
              <div className="DivHover">
                <div className="Top_avatar_and_title">
                  <Avatar src={img4} className="avatar_authors"></Avatar>
                  <Typography className="subtititle_avatar">
                    Tousy Vita · May 20, 2021
                  </Typography>
                </div>

                <div className="second_frame_title_and_img">
                  <div className="frame_main_title_avatar">
                    <Typography className="style_main_title">
                      News tool for Black pregnant and postpartum mothers to
                      save lives
                    </Typography>
                  </div>

                  <div className="frame_img_right_avatar">
                    <img
                      className="img_right_avatar"
                      alt="new"
                      src="https://i.picsum.photos/id/1024/1920/1280.jpg?hmac=-PIpG7j_fRwN8Qtfnsc3M8-kC3yb0XYOBfVzlPSuVII"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Divider sx={{ marginTop: "0px" }} />
          </Box>
        </Paper>
      </div>
    </div>
  );
};

export default View;
