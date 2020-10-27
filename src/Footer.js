import React from "react";
import "./Footer.css";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

function Footer() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="Footer">
      <a onClick={handleClick}>
        <div className="Footer__Back-To-Top">
          <ExpandLessIcon className="Footer__Back-To-Top-Text" />
        </div>
      </a>

      <div className="Footer__Vertical-Row">
        <div className="Footer__Vertical-Col">
          <div className="Footer__Vertical-Col-Head">Get to Know Us</div>
          <ul>
            <li>About</li>
            <li>Career</li>
            <li>Press</li>
            <li>Soko Cares</li>
            <li>Gift a smile</li>
          </ul>
        </div>
        <div className="Footer__Vertical-Col">
          <div className="Footer__Vertical-Col-Head">Connect with us</div>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="Footer__Vertical-Col">
          <div className="Footer__Vertical-Col-Head">Make Money with Us</div>
          <ul>
            <li>Sell on Soko</li>
            <li>Sell under Soko</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Soko</li>
            <li>Soko Pay</li>
          </ul>
        </div>
        <div className="Footer__Vertical-Col">
          <div className="Footer__Vertical-Col-Head">Connect with us</div>
          <ul>
            <li>COVID-19 and Soko</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>Soko App Download</li>
            <li>Soko Assistant Download</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="Footer__Line">
        <img
          className="Footer__Line-logo"
          src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/001/244/731/datas/medium.png"
          alt=""
        />
        <span className="Footer__Line-message">
          Soko App developed by &copy;{" "}
          <a href="https://mystifying-jepsen-d3b3a4.netlify.app/" target="_blank">
            STJ
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
