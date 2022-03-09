import React from "react";
import "../Footer/style.css";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { HiMail } from "react-icons/hi";
import { FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer" id="footer-section">
        <div className="footer-cover">
          <div className="footer-brand">
            <img src="" alt="" />
            <h4>QWswap</h4>
            <p
              style={{
                fontSize: "12px",
              }}
            >
              Fast and Secure crypto exchange
            </p>
          </div>

          <div className="social-cover">
            <div className="social-title">Connect with us </div>
            <div className="social-links__cover">
              <Link
                to={{
                  pathname: "/",
                }}
                target="_blank"
                className="social-links"
              >
                <AiFillInstagram fontSize={"16px"} color="#3f3f3f" />
                <p className="social-link__name">Instagram</p>
              </Link>
              <Link
                to="/"
                target={"_blank"}
                className="social-links"
                style={{
                  margin: "0 10px",
                }}
              >
                <RiWhatsappFill fontSize={"16px"} color="#3f3f3f" />
                <p className="social-link__name">Whatsapp</p>
              </Link>
              <Link
                to={"/"}
                target="_blank"
                className="social-links"
                style={{
                  margin: "0 10px",
                }}
              >
                <FaTwitter fontSize={"16px"} color="#3f3f3f" />
                <p className="social-link__name">Twitter</p>
              </Link>
              <Link
                to={"/"}
                target={"_blank"}
                className="social-links"
                style={{
                  margin: "0 10px",
                }}
              >
                <HiMail color="#3f3f3f" fontSize={"16px"} />

                <p className="social-link__name">qwswap@gmail.com</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="support">
          <div className="support-media">
            <Link to="/termsandcondition" className="support-link">
              {/* <IoDocumentText fontSize={"16px"} color="#3f3f3f" /> */}
              <p className="support-link__name">Terms and Condition</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
