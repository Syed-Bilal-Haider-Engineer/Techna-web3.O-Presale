import React, { useEffect } from "react";
import {
  Box,
  Container,
  Dialog,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import {
  StyledText,
  StyledTextNormal,
  StyledButton,
  SelectTextField,
} from "../SmallComponents/AppComponents";
import { KeyboardArrowDown, Close } from "@mui/icons-material";
import { Tch, swapBg, eth } from "../Images";
import { tokenArray } from "./List";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { AppContext } from "../../utils";
import { usePresaleContract } from "../../ConnectivityAssets/hooks";
import { presaleAddress } from "../../ConnectivityAssets/environment";
import { formatUnits, parseUnits } from "@ethersproject/units";
import { toast } from "react-toastify";
import { useContext } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Loading from "../SmallComponents/loading";
import { async } from "q";
import { ethers } from "ethers";
import abi from "../../ConnectivityAssets/token.json";
const queryString = window.location.search;
const parameters = new URLSearchParams(queryString);
const refAddress = parameters.get("ref");

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 15,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "#889195" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    backgroundImage:
      "linear-gradient(to right, #0ac7bf, #00a0b2, #00799c, #00537c, #163055, #163055, #163055, #163055, #00537c, #00799c, #00a0b2, #0ac7bf)",
  },
}));
const TechnaSwap = () => {
  const { account, signer, connect } = useContext(AppContext);
  const [selectToken, setSelectToken] = useState(1);
  const presaleContract = usePresaleContract(signer);
  const [amount, setAmountstate] = useState("");
  const [result, setResultstate] = useState(0);
  const matches = useMediaQuery("(min-width:1050px)");
  const [openDialog, setOpenDialog] = useState(false);
  const [allCurrencyAddress, setCurrencyaddress] = useState("");
  const [ownerAddress, setOwneraddress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [tokenContract, setTokencontractstate] = useState("");
  const [saleProgress, setSaleProgressState] = useState(0);
  const [tokendetails, setTokendetails] = useState({
    price: 0.0,
    tokenBalance: 0.0,
    solid: 0.0,
  });

  const ref_Address = refAddress ? refAddress : ownerAddress;
  const [selecter, setSelecter] = useState({
    img: eth,
    tokens: "ETH",
  });
  let decimal = "18";
  const readsMethods = async () => {
    setLoading(true);
    try {
      let saleProgrss = await presaleContract.saleProgress();
      saleProgrss = saleProgrss / 1000;
      let phaseId = await presaleContract.phaseId();
      let presale = await presaleContract.presale(+phaseId);
      setSaleProgressState(saleProgrss);
      setTokendetails({
        ...tokendetails,
        price: formatUnits(presale?.price, "18"),
        tokenBalance: formatUnits(presale?.tokensToSell, "18"),
        solid: formatUnits(presale?.sold, "18"),
      });
      setLoading(false);
    } catch (error) {
      console.log("reads methods error", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    readsMethods();
  }, []);
  const getOwnerAddress = async () => {
    try {
      const owneraddress = await presaleContract.owner();
      setOwneraddress(owneraddress);
    } catch (error) {
      console.log("get owner address", error);
    }
  };
  const BUSDToTokenMethod = async () => {
    try {
      const busdAddress = await presaleContract.BUSD();
      setCurrencyaddress(busdAddress);
      if (amount) {
        const data = await presaleContract.BUSDToTokens(
          1,
          parseUnits(amount.toString(), +decimal)
        );

        setResultstate(formatUnits(data));
      }
    } catch (error) {
      console.log("Busd to error", error);
    }
  };
  const USDCToTokensMethod = async () => {
    try {
      const usdcAddress = await presaleContract.USDC();
      setCurrencyaddress(usdcAddress);
      if (amount) {
        const data = await presaleContract.USDCToTokens(
          1,
          parseUnits(amount.toString(), +decimal)
        );

        setResultstate(formatUnits(data));
      }
    } catch (error) {
      console.log("Busd to error", error);
    }
  };
  const bnbToTokensMethods = async () => {
    try {
      const bndAddress = await presaleContract.BNB();
      setCurrencyaddress(bndAddress);
      if (amount) {
        const data = await presaleContract.bnbToTokens(
          1,
          parseUnits(amount.toString(), +decimal)
        );

        setResultstate(formatUnits(data));
      }
    } catch (error) {
      console.log("BNB token", error);
    }
  };
  const ethToTokensMethods = async () => {
    try {
      const etherAddress = await presaleContract.Ether();

      setCurrencyaddress(etherAddress);
      if (amount) {
        const data = await presaleContract.ethToTokens(
          1,
          parseUnits(amount.toString(), "18")
        );

        setResultstate(formatUnits(data));
      }
    } catch (error) {
      console.log("ethToTokensMethods token", error);
    }
  };
  const usdtToTokensMethods = async () => {
    try {
      const usdtAddress = await presaleContract.USDT();
      setCurrencyaddress(usdtAddress);
      if (amount) {
        const data = await presaleContract.usdtToTokens(
          1,
          parseUnits(amount.toString(), "6")
        );

        setResultstate(formatUnits(data));
      }
    } catch (error) {
      console.log("usdtToTokensMethods token", error);
    }
  };
  const maticToTokensMethods = async () => {
    try {
      setCurrencyaddress("");
      if (amount) {
        const data = await presaleContract.maticToTokens(
          1,
          parseUnits(amount.toString(), +decimal)
        );

        setResultstate(formatUnits(data));
      }
    } catch (error) {
      console.log("maticToTokensMethods token", error);
    }
  };

  const init = async (selectToken = 1) => {
    switch (selectToken) {
      case 1:
        ethToTokensMethods();
        break;
      case 2:
        usdtToTokensMethods();
        break;
      case 3:
        USDCToTokensMethod();
        break;
      case 4:
        BUSDToTokenMethod();
        break;
      case 5:
        maticToTokensMethods();
        break;
      case 6:
        bnbToTokensMethods();
        break;
      default:
        toast("default case executed");
    }
  };

  React.useEffect(() => {
    if ((amount && presaleContract) || account) {
      if (!account) {
        toast.error("Please connect with wallet !");
      } else {
        init(selectToken);
      }
    } else {
      setResultstate(0);
    }
    if (presaleContract) {
      getOwnerAddress();
    }
  }, [amount, selectToken, account, presaleContract]);

  //......Buy token from all blockchains.........>
  const buyMethods = async (writeAmount, allCurrencyAddress) => {
    setLoading(true);
    try {
      if (!writeAmount) {
        return toast.error("Please enter amount !");
      }
      let decimal = selectToken === 2 ? "6" : "18";
      let amount = parseUnits(writeAmount.toString(), decimal);
      if (tokenContract) {
        let tx = await tokenContract.approve(presaleAddress, amount);
        await tx.wait();
      }
      if (allCurrencyAddress && ownerAddress && writeAmount) {
        const tx = await presaleContract.buyToken(
          allCurrencyAddress,
          amount,
          ref_Address,
          {
            gasLimit: 2100000,
          }
        );

        await tx.wait();
        toast.success("Transaction Successfully");
        await readsMethods();
        setLoading(false);
      }
      if (!allCurrencyAddress) {
        const tx = await presaleContract.buyWithMatic(ref_Address, {
          value: amount,
          gasLimit: 210000,
        });
        await tx.wait();
        toast.success("Transaction Successfully");
        await readsMethods();
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error, "error-->");
      return toast.error(error?.message || error.message);
    }
  };
  React.useEffect(() => {
    async(() => {
      try {
        if (allCurrencyAddress) {
          const contract = new ethers.Contract(allCurrencyAddress, abi, signer);
          setTokencontractstate(contract);
        }
      } catch (err) {
        console.log("approve error", err);
      }
    })();
  }, [allCurrencyAddress]);

  return (
    <>
      <Loading loading={loading} />

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
                  border: "2px solid #514A56",
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
                <hr
                  style={{ border: "1px solid #8C9296", marginTop: "17px" }}
                />
                <Box mt={1}>
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
                    <Box
                      px={2}
                      py={3}
                      sx={{
                        borderRadius: "10px",
                        height: "100%",
                      }}
                    >
                      <Box display="flex" justifyContent="space-between" mb={3}>
                        <Typography
                          sx={{
                            fontSize: "20px",
                            fontFamily: "Montserrat",
                            fontWeight: "400",
                            color: "#fff",
                          }}
                        >
                          Select Token
                        </Typography>
                        <Close
                          style={{
                            cursor: "pointer",
                            color: "#66656E ",
                          }}
                          onClick={() => {
                            setOpenDialog(!openDialog);
                          }}
                        />
                      </Box>
                      {tokenArray.map((item, i) => {
                        return (
                          <>
                            <Box
                              key={i}
                              mt={1}
                              onClick={() => {
                                setOpenDialog(false);
                                setSelecter(item);
                                setSelectToken(item?.id);
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
                          </>
                        );
                      })}
                    </Box>
                  </Dialog>

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
                      {selecter.tokens}
                    </Typography>
                    <KeyboardArrowDown color="#fff" />
                  </Box>
                  <TextField
                    placeholder="0.00"
                    type="t"
                    inputMode="numeric"
                    onChange={(e) => {
                      setAmountstate(e.target.value);
                    }}
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
                        "&::-webkit-outer-spin-button": {
                          WebkitAppearance: "none",
                          margin: 0,
                        },
                        "&::-webkit-inner-spin-button": {
                          WebkitAppearance: "none",
                          margin: 0,
                        },
                      },
                      background: "transparent",
                      width: "100%",
                      color: "#fff",
                    }}
                    name="name"
                    required={true}
                  />
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
                  onChange={(event) =>
                    event.target.value < 0
                      ? (event.target.value = 0)
                      : event.target.value
                  }
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
                  inputMode="numeric"
                  placeholder={"0.00"}
                  value={result}
                  required={true}
                  readOnly
                />
                <Box
                  my="45px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {account ? (
                    <StyledButton
                      width="90%"
                      onClick={() => {
                        buyMethods(amount, allCurrencyAddress);
                      }}
                    >
                      Buy
                    </StyledButton>
                  ) : (
                    <StyledButton
                      onClick={() => connect()}
                      width="100%"
                      padding="11px"
                      boxShadow="1px 39px 45px -1px rgba(0,85,55,0.7)"
                    >
                      Connect Wallet
                    </StyledButton>
                  )}
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
                  border: "2px solid #514A56",
                }}
              >
                <StyledText color="#fff" fontWeight={700} textAlign="center">
                  Phase 1
                </StyledText>
                <hr
                  style={{ border: "1px solid #8C9296", marginTop: "17px" }}
                />
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
                    {parseFloat(tokendetails?.price).toFixed(2)}
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
                    {parseFloat(tokendetails?.tokenBalance).toFixed(2)}
                  </StyledText>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  mb={3}
                >
                  <StyledText color="#fff" fontWeight={700}>
                    Sold Token
                  </StyledText>
                  <StyledText color="#fff" fontWeight={700}>
                    {parseFloat(tokendetails?.solid).toFixed(2)}
                  </StyledText>
                </Box>
                <Box mb={4}>
                  <BorderLinearProgress
                    variant="determinate"
                    value={saleProgress}
                  />
                </Box>
              </Box>
              {/*  */}
              <Box
                sx={{
                  background: "rgba(24, 24, 24, 0.5)",
                  backdropFilter: "blur(62.5px)",
                  borderRadius: "15px",
                  py: 2,
                  px: 3,
                  border: "2px solid #514A56",
                  mt: 3,
                }}
              >
                <StyledText color="#fff" fontWeight={700} textAlign="left">
                  Your Referral Link
                </StyledText>
                <hr
                  style={{ border: "1px solid #8C9296", marginTop: "17px" }}
                />
                <Box my={2}>
                  <SelectTextField
                    fontSize="20px"
                    value={window.location.origin + "/?ref=" + account}
                  />
                  <CopyToClipboard
                    text={window.location.origin + "/?ref=" + account}
                    onCopy={() =>
                      account
                        ? toast.success("copy refferal link successfully!")
                        : toast.error("please connect to your wallet!")
                    }
                  >
                    <StyledButton sx={{ marginTop: "10px" }} padding="9px 20px">
                      Copy
                    </StyledButton>
                  </CopyToClipboard>
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
    </>
  );
};

export default TechnaSwap;
