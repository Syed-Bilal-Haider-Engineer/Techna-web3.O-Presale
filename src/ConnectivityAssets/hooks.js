import React from "react";
import { Contract } from "@ethersproject/contracts";
import tokenAbi from "./tokenAbi.json";
import { presaleAddress } from "./environment";
import { ethers } from "ethers";
let walletAddress = "0xcC5c436Fb9fa7c6fc42102Df00A5b976Cd4edb70";
const provider = new ethers.providers.JsonRpcProvider(
  "https://data-seed-prebsc-1-s1.binance.org:8545/"
);
export const voidAccount = new ethers.VoidSigner(walletAddress, provider);
function useContract(address, ABI, signer) {
  return React.useMemo(() => {
    if (signer) {
      return new Contract(address, ABI, signer);
    } else {
      return new Contract(address, ABI, voidAccount);
    }
  }, [address, ABI, signer]);
}
export function usePresaleContract(signer) {
  return useContract(presaleAddress, tokenAbi, signer);
}
