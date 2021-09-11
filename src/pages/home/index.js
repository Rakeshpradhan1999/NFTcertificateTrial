import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/header";
import "./home.css";

import AfterLaunch from "../../components/afterLaunch";

toast.configure();
const Home = ({ account, mint, totalSupply, displayPrice, loadWeb3 }) => {
  return (
    <div style={{ backgroundColor: "#1D1F4A" }}>
      <div className="banner">
        <Header account={account} loadWeb3={loadWeb3} />

        <AfterLaunch totalSupply={totalSupply} account={account} mint={mint} />
      </div>
    </div>
  );
};

export default Home;
