import React, { useContext } from "react";
import {
  Container,
  Hidden,
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
import { Logo } from "./Images";

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
  // const matches1 = useMediaQuery("(max-width:1279px)");

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
        <img width="140px" src={Logo} alt="" />
      </Box>
      <List>
        {["Trade", "Earn", "Blog"].map((text, index) => (
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
        ))}
      </List>
      <Box
        mb={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <StyledText
          padding="9px 19px"
          style={{ color: "#fff", background: "transparent" }}
        >
          WhitePaper
        </StyledText>
        {account ? (
          <StyledButton width="90%" onClick={() => disconnect()}>
            {account.slice(0, 4) + "..." + account.slice(-4)}
          </StyledButton>
        ) : (
          <StyledButton width="90%" onClick={() => connect()}>
            Connect Wallet
          </StyledButton>
        )}
      </Box>
    </div>
  );
  return (
    <>
      <Box
        sx={{
          background: [
            // "rgba(24, 24, 24, 0.5)",
            "linear-gradient(123.56deg, #0E2929 28.46%, #150D1C 90.07%)",
          ],
          backdropFilter: "blur(27.5px)",
        }}
        width="100%"
        py={2}
      >
        <Container maxWidth="lg">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <img width="90%" src={Logo} alt="" />
            </Box>
            {/* <Hidden mdDown>
              <Box display="flex" alignItems="center" gap={5}>
                <StyledText fontWeight={700} color="#fff" trade="trade">
                  Trade
                </StyledText>
                <StyledText fontWeight={500} color="#8C9296">
                  Earn
                </StyledText>
                <StyledText fontWeight={500} color="#8C9296">
                  Perpertual
                </StyledText>
                <StyledText fontWeight={500} color="#8C9296">
                  Blog
                </StyledText>
              </Box>
            </Hidden> */}
            <Box>
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
                          color: "#fff",
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
              <Hidden mdDown>
                <Box display="flex" alignItems="center" gap={3}>
                  <a
                    href=""
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <StyledText
                      padding="9px 19px"
                      color="#fff"
                      fontWeight={700}
                    >
                      WhitePaper
                    </StyledText>
                  </a>
                  {account ? (
                    <StyledButton onClick={() => disconnect()}>
                      {account.slice(0, 4) + "..." + account.slice(-4)}
                    </StyledButton>
                  ) : (
                    <StyledButton padding="9px 19px" onClick={() => connect()}>
                      Connect Wallet
                    </StyledButton>
                  )}
                </Box>
              </Hidden>
            </Box>
          </Box>
        </Container>
        {/* <hr style={{ border: "1px solid #8C9296", margin: "13px 0px" }} /> */}
        {/* <Hidden mdDown>
          <Container maxWidth="lg">
            <Box display="flex" alignItems="center" gap={4}>
              <StyledTextNav fontWeight={500}> Swap</StyledTextNav>
              <StyledTextNav fontWeight={500}>Liquidity</StyledTextNav>
              <StyledTextNav fontWeight={500}>Perpetual</StyledTextNav>
              <StyledTextNav fontWeight={700} style={{ color: "#00FF75" }}>
                Options
              </StyledTextNav>
            </Box>
          </Container>
        </Hidden> */}
      </Box>
    </>
  );
}
