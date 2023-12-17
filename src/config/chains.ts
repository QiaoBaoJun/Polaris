import { defineChain } from "viem";
import {
  arbitrum,
  avalanche,
  base,
  bsc,
  celo,
  classic,
  confluxESpace,
  eos,
  fantom,
  filecoin,
  gnosis,
  linea,
  mainnet,
  neonMainnet,
  okc,
  opBNB,
  optimism,
  polygon,
  sepolia,
  zkSync,
} from "viem/chains";

export const shibarium = defineChain({
  id: 109,
  name: "Shibarium",
  network: "shibarium",
  nativeCurrency: {
    decimals: 18,
    name: "BONE",
    symbol: "BONE",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.shibrpc.com"],
    },
    public: {
      http: ["https://rpc.shibrpc.com"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://shibariumscan.io" },
  },
});
// Klaytn 铭文 klys  总量 2100万

// 添加自定义链,链ID是 8217（三个框分别填写）:
// Klaytn
// https://public-en-cypress.klaytn.net
// KLAY

// data:,{"p":"krc-20","op":"mint","tick":"klys","amt":"10000"}

export const Klay = defineChain({
  id: 8217,
  name: "Klaytn",
  network: "Klaytn",
  nativeCurrency: {
    decimals: 18,
    name: "KLAY",
    symbol: "KLAY",
  },
  rpcUrls: {
    default: {
      http: ["https://public-en-cypress.klaytn.net"],
    },
    public: {
      http: ["https://public-en-cypress.klaytn.net"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://shibariumscan.io" },
  },
});
export const ethw = defineChain({
  id: 10001,
  name: "ETHW-mainnet",
  network: "ETHW-mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "ETHW",
    symbol: "ETHW",
  },
  rpcUrls: {
    default: {
      http: ["https://mainnet.ethereumpow.org"],
    },
    public: {
      http: ["https://mainnet.ethereumpow.org"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://mainnet.ethwscan.com" },
  },
});

export const inscriptionChains = {
  eth: mainnet,
  Klay,
  bsc,
  opBNB,
  okc,
  polygon,
  fantom,
  avalanche,
  arbitrum,
  optimism,
  base,
  zkSync,
  classic,
  ethw,
  eos,
  neonMainnet,
  linea,
  celo,
  confluxESpace,
  gnosis,
  filecoin,
  shibarium,
  sepolia,
};

export type ChainKey = keyof typeof inscriptionChains;
