import React from "react";
import { Box, Container, Grid, TextField, Typography } from "@mui/material";
import {
  StyledText,
  StyledTextNormal,
  StyledButton,
  SelectInput,
} from "./SmallComponents/AppComponents";
import { KeyboardArrowDown } from "@mui/icons-material";
import { UsdT2, Tch } from "./Images";
import { useState } from "react";

const TechnaSwap = () => {
  const [selects, setselect] = useState(0);

  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(to right, #0ac7bf, #00a0b2, #00799c, #00537c, #163055, #163055, #163055, #163055, #00537c, #00799c, #00a0b2, #0ac7bf)",
        py: "50px",
      }}
    >
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center">
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 700,
              fontSize: "48px",
              lineHeight: "60px",
              textAlign: "center",
              color: "#FFFFFF",
              mb: "1.3rem",
            }}
          >
            Earn more with
            <br />
            <span style={{ color: "#00FF75" }}>Tech</span>
            <span style={{ color: "#8F32D8" }}>Na</span>
          </Typography>
        </Box>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6} md={5}>
            <Box
              sx={{
                background: "rgba(24, 24, 24, 0.5)",
                backdropFilter: "blur(62.5px)",
                borderRadius: "15px",
                py: 2,
                px: 3,
              }}
            >
              <StyledText color="#fff" fontWeight={700} textAlign="center">
                TechNa Swap
              </StyledText>
              <StyledTextNormal
                color="#8C9296"
                textAlign="center"
                fontSize="16px"
              >
                Buy TCN on the
                <span style={{ margin: "0px 5px", color: "#BD69FF" }}>
                  Polygon
                </span>
                network
              </StyledTextNormal>
              <hr style={{ border: "1px solid #8C9296", marginTop: "17px" }} />
              <Box mt={1}>
                <SelectInput selects={selects} setselect={setselect} />
              </Box>
              <Box display="flex" alignItems="center" gap={1} mt={6} mb={3}>
                <img src={Tch} alt="" />
                <StyledText color="#fff" fontWeight={700}>
                  TCN
                </StyledText>
              </Box>
              <TextField
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
                    color: "#FFF",
                  },
                  background: "transparent",
                  width: "100%",
                  color: "#fff",
                }}
                name="name"
                type="number"
                placeholder={"0.00"}
                InputProps={{}}
                required={true}
              />
              <Box my="45px">
                <StyledButton width="100%" padding="15px">
                  Connect Wallet
                </StyledButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <StyledTextNormal
          color="#8C9296"
          textAlign="center"
          fontSize="16px"
          mt="2rem"
        >
          Need help? Join our Discord
          <span style={{ margin: "0px 5px", color: "#BD69FF" }}>Discord</span>
          community!
        </StyledTextNormal>
      </Container>
    </Box>
  );
};

export default TechnaSwap;
