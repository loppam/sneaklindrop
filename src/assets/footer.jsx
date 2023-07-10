import React from "react";
import { Link } from "react-router-dom";
const footer = () => {
  return (
    <div className="footer">
      <div className="margin">
        <div className="flexxx">
          <div className="left">
            Copyright © Sneaklin. 2022 All rights reserved.
          </div>
          <div className="right">
            <ul>
              <li>
                <Link target="_blank" to="https://sneaklin.com/about-us/">
                  About Us
                </Link>
              </li>
              <li>
                <Link target="_blank" to="https://sneaklin.com/contact-us/">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link target="_blank" to="https://sneaklin.com/our-blog/">
                  Our Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
