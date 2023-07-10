import { useState, React } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/web-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
const navbar = () => {
  const [Mobile, setMobile] = useState(false);
  return (
    <nav className="nav">
      <div className="navbar">
        <Link className="button" to="https://sneaklin.com/product/premium-kit/">
          Shop The Kit
        </Link>
        <div className="logo">
          <Link to="#">
            <img src={Logo} className="logo-img" alt="image" />
          </Link>
        </div>
        <ul
          className={Mobile ? "mobile-link" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          <li>
            <Link to="https://sneaklin.com/">Home</Link>
          </li>

          <li>
            <div className="dropdown">
              <button className="dropbtn">Info</button>
              <div className="dropdown-content">
                <Link target="_blank" to="https://sneaklin.com/about-us/">
                  About Us
                </Link>
                <Link target="_blank" to="https://sneaklin.com/contact-us/">
                  Contact Us
                </Link>
                <Link target="_blank" to="https://sneaklin.com/our-blog/">
                  Our Blog
                </Link>
              </div>
            </div>
          </li>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default navbar;
