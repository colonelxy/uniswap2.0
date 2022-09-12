import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "[0x0dAb10D257080A1377BFa53dED916C96033A700a]"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "[https://eth-goerli.g.alchemy.com/v2/WLxGthKDZM4XcyexhWw_x0dWh7HVlPmX]",
  },
};