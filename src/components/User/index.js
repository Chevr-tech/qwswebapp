import React from "react";
import "../User/styles.css";
import { data } from "./data";
import userimage from "../../../src/assets/svg/userimage.svg";

function User(props) {
  return (
    <>
      <div className="users">
        <div className="user-top__cover">
          <div className="user-top__title">
            An exchange built on{" "}
            <span
              style={{
                color: "dodgerblue",
                textTransform: "uppercase",
              }}
            >
              trust
            </span>{" "}
          </div>
          <img src={userimage} alt="image of active users" />
        </div>
        <div className="user-card__top-cover">
          {data.map(({ title, icon, content }) => (
            <div className="user-card">
              <div className="user-title">
                {title}
                <span
                  style={{
                    fontSize: "1.1rem",
                  }}
                >
                  {icon}
                </span>
              </div>
              <hr />
              <div className="user-caption">{content}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default User;
