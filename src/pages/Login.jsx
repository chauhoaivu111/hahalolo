import React, { useState } from "react";
import Helmet from "../components/Helmet";
import Paper from "@mui/material/Paper";
import { TextField, IconButton, Alert } from "@mui/material";
import { Button, Typography } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar from "@mui/material/Snackbar";
const Login = (props) => {
  // ------------------------------------------- call api -------------------------
  const [open, Setopen] = useState(false);
  const [submit, Setsubmited] = useState(false);
  const [field, setField] = useState({});
  const onChangeHandler = (e) => {
    setField({ ...field, [e.target.name]: e.target.value });
  };
  console.log("email and pass", field);

  // call api o login
  const handleSubmit = async () => {
    try {
      let token = await axios({
        method: "POST",
        url: "http://localhost:3000/auth/login",
        data: { email: field.email, password: field.password },
      });
      localStorage.setItem("accessToken", token.data.token);
      console.log("tokens", token.data.token);

      if ((token.data.token = true)) {
        Setsubmited(true);
        console.log("isSubmited");
      }
    } catch (err) {
      
      if (err.message != null){
        Setopen(true);
        console.log("error", err.message)
      }
      
    }
  };

  if (submit === true) {
    props.history.push("/");
    console.log("props.history");
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    Setopen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Helmet title="Login">
      <div className="main_frame_login">
        <div className="Top_frame">
          <div className="sub_Frame">
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

            <Paper className="main_paper">
              <div className="frame_button_connect">
                <Button className="button1">
                  <FacebookIcon />

                  <Typography className="text_in_button1">
                    Continue with facebook
                  </Typography>
                </Button>

                <Button className="button2">
                  <img src="https://chisnghiax.com/ncmaz/assets/Google.e6e5ddf2.svg" />

                  <Typography className="text_in_button">
                    Continue with Google
                  </Typography>
                </Button>

                <Button className="button2">
                  <TwitterIcon sx={{ color: "#629CF4" }} />

                  <Typography className="text_in_button">
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
                    onChange={onChangeHandler}
                    value={field.email}
                    name="email"
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
                      <Link to="/Forgotpass">
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
                    onChange={onChangeHandler}
                    name="password"
                    value={field.password}
                  ></TextField>

                  <Button
                    className="button_login"
                    fullWidth
                    onClick={handleSubmit}
                  >
                    Continue
                  </Button>
                  <Snackbar
                    open={open}
                    autoHideDuration={2000}
                    action={action}
                    onClose={handleClose}
                    // message="email or password incorrect"
                    // sx={{color: "red", width: "300px"}}
                  >
                    <Alert onClose={handleClose} severity="error" sx={{color: "red", width: "300px"}}>
                      email or password incorrect
                    </Alert>
                   
                  </Snackbar>
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
