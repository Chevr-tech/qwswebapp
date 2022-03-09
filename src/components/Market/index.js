import React, { useEffect, useState } from "react";
import "../Market/style.css";
import axios from "axios";
import greentrend from "../../assets/svg/green.svg";
import redtrend from "../../assets/svg/red.svg";

function Market() {
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Ctether%2Csolana%2Ccardano%2Cdogecoin%2Cbinancecoin%2Cpolkadot&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, []);

  return (
    <>
      <div className="market">
        <div className="market-rect"></div>
        <div className="market-circle"></div>
        <div className="market-top">
          <div className="market-title">Trade your top Crytpocurrency📊</div>
          <div className="market-caption">
            We support the most traded Crytpocurrency
          </div>
        </div>
        <div className="market-data__cover">
          {loading ? (
            <div> fetch market data...</div>
          ) : (
            data.map((item) => (
              <div className="market-card">
                <div className="market-card__top">
                  <div className="market-img">
                    <img src={item.image} alt={item.id} />
                  </div>
                  <div className="market-name">
                    <div className="market-name__short">{item.symbol}</div>
                    <div className="market-name__full">{item.id}</div>
                  </div>
                </div>
                <div className="market-card__bottom">
                  <div className="market-currentprice">
                    <div className="market-currentprice__title">
                      current price
                    </div>
                    <div className="market-currentprice__text">
                      {item.current_price.toLocaleString("en-US", {
                        currency: "USD",
                      })}
                      $
                    </div>
                  </div>
                  <div className="market-pc__cover">
                    <div
                      className={
                        item.price_change_percentage_24h > 0
                          ? "market-pc__cover-text"
                          : "market-pc__cover-text red"
                      }
                    >
                      {item.price_change_percentage_24h.toFixed(2)}%
                    </div>
                    <div className="market-pc__trend">
                      <img
                        src={
                          item.price_change_percentage_24h > 0
                            ? greentrend
                            : redtrend
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Market;
