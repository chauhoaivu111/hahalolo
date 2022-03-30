import React from "react";
import Helmet from "../components/Helmet";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";

import { Button, Typography } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Helmet title="Login">
      <div
        // style={{
        //   height: "950px",
        //   width: "100%",
        //   backgroundColor: "white",
        //   textAlign: "center",
        //   justifyContent: "center",
        //   justifyItems: "center",
        //   justifySelf: "center",
        //   margin: "0px",
        // }}
        className="main_frame_login"
      >
        <div
        className="Top_frame"
          // style={{
          //   height: "600px",
          //   width: "100%",
          //   backgroundColor: "#F0F4FA",
          //   textAlign: "center",
          //   justifyContent: "center",
          //   justifyItems: "center",
          //   justifySelf: "center",
          //   margin: "0px",
          //   // display: "flex",
          // }}
        
        >
          <div
            // style={{
            //   height: "600px",
            //   width: "70%",
            //   backgroundColor: "#F0F4FA",
            //   textAlign: "center",
            //   justifyContent: "center",
            //   justifyItems: "center",
            //   justifySelf: "center",
            //   margin: "0px",
            // }}
            className="sub_Frame"
          >
            <Typography
              sx={{
                textAlign: "center",
                paddingTop: "6%",
                fontWeight: "900",
                fontSize: "50px",
              }}
            >
              <PersonOutlineIcon
                sx={{ fontSize: "50px", marginRight: "30px" }}
              />
              Login
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
              Welcome to our blog magazine Community
            </Typography>

            <Paper
              // sx={{
              //   height: "650px",
              //   backgroundColor: "white",
              //   textAlign: "center",
              //   justifyContent: "center",
              //   justifyItems: "center",
              //   justifySelf: "center",
              //   display: "flex",

              //   marginTop: "70px",
              //   borderRadius: "20px",
              // }}
              className="main_paper"
            >
              <div  className="frame_button_connect">
                <Button
                  // sx={{
                  //   backgroundColor: "#F0F4FA",
                  //   width: "400px",
                  //   height: "50px",
                  //   justifyContent: "left",
                  //   marginTop: "7%",
                  //   textTransform: "capitalize",
                  //   borderRadius: "10px",
                  // }}
                  className="button1"
                >
                  <FacebookIcon />

                  <Typography className="text_in_button1">
                    Continue with facebook
                  </Typography>
                </Button>

                <Button
                  // sx={{
                  //   backgroundColor: "#F0F4FA",
                  //   width: "400px",
                  //   height: "50px",
                  //   justifyContent: "left",
                  //   marginTop: "3%",
                  //   textTransform: "capitalize",
                  //   borderRadius: "10px",
                  // }}
                  className="button2"
                >
                  <img src="https://chisnghiax.com/ncmaz/assets/Google.e6e5ddf2.svg" />

                  <Typography className="text_in_button">
                    Continue with Google
                  </Typography>
                </Button>

                <Button
                  // sx={{
                  //   backgroundColor: "#F0F4FA",
                  //   width: "400px",
                  //   height: "50px",
                  //   justifyContent: "left",
                  //   marginTop: "3%",
                  //   textTransform: "capitalize",
                  //   borderRadius: "10px",
                  // }}
                  className="button2"
                >
                  <TwitterIcon sx={{ color: "#629CF4" }} />

                  <Typography className="text_in_button" >
                    Continue with Twitter
                  </Typography>
                </Button>

                <div style={{ display: "flex", marginTop: "30px" }}>
                  <hr
                    style={{
                      width: "43%",
                      height: "2px",
                      marginTop: "20px",
                      backgroundColor: "#DBDCDD",
                      border: "none",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "600",
                      marginLeft: "15px",
                      marginRight: "15px",
                      marginTop: "10px",
                    }}
                  >
                    OR
                  </Typography>
                  <hr
                    style={{
                      width: "43%",
                      height: "2px",
                      marginTop: "20px",
                      backgroundColor: "#DBDCDD",
                      border: "none",
                    }}
                  />
                </div>

                {/*-_________________________________________________________ textfield______________________________________________________  */}
                <div style={{ textAlign: "left", marginTop: "30px" }}>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                      marginBottom: "5px",
                    }}
                  >
                    Email address
                  </Typography>
                  <TextField
                    sx={{ display: "block" }}
                    className="inputtextcricle"
                    fullWidth
                    placeholder="chauhoaivu111@gmail.com"
                  ></TextField>

                  <div
                    style={{
                      justifyContent: "space-between",
                      display: "flex",
                      marginTop: "30px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "500",
                        marginBottom: "5px",
                      }}
                    >
                      Password
                    </Typography>

                    <Typography
                      sx={{
                        textAlign: "right",
                        fontSize: "15px",
                        fontWeight: "500",
                        marginBottom: "5px",
                      }}
                    >
                      {" "}
                      <Link to ="/Forgotpass">
                      <span
                        style={{
                          color: "#346EC6",
                          cursor: "pointer",
                          fontWeight: "500",
                        }}
                      >
                        Forgot password?
                      </span>
                      </Link>
                    </Typography>
                  </div>
                  <TextField
                    sx={{ display: "block", marginBottom: "30px" }}
                    className="inputtextcricle"
                    fullWidth
                  ></TextField>

                  <Button
                    sx={{
                      backgroundColor: "#035BDE",
                      borderRadius: "30px",
                      height: "45px",
                      color: "white",
                      textTransform: "capitalize",
                      marginBottom: "30px",
                    }}
                    fullWidth
                  >
                    Continue
                  </Button>

                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: "15px",
                      fontWeight: "500",
                      marginBottom: "5px",
                    }}
                  >
                    New user?{" "}
                    <Link to="/SignUp">
                    <span
                      style={{
                        color: "#346EC6",
                        cursor: "pointer",
                        fontWeight: "500",
                      }}
                    >
                      Create an account
                    </span>
                    </Link>
                  </Typography>
                </div>
              </div>
            </Paper>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Login;
