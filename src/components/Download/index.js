import React from "react";
import "../Download/style.css";
import iosbtn from "../../assets/images/iosstore.png";
import andriodbtn from "../../assets/images/playstore.png";
import downloadimg from "../../assets/images/phonetop.png";

function Download() {
  return (
    <>
      <div className="download" id="download-section">
        <div className="download-image">
          <img src={downloadimg} alt="dwonload image" />
        </div>
        <div className="download-content">
          <div className="download-title">
            Avaliable on both{" "}
            <span style={{ color: "dodgerblue" }}>Play Store</span> and{" "}
            <span style={{ color: "dodgerblue" }}>App store</span>
          </div>
          <div className="download-caption">
            Built to accommodate all users on Andriod and IOS. Download now !!
          </div>
          <div className="download-btn__cover">
            <a href="/" className="download-btn">
              <img src={iosbtn} />
            </a>
            <a href="/" className="download-btn">
              <img
                src={andriodbtn}
                style={{
                  transform: "scale(1.1)",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Download;
