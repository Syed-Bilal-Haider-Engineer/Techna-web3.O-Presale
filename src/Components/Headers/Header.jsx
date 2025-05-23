import React, { useContext, useState } from "react";
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
import { Logo } from "../Images";
import { AppContext } from "../../utils";
import { StyledButton, StyledText } from "../SmallComponents/AppComponents";

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

const Header = () => {
  const { account, connect, disconnect } = useContext(AppContext);
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && ["Tab", "Shift"].includes((event).key)) {
      return;
    }
    setDrawerOpen(open);
  };

  const renderDrawerContent = () => (
    <Box
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box display="flex" justifyContent="center" my={2}>
        <img width="140px" src={Logo} alt="Logo" />
      </Box>
      <List>
        {["Trade", "Earn", "Blog"].map((item) => (
          <ListItem key={item} button sx={{ justifyContent: "center" }}>
            <ListItemText
              primary={item}
              sx={{
                textAlign: "center",
                textTransform: "capitalize",
                color: "#ffffff",
                cursor: "pointer",
              }}
            />
          </ListItem>
        ))}
      </List>
      <Box mb={1} display="flex" flexDirection="column" alignItems="center">
        <StyledText padding="9px 19px" style={{ color: "#fff", background: "transparent" }}>
          WhitePaper
        </StyledText>
        <StyledButton width="90%" onClick={account ? disconnect : connect}>
          {account ? `${account.slice(0, 4)}...${account.slice(-4)}` : "Connect Wallet"}
        </StyledButton>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        background: "linear-gradient(123.56deg, #0E2929 28.46%, #150D1C 90.07%)",
        backdropFilter: "blur(27.5px)",
        py: 2,
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <img width="90%" src={Logo} alt="Logo" />
          </Box>
          <Box>
            <Hidden mdUp>
              <Button onClick={toggleDrawer(true)} sx={{ zIndex: 1 }}>
                <MenuIcon sx={{ fontSize: 38, color: "#fff", cursor: "pointer" }} />
              </Button>
              <Paper>
                <SwipeableDrawer
                  anchor="left"
                  open={drawerOpen}
                  onClose={toggleDrawer(false)}
                  onOpen={toggleDrawer(true)}
                  classes={{ paper: classes.paper }}
                >
                  {renderDrawerContent()}
                </SwipeableDrawer>
              </Paper>
            </Hidden>
            <Hidden mdDown>
              <Box display="flex" alignItems="center" gap={3}>
                <StyledText padding="9px 19px" color="#fff" fontWeight={700}>
                  WhitePaper
                </StyledText>
                <StyledButton onClick={account ? disconnect : connect} padding="9px 19px">
                  {account ? `${account.slice(0, 4)}...${account.slice(-4)}` : "Connect Wallet"}
                </StyledButton>
              </Box>
            </Hidden>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
