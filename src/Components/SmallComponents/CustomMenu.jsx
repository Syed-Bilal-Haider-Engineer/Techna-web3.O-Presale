import React from "react";
import { Box, Button, Menu, MenuItem, styled } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// manue
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 7,
    marginTop: theme.spacing(1),
    minWidth: 100,
    backgroundColor: "#F6F6F6",
    color: "black",

    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: "black",
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: "#D09B03",
      },
    },
  },
}));

const buttonStyle = {
  backgroundColor: "#F6F6F6",
  color: "black",
  borderRadius: "7px",
  transition: "1s",
  fontSize: { xs: "16px", sm: "16px" },
  fontWeight: 600,
  letterSpacing: "0.2px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#D09B03",
  },
  width: "100%",
  height: "100%",
  fontFamily: "'Roboto', sans-serif",
  py: "14px",
};

const CustomSelect = ({ anchorEl, setAnchorEl, select, setSelect }) => {
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        disableRipple
        sx={buttonStyle}
      >
        {select}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          {/* <EditIcon /> */}
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          {/* <FileCopyIcon /> */}
          Duplicate
        </MenuItem>
        {/* <Divider sx={{ my: 0.5 }} /> */}
        <MenuItem onClick={handleClose} disableRipple>
          {/* <ArchiveIcon /> */}
          Archive
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          {/* <MoreHorizIcon /> */}
          More
        </MenuItem>
      </StyledMenu>
    </Box>
  );
};

export default CustomSelect;
