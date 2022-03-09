import React from "react";
import "../Body/style.css";

function Body({ children }) {
  return (
    <div className="body">
      <div className="circle-one"></div>
      <div className="rect-one"></div>
      <div className="wbtn">
        <p
          style={{
            display: "block",
          }}
        >
          Quick trade
        </p>
        <a
          href={
            "https://wa.me/+2348102851218?text=Hello%20I%20would%20like%20to%20trade%20my:"
          }
          target={"_blank"}
          className="whatsapp"
        ></a>
      </div>
      {children}
    </div>
  );
}

export default Body;
