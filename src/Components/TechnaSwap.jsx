import React from "react";
import { Box, Container, Grid, TextField, Typography } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import {
  StyledText,
  StyledTextNormal,
  StyledButton,
  SelectInput,
} from "./SmallComponents/AppComponents";

import { Tch, swapBg } from "./Images";
import { useState } from "react";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 15,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "#889195" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    // backgroundColor: theme.palette.mode === "light" ? "red" : "#308fe8",
    backgroundImage:
      "linear-gradient(to right, #0ac7bf, #00a0b2, #00799c, #00537c, #163055, #163055, #163055, #163055, #00537c, #00799c, #00a0b2, #0ac7bf)",
  },
}));
const TechnaSwap = () => {
  const [selects, setselect] = useState(0);
  return (
    <Box
      sx={{
        py: "50px",
        bgcolor: "#130020",
        backgroundImage: `url(${swapBg})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center">
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 700,
              fontSize: { xs: "38px", md: "48px" },
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
        <Grid
          container
          justifyContent="space-between"
          spacing={{ xs: 3, md: 0 }}
        >
          <Grid item xs={12} sm={6} md={6}>
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
                type="phone"
                placeholder={"0.00"}
                InputProps={{}}
                required={true}
              />
              <Box
                my="45px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <StyledButton
                  width="100%"
                  padding="11px"
                  boxShadow="1px 39px 45px -1px rgba(0,85,55,0.7)"
                  WebkitBoxShadow="1px 39px 45px -1px rgba(0,85,55,0.7)"
                  MozBoxShadow="1px 39px 45px -1px rgba(0,85,55,0.7)"
                >
                  Buy
                </StyledButton>
              </Box>
            </Box>
          </Grid>
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
                Phase 1
              </StyledText>
              <hr style={{ border: "1px solid #8C9296", marginTop: "17px" }} />
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                my={3}
              >
                <StyledText color="#fff" fontWeight={700}>
                  Current Token Price
                </StyledText>
                <StyledText color="#fff" fontWeight={700}>
                  0.00
                </StyledText>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mb={3}
              >
                <StyledText color="#fff" fontWeight={700}>
                  Token Balance
                </StyledText>
                <StyledText color="#fff" fontWeight={700}>
                  0.00
                </StyledText>
              </Box>
              {/* <Box mb={4}>
                <BorderLinearProgress variant="determinate" value={50} />
              </Box> */}
            </Box>

            {/* phase 2 */}

            <Box
              sx={{
                background: "rgba(24, 24, 24, 0.5)",
                backdropFilter: "blur(62.5px)",
                borderRadius: "15px",
                py: 2,
                px: 3,
                mt: 3,
              }}
            >
              <StyledText color="#fff" fontWeight={700} textAlign="center">
                Phase 2
              </StyledText>

              <hr style={{ border: "1px solid #8C9296", marginTop: "17px" }} />
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                my={3}
              >
                <StyledText color="#fff" fontWeight={700}>
                  Current Token Price
                </StyledText>
                <StyledText color="#fff" fontWeight={700}>
                  0.00
                </StyledText>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mb={3}
              >
                <StyledText color="#fff" fontWeight={700}>
                  Token Balance
                </StyledText>
                <StyledText color="#fff" fontWeight={700}>
                  0.00
                </StyledText>
              </Box>
              <Box mb={4}>
                <BorderLinearProgress variant="determinate" value={20} />
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
          Need help? Join our
          <span style={{ margin: "0px 5px", color: "#BD69FF" }}>Discord</span>
          community!
        </StyledTextNormal>
      </Container>
    </Box>
  );
};

export default TechnaSwap;
