import {
  Alert,
  Box,
  Dialog,
  Divider,
  Snackbar,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Button } from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
// import { eth } from "./Images";
import { styled } from "@mui/styles";
import { eth, select, UsdT2, Busd, Udsc } from "../Images";

export function ToastNotify({ alertState, setAlertState }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={alertState.open}
      autoHideDuration={10000}
      key={"top center"}
      onClose={() => setAlertState({ ...alertState, open: false })}
    >
      <Alert
        onClose={() => setAlertState({ ...alertState, open: false })}
        severity={alertState.severity}
      >
        {alertState.message}
      </Alert>
    </Snackbar>
  );
}

export function StyledButton({ children, ...props }) {
  return (
    <>
      <Button
        {...props}
        sx={{
          color: "#05000A",
          background: "#00FF75",
          fontSize: "20px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          textTransform: "capitalize",
          fontWeight: 700,
          fontFamily: "Montserrat",
          borderRadius: "15px",
          padding: props.padding,
          width: props.width,
          "&.Mui-disabled": {
            color: "#979EA7",
          },
          "&:hover": {
            background: "#00FF75",
          },
        }}
      >
        {children}
      </Button>
    </>
  );
}

export function CustomButton({ children, ...props }) {
  return (
    <>
      <Button
        {...props}
        sx={{
          fontFamily: "Montserrat",
          fontWeight: props.fontWeight,
          fontSize: "20px",
          color: props.color,
          mr: props.mr,
        }}
      >
        {children}
      </Button>
    </>
  );
}
export function StyledText({ children, ...props }) {
  return (
    <>
      <Typography
        {...props}
        sx={{
          fontFamily: "Montserrat",
          fontWeight: props.fontWeight,
          fontSize: "20px",
          color: props.color,
          mr: props.mr,
        }}
      >
        {children}
      </Typography>
    </>
  );
}
export function StyledTextNav({ children, ...props }) {
  return (
    <>
      <Typography
        {...props}
        sx={{
          fontFamily: "Montserrat",
          fontWeight: props.fontWeight,
          fontSize: "20px",
          color: "#8C9296",
          my: props.my,
        }}
      >
        {children}
      </Typography>
    </>
  );
}
export function StyledTextNormal({ children, ...props }) {
  return (
    <>
      <Typography
        {...props}
        sx={{
          color: props.color,
          fontSize: props.fontSize,
          fontFamily: "Montserrat",
          fontWeight: 600,
          mr: props.mr,
          mt: props.mt,
        }}
      >
        {children}
      </Typography>
    </>
  );
}

//

export function SelectInput({ selects, setselect, ...props }) {
  const matches = useMediaQuery("(min-width:1050px)");

  const [openDialog, setOpenDialog] = useState(false);
  const [search, setSearch] = useState("");
  const [selecter, setSelecter] = useState({
    img: select,
    tokens: "Select to",
  });
  console.log(selecter, "setSlecter");

  const tokenArray = [
    {
      img: eth,
      tokens: "ETH",
      id: 1,
    },
    {
      img: UsdT2,
      tokens: "USDT",
      id: 2,
    },
    {
      img: Udsc,
      tokens: "UDSC",
      id: 3,
    },
    {
      img: Busd,
      tokens: "BUSD",
      id: 4,
    },
  ];
  return (
    <>
      <Dialog
        // fullWidth
        open={openDialog}
        // TransitionComponent={Transition}
        sx={{
          zIndex: 100,
          "& .MuiPaper-root": {
            backgroundColor: "#0E2436",
            borderRadius: "30px",
            width: { md: "27%", xs: "100%" },
            height: "500px",
          },
        }}
      >
        <Box
          px={2}
          py={3}
          sx={{
            borderRadius: "10px",
            height: "100%",
          }}
        >
          <Box display="flex" justifyContent="space-between">
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: "Montserrat",
                fontWeight: "400",
                color: "#fff",
              }}
            >
              Select Cauldron
            </Typography>
            <CloseIcon
              style={{
                cursor: "pointer",
                color: "#66656E ",
              }}
              onClick={() => {
                setOpenDialog(!openDialog);
              }}
            />
          </Box>
          <Divider sx={{ background: "#66656E", marginTop: "30px" }} />
          {tokenArray.map((item, i) => {
            return (
              <>
                <Box
                  key={i}
                  onClick={() => {
                    setOpenDialog(false);
                    setSelecter(item);
                  }}
                  px={2}
                  height="50px"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    cursor: "pointer",
                    background: "transparent",
                    borderRadius: "20px",
                    "&:hover": {
                      background: "hsla(0,0%,100%,.1)",
                    },
                  }}
                >
                  <Box display="flex" alignItems="center">
                    <img src={item.img} width="20px" alt="" />
                    <Typography
                      ml={2}
                      sx={{
                        fontSize: "16px",
                        fontFamily: "Montserrat",
                        fontWeight: "400",
                        color: "#fff",
                      }}
                    >
                      {item.tokens}
                    </Typography>
                    <Typography
                      ml={1}
                      mt={1}
                      sx={{
                        fontSize: "13px",
                        fontFamily: "Montserrat",
                        fontWeight: "600",
                        color: "#66656E",
                      }}
                    >
                      0%
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      fontSize: "16px",
                      fontFamily: "Montserrat",
                      fontWeight: "600",
                      color: "#fff",
                    }}
                  >
                    0.0
                  </Box>
                </Box>

                <Divider sx={{ background: "#66656E" }} />
              </>
            );
          })}
        </Box>
      </Dialog>
      {/*  */}

      <Box
        sx={{
          color: "#fff",
          borderRadius: "17px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "220px",
          height: "53px",
          ml: "-5px",
          p: 1.5,
          cursor: "pointer",
          mb: 1,
        }}
        onClick={() => {
          setOpenDialog(true);
        }}
      >
        <img src={selecter.img} alt="" width="32px" height="32px" />
        <Typography
          variant="body1"
          fontSize={matches ? "16px" : "14px"}
          pl={1}
          mx={0.4}
        >
          {" "}
          {selecter.tokens}
        </Typography>
        <KeyboardArrowDownIcon color="#fff" />
      </Box>
      <TextField
        {...props}
        placeholder="0.00"
        type="number"
        autoComplete="off"
        id="standard-name"
        sx={{
          fontFamily: "Montserrat",
          "& label.Mui-focused": {
            color: "#fff",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "transparent",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#3F3B42",
              border: "2px solid #3F3B42",
              borderRadius: "15px",
            },
            "&:hover fieldset": {
              borderColor: "#3F3B42",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#3F3B42",
            },
          },
          input: {
            "&::placeholder": {
              textOverflow: "ellipsis !important",
              color: "#fff !important",
            },
            fontSize: { xs: "20px", md: "24px" },
            fontWeight: 700,
            color: "#fff",
          },
          background: "transparent",
          width: "100%",
          color: "#fff",
        }}
        name="name"
        // InputProps={{}}
        required={true}
      />
    </>
  );
}
