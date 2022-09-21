import { Goerli } from "@usedapp/core";


export const ROUTER_ADDRESS = "0xf36960eA0ff4CBaE1ed868452768A0a74A05556F"; 


export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/WLxGthKDZM4XcyexhWw_x0dWh7HVlPmX",
  },
};
