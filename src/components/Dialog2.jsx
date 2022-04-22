import React from "react";
import Helmet from "../components/Helmet";


import {
  Button,
  IconButton,
  Typography,

} from "@mui/material";

import PropTypes from "prop-types";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other} className="frame_dialog">
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "space-between",
            right: 8,
            top: 0,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}

      <Typography className="title_dialogtitle"> {children}</Typography>
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const Dialog2 = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Helmet title="Home">
      <div style={{marginLeft:"40px"}} >
        <Button sx={{textTransform:"capitalize",borderRadius:"20px",height:"50px"}} variant="outlined" onClick={handleClickOpen}>
          Other Tags <KeyboardArrowDownIcon/>
        </Button>
        <BootstrapDialog
          PaperProps={{
           
            className:"frame_paper_dialog1"
          }
        
         
        }
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
         
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
            className="title_dialogtitle1"
          >
            Discover others tags
          </BootstrapDialogTitle>

          <DialogContent dividers>
          <div >
              <Button className="button_dialog_element" >
                Garden (14)
              </Button>
              <Button  className="button_dialog_element">
                Jewelry (16)
              </Button>
              <Button className="button_dialog_element" >
                Industrial (15)
              </Button>
              <Button className="button_dialog_element" >
                Tools (21)
              </Button>
              <Button className="button_dialog_element" >
                Automotive (16)
              </Button>
            </div>

            <div className="frame_button_element_dialog" >
              <Button className="button_dialog_element" >
                Sandwich (2)
              </Button>
              <Button className="button_dialog_element" >
                Hot dog (1)
              </Button>
              <Button className="button_dialog_element" >
                Pizza (24)
              </Button>
              <Button  className="button_dialog_element">
                Hamburger (17)
              </Button>
              <Button className="button_dialog_element" >
                Gelato (19)
              </Button>
            </div>

            <div className="frame_button_element_dialog" >
              <Button className="button_dialog_element" >
                Soft Drink (5)
              </Button>
              <Button className="button_dialog_element" >
                Liqour (12)
              </Button>
              <Button className="button_dialog_element" >
                Tea (4)
              </Button>
              <Button className="button_dialog_element" >
                Milktea (7)
              </Button>
              <Button className="button_dialog_element" >
                soda (10)
              </Button>
            </div>


          </DialogContent>
          {/* <DialogActions >
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions> */}
        </BootstrapDialog>
      </div>
    </Helmet>
  );
};

export default Dialog2;
