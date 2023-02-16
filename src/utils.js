import React from "react";
import { BigNumber } from "@ethersproject/bignumber";
import { MaxUint256 } from "@ethersproject/constants";
import { Web3Provider } from "@ethersproject/providers";
import { createContext } from "react";
import { useState } from "react";
import { providers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      networkUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      rpc: {
        97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      },
      chainId: 97,
    },
  },
};
const web3Modal = new Web3Modal({
  // cacheProvider: true,
  providerOptions,
  theme: {
    background: "#000000",
    main: "rgb(199, 199, 199)",
    secondary: "rgb(136, 136, 136)",
    // border: "rgba(195, 195, 195, 0.14)",
    hover: "rgb(16, 26, 32)",
  },
});
export function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}
// add 10%
export function calculateGasMargin(value) {
  return +(
    (value * BigNumber.from(10000).add(BigNumber.from(1000))) /
    BigNumber.from(10000)
  ).toFixed(0);
  // return value;
}
//CalculatePayableGas
export const gasEstimationPayable = async (account, fn, data, amount) => {
  if (account) {
    const estimateGas = await fn(...data, MaxUint256).catch(() => {
      return fn(...data, { value: amount.toString() });
    });
    return calculateGasMargin(estimateGas);
  }
};
export const gasEstimationForAll = async (account, fn, data) => {
  if (account) {
    const estimateGas = await fn(...data, MaxUint256).catch(() => {
      return fn(...data);
    });
    return calculateGasMargin(estimateGas);
  }
};
export const url =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:4000";
let initialState = {
  provider: null,
  web3Provider: null,
  account: null,
  chainId: null,
  signer: null,
};
export const AppContext = createContext(initialState);
export const AppContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const connect = async () => {
    const provider = await web3Modal.connect();
    const web3Provider = new providers.Web3Provider(provider);
    const signer = web3Provider.getSigner();
    const account = await signer.getAddress();
    const network = await web3Provider.getNetwork();
    setState({
      ...state,
      provider: provider,
      web3Provider: web3Provider,
      account: account,
      signer: signer,
      chainId: network.chainId,
    });
  };
  const disconnect = React.useCallback(
    async function () {
      await web3Modal.clearCachedProvider();
      if (
        state.provider?.disconnect &&
        typeof state.provider.disconnect === "function"
      ) {
        await state.provider.disconnect();
      }
      setState({
        ...state,
        provider: null,
        web3Provider: null,
        account: null,
        chainId: null,
        signer: null,
      });
      window.location.reload();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.provider]
  );
  React.useEffect(() => {
    if (state.provider?.on) {
      const handleAccountsChanged = (accounts) => {
        setState({
          ...state,
          account: accounts[0],
        });
      };
      const handleChainChanged = (_hexChainId) => {
        window.location.reload();
      };
      const handleDisconnect = (error) => {
        disconnect();
      };
      state.provider.on("accountsChanged", handleAccountsChanged);
      state.provider.on("chainChanged", handleChainChanged);
      state.provider.on("disconnect", handleDisconnect);
      return () => {
        if (state.provider.removeListener) {
          state.provider.removeListener(
            "accountsChanged",
            handleAccountsChanged
          );
          state.provider.removeListener("chainChanged", handleChainChanged);
          state.provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.provider, disconnect]);
  return (
    <AppContext.Provider
      value={{
        account: state.account,
        signer: state.signer,
        connect,
        disconnect,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
