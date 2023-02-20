import React from "react";

import { Box, Container, Grid, InputAdornment, TextField } from "@mui/material";
import { Logo } from "./Images";
import { StyledText, StyledTextNav } from "./SmallComponents/AppComponents";
import { styled } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const IconStyle = styled(Box)({
  backgroundColor: "#808080",
  borderRadius: "80px",
  padding: "10px",
  display: "flex",
  boxShadow:
    "inset -4px 4px 4px rgba(255, 255, 255, 0.25), inset 5px -4px 4px rgba(0, 0, 0, 0.25)",
  filter: "drop-shadow(0px 4px 17px rgba(0, 0, 0, 0.3))",
  alignItems: "center",
  justifyContent: "center",
  width: "23px",
});

const CustomTextField = styled(TextField)({
  //   maxWidth: check ? "100%" : "400px",
  fontFamily: "Montserrat",
  fontWeight: "500",

  borderRadius: "55px",
  "& label.Mui-focused": {
    color: "#000",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#262626",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#262626",
    },
    "&:hover fieldset": {
      borderColor: "#262626",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#262626",
      borderRadius: "50px",
    },
  },
  input: {
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: "#8C9296 !important",
    },
    fontSize: { xs: "12px", md: "14px" },
  },
  background: "#000",
});
const Footer = () => {
  return (
    <Box bgcolor="#000" py={4}>
      <Container maxWidth="lg">
        <Grid container spacing={4} my={5}>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            display="flex"
            flexDirection="column"
            alignItems={{ xs: "center", md: "flex-start" }}
          >
            <img src={Logo} alt="" />
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            display="flex"
            flexDirection="column"
            alignItems={{ xs: "center", md: "flex-start" }}
            gap={2}
          >
            <StyledText color="#fff" fontWeight={700}>
              About
            </StyledText>
            <StyledText color="#8C9296" fontWeight={500}>
              Product
            </StyledText>
            <StyledText color="#8C9296" fontWeight={500}>
              Roadmap
            </StyledText>
            <StyledText color="#8C9296" fontWeight={500}>
              Tokenomics
            </StyledText>
            <StyledText color="#8C9296" fontWeight={500}>
              Whitepaper
            </StyledText>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            gap={2}
            display="flex"
            flexDirection="column"
            alignItems={{ xs: "center", md: "flex-start" }}
          >
            <StyledText color="#fff" fontWeight={700}>
              CONTACT
            </StyledText>
            <StyledText color="#8C9296" fontWeight={500}>
              email@gmail.com
            </StyledText>
            <StyledText color="#8C9296" fontWeight={500}>
              +999-552-553-123
            </StyledText>
            <StyledText color="#8C9296" fontWeight={500}>
              Street,name
            </StyledText>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            display="flex"
            flexDirection="column"
            alignItems={{ xs: "center", md: "flex-start" }}
            gap={2}
          >
            <StyledText color="#fff" fontWeight={700}>
              NEWSLETTER
            </StyledText>
            <StyledText
              color="#8C9296"
              fontWeight={500}
              textAlign={{ xs: "center", md: "left" }}
            >
              Subscribe our newsletter to get more information about
              cryptocurrency
            </StyledText>
            <CustomTextField
              autoComplete="off"
              id="standard-name"
              sx={
                {
                  // margin: "40px 0px",
                }
              }
              name="name"
              placeholder={"Please enter your email"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconStyle>
                      <ArrowForwardIcon sx={{ color: "rgba(0, 0, 0, 0.3)" }} />
                    </IconStyle>
                  </InputAdornment>
                ),
              }}
              required={true}
            />
          </Grid>
        </Grid>
        <hr style={{ border: "1px solid #8C9296", marginTop: "43px" }} />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection={{ xs: "column", md: "row" }}
        >
          <StyledTextNav fontWeight={400} my={3} textAlign="center">
            Copyright © 2021 UI8 LLC. All rights reserved
          </StyledTextNav>

          <Box sx={{ display: "flex", gap: { xs: 3, md: 4 }, my: 2 }}>
            <IconStyle>
              <i
                className="fa-brands fa-twitter"
                style={{ fontSize: "20px", color: "#fff", paddingX: "10px" }}
              ></i>
            </IconStyle>
            <IconStyle>
              <i
                className="fa-brands fa-discord"
                style={{ fontSize: "20px", color: "#fff" }}
              ></i>
            </IconStyle>
            <IconStyle>
              <i
                className="fa-brands fa-medium"
                style={{ fontSize: "20px", color: "#fff" }}
              ></i>
            </IconStyle>
            <IconStyle>
              <i
                className="fa-brands fa-telegram"
                style={{ fontSize: "20px", color: "#fff" }}
              ></i>
            </IconStyle>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
