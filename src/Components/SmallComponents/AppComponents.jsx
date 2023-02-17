import { Alert, Box, Snackbar, Typography } from "@mui/material";
import { Button } from "@mui/material";

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
