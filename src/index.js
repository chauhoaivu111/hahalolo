import React from "react";
import ReactDOM from "react-dom";
import "./sass/index.scss";
import App from "./App";
import { SnackbarProvider } from "notistack";
import { StyledEngineProvider } from "@mui/material/styles";
ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider
      maxSnack={2}
      autoHideDuration={500}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      className="rendererror"
    >
      <StyledEngineProvider>
        <App />
      </StyledEngineProvider>
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
