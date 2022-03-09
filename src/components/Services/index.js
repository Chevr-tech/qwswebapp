import React from "react";
import "../Services/style.css";
import { data } from "./data";

function Services() {
  return (
    <>
      <div className="services" id="service-section">
        <div
          className="services-top"
          style={{
            maxWidth: "600px",
          }}
        >
          <div className="services-title">
            Perform cryptocurrency exchange , peer-2-peer transaction{" "}
            <span
              style={{
                position: "relative",
                top: "5px",
                fontSize: "16px",
              }}
            >
              💵
            </span>
            , view current market status{" "}
            <span
              style={{
                position: "relative",
                top: "2px",
                fontSize: "14px",
              }}
            >
              📈
            </span>
            {"  "}
            and lots more...,
            <span
              style={{
                position: "relative",
                top: "5px",
                fontSize: "14px",
              }}
            >
              👍
            </span>
          </div>
          <div className="services-caption">
            We unluck new boundaries in the crypto exchange space
          </div>
        </div>

        <div className="service-details">
          {data.map(({ icon, title, text }, i) => (
            <div className="offers-card" key={i}>
              {/* circle */}
              <div
                className={i % 2 == 0 ? "offers-circle" : "offers-circle dnone"}
              ></div>
              <div
                className={
                  i % 2 !== 0 ? "offers-sm__circle" : "offers-sm__circle dnone"
                }
              ></div>
              <div className="offers-image">
                <img
                  src={icon}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className="offers-title">{title}</div>
              <p className="offers-caption">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
