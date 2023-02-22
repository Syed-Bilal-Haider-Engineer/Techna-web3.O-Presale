import Backdrop from "@mui/material/Backdrop";
import { makeStyles } from "@mui/styles";
import { RingLoader } from "react-spinners";

const useStyles = makeStyles(() => ({
  backdrop: {
    zIndex: 220000000,
    color: "#fff",
  },
}));

export default function Loading({ loading }) {
  const classes = useStyles();
  return (
    <div>
      <Backdrop className={classes.backdrop} open={loading}>
        <RingLoader color="#AB54F0" size={150} />
      </Backdrop>
    </div>
  );
}
