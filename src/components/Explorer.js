import React, { useState, useEffect } from "react";
import axios from "axios";
// import BTC from '../assets/btc-img.png'
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import "./Explorer.css";
import Doubleda from "../assets/logo.png";
import Panacea from "../assets/panacea.png";

const Explorer = () => {
  const [data, setData] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(data)

  if (!data) return null;

  return (
    <div className="explorer">
      <div className="container">
        {/* Left */}
        <div className="left">
          <h1>The Explorer</h1>
          <h2>Check Out DoubleDa</h2>
          <p>See the network status and all transactions of DoubleDa</p>
          <button className="btn">See Network</button>
        </div>

        {/* Right */}

        <div className="right">
          <div className="card">
            <div className="top">
              <img src={Doubleda} alt="" />
              <h5>DoubleDa</h5>
            </div>
            <div className="price">
              ${data[0].current_price.toLocaleString()}
            </div>
            <div className="change">
              {data[0].price_change_percentage_24h < 0 ? (
                <span className="red">
                  <FiArrowUpRight className="icon" />
                  1.26%
                </span>
              ) : (
                <span className="blue">
                  <FiArrowDown className="icon" />
                  1.26%
                </span>
              )}
            </div>
          </div>
          <div className="card">
            <div className="top">
              <img src={Panacea} alt="" />
              <h5>Panacea</h5>
            </div>
            <div className="price">
              ${data[0].current_price.toLocaleString()}
            </div>
            <div className="change">
              {data[0].price_change_percentage_24h < 0 ? (
                <span className="blue">
                  <FiArrowDown className="icon" />
                  1.33%
                </span>
              ) : (
                <span className="red">
                  <FiArrowUpRight className="icon" />
                  1.33%
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explorer;
