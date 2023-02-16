import React, { useContext } from "react";
import {
  Container,
  Hidden,
  useMediaQuery,
  SwipeableDrawer,
  Button,
  List,
  ListItem,
  ListItemText,
  Box,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import { logo } from "./SmallComponents/Images";

import { AppContext } from "../utils";
import { StyledButton, StyledText } from "./SmallComponents/AppComponents";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    alignItems: "center",
  },
  paper: {
    background: "#000000 !important",
  },
  hover: {
    "&:hover": {
      color: "#FFB800",
    },
  },
});

export default function Header() {
  const { account, connect, disconnect } = useContext(AppContext);
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const matches1 = useMediaQuery("(max-width:1279px)");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box display="flex" justifyContent="center">
        <img width="150px" src={logo} alt="" />
      </Box>
      <List>
        {["About", "Services", "Roadmap", "FAQ", "Statistic"].map(
          (text, index) => (
            <ListItem
              button
              style={{
                justifyContent: "center",
              }}
              key={text}
            >
              <ListItemText
                style={{
                  textTransform: "capitalize",
                  textAlign: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#ffffff",
                }}
                primary={text}
              />
            </ListItem>
          )
        )}
      </List>
      <Box mb={1} display="flex" justifyContent="center">
        {account ? (
          <StyledButton width="90%" onClick={() => disconnect()}>
            {account.slice(0, 4) + "..." + account.slice(-4)}
          </StyledButton>
        ) : (
          <StyledButton width="90%" onClick={() => connect()}>
            Connect
          </StyledButton>
        )}
      </Box>
    </div>
  );
  return (
    <>
      <Box
        sx={{
          background: "transparent",
        }}
        height="92px"
        width="100%"
        py={1}
      >
        <Container maxWidth="xl">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <img width="60px" src={logo} alt="" />
            <Box
              display="flex"
              justifyContent={matches1 ? "end" : "space-between"}
              alignItems="center"
            >
              <Hidden mdDown>
                <StyledText mr={6}>About</StyledText>
                <StyledText mr={6}>Services</StyledText>
                <StyledText mr={6}>Roadmap</StyledText>
                <StyledText mr={6}>FAQ</StyledText>
                {account ? (
                  <StyledButton width="150px" onClick={() => disconnect()}>
                    {account.slice(0, 4) + "..." + account.slice(-4)}
                  </StyledButton>
                ) : (
                  <StyledButton width="150px" onClick={() => connect()}>
                    Connect
                  </StyledButton>
                )}
              </Hidden>

              <Hidden mdUp>
                {["left"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button
                      onClick={toggleDrawer(anchor, true)}
                      style={{ zIndex: 1 }}
                    >
                      <MenuIcon
                        style={{
                          fontSize: "38px",
                          cursor: "pointer",
                          color: "#000000",
                        }}
                      ></MenuIcon>
                    </Button>
                    <Paper>
                      <SwipeableDrawer
                        classes={{ paper: classes.paper }}
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                      >
                        {list(anchor)}
                      </SwipeableDrawer>
                    </Paper>
                  </React.Fragment>
                ))}
              </Hidden>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
