import {  Typography } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import { Box} from "@mui/system";


import G from "../components/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <G col={2} mdCol={1} smCol={1}>
          <di  style ={{marginTop:"10%"}}  >
            <G col={1} mdCol={2} smcol={2}>
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "900",
                  color: "#629CF4",
                 
                }}
                className = "text_Logo"
              >
                Hahaololo
              </Typography>
              <div className="frame_IconText">
                <Box className="box_Icon"  >
                  <List className = "Icon">
                    <ListItem>
                      <FacebookIcon />
                      <Typography
                        sx={{
                          fontFamily: "Roboto",
                          paddingLeft: "10px",
                          cursor: "pointer",
                          color: "gray",
                          "&:hover": {
                            color: "black",
                          },
                        }}
                        className="textIcon"
                      >
                        Facebook
                      </Typography>
                    </ListItem>

                    <ListItem>
                      <TwitterIcon />
                      <Typography
                        sx={{
                          fontFamily: "Roboto",
                          paddingLeft: "10px",
                          cursor: "pointer",
                          color: "gray",
                          "&:hover": {
                            color: "black",
                          },
                        }}
                        className="textIcon"
                      >
                        Twitter
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <YouTubeIcon />
                      <Typography
                        sx={{
                          fontFamily: "Roboto",
                          paddingLeft: "10px",
                          cursor: "pointer",
                          color: "gray",
                          "&:hover": {
                            color: "black",
                          },
                        }}
                        className="textIcon"

                      >
                        Youtobe
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <InstagramIcon />
                      <Typography
                        sx={{
                          fontFamily: "Roboto",
                          paddingLeft: "10px",
                          cursor: "pointer",
                          color: "gray",
                          "&:hover": {
                            color: "black",
                          },
                        }}
                        className="textIcon"
                      >
                        Instagram
                      </Typography>
                    </ListItem>
                  </List>
                </Box>
              </div>
            </G>
          </di>

          <div className="test">
            <G col={4} mdCol={4} smCol={2} gap={5}>
              <Box>
                <List>
                  <ListItem>
                    <Typography sx={{ fontSize: "15px", fontWeight: "900" }}>
                      Getting Started
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography
                      className="txt"
                     sx={{cursor:"pointer"}}
                   

                    >
                      Installation
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography
                      sx={{
                        fontFamily: "Roboto",
                        cursor: "pointer",
                        color: "gray",
                        "&:hover": {
                          color: "black",
                        },
                      }}
                    >
                      Release Notes
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography
                      sx={{
                        fontFamily: "Roboto",
                        cursor: "pointer",
                        color: "gray",
                        "&:hover": {
                          color: "black",
                        },
                      }}
                    >
                      Upgrade Guide
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography
                      sx={{
                        fontFamily: "Roboto",
                        cursor: "pointer",
                        color: "gray",
                        "&:hover": {
                          color: "black",
                        },
                      }}
                    >
                      Browser Support
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography
                      sx={{
                        fontFamily: "Roboto",
                        cursor: "pointer",
                        color: "gray",
                        "&:hover": {
                          color: "black",
                        },
                      }}
                    >
                      Editor Support
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography
                      sx={{
                        fontFamily: "Roboto",
                        cursor: "pointer",
                        color: "gray",
                        "&:hover": {
                          color: "black",
                        },
                      }}
                    >
                      Utility-Frist
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography
                      sx={{
                        fontFamily: "Roboto",
                        cursor: "pointer",
                        color: "gray",
                        "&:hover": {
                          color: "black",
                        },
                      }}
                    >
                      Dark Mode
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography
                      sx={{
                        fontFamily: "Roboto",
                        cursor: "pointer",
                        color: "gray",
                        "&:hover": {
                          color: "black",
                        },
                      }}
                    >
                      Responsive Design
                    </Typography>
                  </ListItem>
                </List>
              </Box>
              <Box>
                <List>
                  <ListItem>
                    <Typography sx={{ fontSize: "15px", fontWeight: "900" }}>
                      Explore
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ cursor: "pointer" }}  className ="txt">
                      Design Features
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ cursor: "pointer" }}  className ="txt">Prototyping</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ cursor: "pointer" }}  className ="txt">Design Systems</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ cursor: "pointer" }}  className ="txt">Pricing</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ cursor: "pointer" }}  className ="txt">Customers</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ cursor: "pointer" }}  className ="txt">Security</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ cursor: "pointer" }}  className ="txt">Inegrations</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ cursor: "pointer" }}  className ="txt">Contact</Typography>
                  </ListItem>
                </List>
              </Box>
              <Box>
                <List>
                  <ListItem>
                    <Typography sx={{ fontSize: "15px", fontWeight: "900" }}>
                      Resources
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ cursor: "pointer" }}  className ="txt">
                      Best Practices
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ cursor: "pointer" }}  className ="txt">Support</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ cursor: "pointer" }}  className ="txt">Developers</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ cursor: "pointer" }}  className ="txt">Learn Design</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ cursor: "pointer" }}  className ="txt">What's New</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ cursor: "pointer" }}  className ="txt">Releases</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ cursor: "pointer" }}  className ="txt">Carrers</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ cursor: "pointer" }}  className ="txt">About Us</Typography>
                  </ListItem>
                </List>
              </Box>
              <Box>
                <List>
                  <ListItem>
                    <Typography sx={{ fontSize: "15px", fontWeight: "900" }}>
                      Community
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ cursor: "pointer" }}  className ="txt">
                      Discussion Forums
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ cursor: "pointer" }}  className ="txt">Code Of Conduct</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ cursor: "pointer" }}  className ="txt">Comunity Resources</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ cursor: "pointer" }}  className ="txt">Contributing</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ cursor: "pointer" }}  className ="txt">Concurrent Mode</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ cursor: "pointer" }}  className ="txt">API Reference</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ cursor: "pointer" }}  className ="txt">Advanced Guides</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ cursor: "pointer" }} className ="txt">Main Concepts</Typography>
                  </ListItem>
                </List>
              </Box>
            </G>
          </div>
        </G>

        {/* <G col={5} mdCol={2} smCol={2} gap={5}>
          <Box display="flex" justifyContent="center">
            <List>
              <ListItem>
                <FacebookIcon />
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    paddingLeft: "10px",
                    cursor: "pointer",
                    color: "gray",
                    "&:hover": {
                      color: "black",
                    },
                  }}
                >
                  Facebook
                </Typography>
              </ListItem>

              <ListItem>
                <TwitterIcon />
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    paddingLeft: "10px",
                    cursor: "pointer",
                    color: "gray",
                    "&:hover": {
                      color: "black",
                    },
                  }}
                >
                  Twitter
                </Typography>
              </ListItem>
              <ListItem>
                <YouTubeIcon />
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    paddingLeft: "10px",
                    cursor: "pointer",
                    color: "gray",
                    "&:hover": {
                      color: "black",
                    },
                  }}
                >
                  Youtobe
                </Typography>
              </ListItem>
              <ListItem>
                <InstagramIcon />
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    paddingLeft: "10px",
                    cursor: "pointer",
                    color: "gray",
                    "&:hover": {
                      color: "black",
                    },
                  }}
                >
                  Instagram
                </Typography>
              </ListItem>
            </List>
          </Box>

          <Box>
            <List>
              <ListItem>
                <Typography sx={{ fontSize: "15px", fontWeight: "900" }}>
                  Getting Started
                </Typography>
              </ListItem>
              <ListItem>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    cursor: "pointer",
                    color: "gray",
                    "&:hover": {
                      color: "black",
                    },
                  }}
                >
                  Installation
                </Typography>
              </ListItem>
              <ListItem>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    cursor: "pointer",
                    color: "gray",
                    "&:hover": {
                      color: "black",
                    },
                  }}
                >
                  Release Notes
                </Typography>
              </ListItem>
              <ListItem>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    cursor: "pointer",
                    color: "gray",
                    "&:hover": {
                      color: "black",
                    },
                  }}
                >
                  Upgrade Guide
                </Typography>
              </ListItem>
              <ListItem>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    cursor: "pointer",
                    color: "gray",
                    "&:hover": {
                      color: "black",
                    },
                  }}
                >
                  Browser Support
                </Typography>
              </ListItem>
              <ListItem>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    cursor: "pointer",
                    color: "gray",
                    "&:hover": {
                      color: "black",
                    },
                  }}
                >
                  Editor Support
                </Typography>
              </ListItem>
              <ListItem>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    cursor: "pointer",
                    color: "gray",
                    "&:hover": {
                      color: "black",
                    },
                  }}
                >
                  Utility-Frist
                </Typography>
              </ListItem>
              <ListItem>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    cursor: "pointer",
                    color: "gray",
                    "&:hover": {
                      color: "black",
                    },
                  }}
                >
                  Dark Mode
                </Typography>
              </ListItem>
              <ListItem>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    cursor: "pointer",
                    color: "gray",
                    "&:hover": {
                      color: "black",
                    },
                  }}
                >
                  Responsive Design
                </Typography>
              </ListItem>
            </List>
          </Box>
          <Box>
            <List>
              <ListItem>
                <Typography sx={{ fontSize: "15px", fontWeight: "900" }}>
                  Explore
                </Typography>
              </ListItem>
              <ListItem>
                <Typography sx={{ cursor: "pointer" }}>
                  Design Features
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>Prototyping</Typography>
              </ListItem>
              <ListItem>
                <Typography>Design Systems</Typography>
              </ListItem>
              <ListItem>
                <Typography>Pricing</Typography>
              </ListItem>
              <ListItem>
                <Typography>Customers</Typography>
              </ListItem>
              <ListItem>
                <Typography>Security</Typography>
              </ListItem>
              <ListItem>
                <Typography>Inegrations</Typography>
              </ListItem>
              <ListItem>
                <Typography>Contact</Typography>
              </ListItem>
            </List>
          </Box>
          <Box>
            <List>
              <ListItem>
                <Typography sx={{ fontSize: "15px", fontWeight: "900" }}>
                  Resources
                </Typography>
              </ListItem>
              <ListItem>
                <Typography sx={{ cursor: "pointer" }}>
                  Best Practices
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>Support</Typography>
              </ListItem>
              <ListItem>
                <Typography>Developers</Typography>
              </ListItem>
              <ListItem>
                <Typography>Learn Design</Typography>
              </ListItem>
              <ListItem>
                <Typography>What's New</Typography>
              </ListItem>
              <ListItem>
                <Typography>Releases</Typography>
              </ListItem>
              <ListItem>
                <Typography>Carrers</Typography>
              </ListItem>
              <ListItem>
                <Typography>About Us</Typography>
              </ListItem>
            </List>
          </Box>
          <Box>
            <List>
              <ListItem>
                <Typography sx={{ fontSize: "15px", fontWeight: "900" }}>
                  Community
                </Typography>
              </ListItem>
              <ListItem>
                <Typography sx={{ cursor: "pointer" }}>
                  Discussion Forums
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>Code Of Conduct</Typography>
              </ListItem>
              <ListItem>
                <Typography>Comunity Resources</Typography>
              </ListItem>
              <ListItem>
                <Typography>Contributing</Typography>
              </ListItem>
              <ListItem>
                <Typography>Concurrent Mode</Typography>
              </ListItem>
              <ListItem>
                <Typography>API Reference</Typography>
              </ListItem>
              <ListItem>
                <Typography>Advanced Guides</Typography>
              </ListItem>
              <ListItem>
                <Typography>Main Concepts</Typography>
              </ListItem>
            </List>
          </Box>
        </G> */}
      </div>
    </footer>
  );
};

export default Footer;
