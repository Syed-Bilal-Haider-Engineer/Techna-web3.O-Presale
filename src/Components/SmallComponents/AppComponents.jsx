import {
  Alert,
  Box,
  Dialog,
  Snackbar,
  TextField,
  Typography,
  useMediaQuery,
  Button as MuiButton,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { eth, UsdT2, Busd, Udsc, bnb, matic } from "../Images";

export function ToastNotify({ alertState, setAlertState }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={alertState.open}
      autoHideDuration={10000}
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

export function StyledButton({ children, padding, width, ...props }) {
  return (
    <MuiButton
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
        padding,
        width,
        "&.Mui-disabled": { color: "#979EA7" },
        "&:hover": { background: "#00FF75", opacity: 0.8 },
      }}
    >
      {children}
    </MuiButton>
  );
}

export function CustomButton({ children, fontWeight, color, mr, ...props }) {
  return (
    <MuiButton
      {...props}
      sx={{
        fontFamily: "Montserrat",
        fontWeight,
        fontSize: "20px",
        color,
        mr,
      }}
    >
      {children}
    </MuiButton>
  );
}

export function StyledText({ children, fontWeight, color, mr, textAlign, ...props }) {
  return (
    <Typography
      {...props}
      sx={{
        fontFamily: "Montserrat",
        fontWeight,
        fontSize: { xs: "16px", md: "20px" },
        color,
        mr,
        textAlign,
      }}
    >
      {children}
    </Typography>
  );
}

export function StyledTextNav({ children, fontWeight, my, textAlign, ...props }) {
  return (
    <Typography
      {...props}
      sx={{
        fontFamily: "Montserrat",
        fontWeight,
        fontSize: { xs: "17px", md: "20px" },
        color: "#8C9296",
        my,
        textAlign,
      }}
    >
      {children}
    </Typography>
  );
}

export function StyledTextNormal({ children, color, fontSize, mr, mt, ...props }) {
  return (
    <Typography
      {...props}
      sx={{
        color,
        fontSize,
        fontFamily: "Montserrat",
        fontWeight: 600,
        mr,
        mt,
      }}
    >
      {children}
    </Typography>
  );
}

export function SelectInput({ selects, setselect, ...props }) {
  const matches = useMediaQuery("(min-width:1050px)");
  const [openDialog, setOpenDialog] = useState(false);
  const [selecter, setSelecter] = useState({ img: eth, tokens: "ETH" });

  const tokenArray = [
    { img: eth, tokens: "ETH", id: 1 },
    { img: UsdT2, tokens: "USDT", id: 2 },
    { img: Udsc, tokens: "UDSC", id: 3 },
    { img: Busd, tokens: "BUSD", id: 4 },
    { img: matic, tokens: "Matic", id: 5 },
    { img: bnb, tokens: "BNB", id: 6 },
  ];

  return (
    <>
      <Dialog
        open={openDialog}
        sx={{
          zIndex: 100,
          "& .MuiPaper-root": {
            backgroundColor: "#0D0C0E",
            borderRadius: "30px",
            width: { md: "27%", xs: "100%" },
            height: "500px",
            border: "1px solid #8C9296",
          },
        }}
      >
        <Box px={2} py={3} sx={{ borderRadius: "10px", height: "100%" }}>
          <Box display="flex" justifyContent="space-between" mb={3}>
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: "Montserrat",
                fontWeight: 400,
                color: "#fff",
              }}
            >
              Select Token
            </Typography>
            <CloseIcon
              style={{ cursor: "pointer", color: "#66656E" }}
              onClick={() => setOpenDialog(false)}
            />
          </Box>
          {tokenArray.map((item) => (
            <Box
              key={item.id}
              mt={1}
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
                borderRadius: "20px",
                "&:hover": {
                  background: "hsla(0,0%,100%,.1)",
                },
              }}
            >
              <Box display="flex" alignItems="center">
                <img src={item.img} width="20px" alt={item.tokens} />
                <Typography ml={2} sx={{ fontSize: "16px", fontFamily: "Montserrat", fontWeight: 400, color: "#fff" }}>
                  {item.tokens}
                </Typography>
              </Box>
              <Typography sx={{ fontSize: "16px", fontFamily: "Montserrat", fontWeight: 600, color: "#fff" }}>
                0.0
              </Typography>
            </Box>
          ))}
        </Box>
      </Dialog>

      <Box
        sx={{
          color: "#fff",
          borderRadius: "17px",
          display: "flex",
          alignItems: "center",
          width: "220px",
          height: "53px",
          ml: "-5px",
          p: 1.5,
          cursor: "pointer",
          mb: 1,
        }}
        onClick={() => setOpenDialog(true)}
      >
        <img src={selecter.img} alt={selecter.tokens} width="32px" height="32px" />
        <Typography fontSize={matches ? "16px" : "14px"} pl={1} mx={0.4}>
          {selecter.tokens}
        </Typography>
        <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
      </Box>

      <TokenTextField {...props} />
    </>
  );
}

function TokenTextField({ fontSize, ...props }) {
  return (
    <TextField
      {...props}
      placeholder="0.00"
      type="number"
      inputMode="numeric"
      autoComplete="off"
      required
      sx={{
        fontFamily: "Montserrat",
        background: "transparent",
        width: "100%",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
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
          fontSize: { xs: "20px", md: fontSize || "24px" },
          fontWeight: 700,
          color: "#fff",
          "&::placeholder": {
            textOverflow: "ellipsis !important",
            color: "#fff !important",
          },
          "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
            WebkitAppearance: "none",
            margin: 0,
          },
        },
      }}
    />
  );
}

export const SelectTextField = TokenTextField;
