import React from "react";
import "../Hero/style.css";
import heroimg from "../../assets/images/phonetop.png";
import deviceimg from "../../assets/svg/device.svg";

function Hero() {
  const hanldeClick = () => {
    // alert("this was clicked");
    window.scroll({
      top: 550,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <div className="hero-title">Fast and Secure P2P Crypto exchange</div>
          <div className="hero-caption">
            We understand that security has to be improved without affecting
            speed. With qwswap, you can send and receive assets securely in
            almost real time.
          </div>
          <div className="hero-cta" onClick={hanldeClick}>
            <p>Explore</p>
          </div>
        </div>
        <div className="hero-right">
          <img src={deviceimg} alt="phone image" />
        </div>
      </div>
    </>
  );
}

export default Hero;
