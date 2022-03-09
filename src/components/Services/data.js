import React from "react";
import { MdSecurity } from "react-icons/md";
import { RiExchangeDollarFill } from "react-icons/ri";
import { GiFastArrow } from "react-icons/gi";
import { FcComboChart } from "react-icons/fc";
import secureImage from "../../assets/svg/secure.svg";
import p2pimage from "../../assets/images/p2p.jpg";
import forex from "../../assets/svg/forex.svg";
import swap from "../../assets/images/swap.png";

export const data = [
  {
    icon: secureImage,
    title: "Secure",
    text: `Security is protection from, or resilience against, potential harm (or other unwanted coercive change) caused by others, by restraining the freedom of others to act.`,
  },
  {
    icon: swap,
    title: "Swap",
    text: `In finance, a swap is an agreement between two counterparties to exchange financial instruments or cashflows or payments for a certain time.`,
  },
  {
    icon: p2pimage,
    title: "P2P",
    text: `P2P trading is the act of buying and selling cryptocurrencies directly between users, without a third party or intermediary.`,
  },
  {
    icon: forex,
    title: "Market Data",
    text: `Market data refers to the live streaming of trade-related data. It encompasses a range of information such as price, bid/ask quotes and market volume.`,
  },
];
