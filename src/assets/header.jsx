// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import Headpic from "../images/cleaning-shoe.jpg";

const header = () => {
  return (
    <div className="header">
      <div className="margin">
        <div className="flex invert">
          <div className="left">
            <h2>Sneaklin Drop-Off</h2>
            <h1>Professional shoe care for as low as N2,000.</h1>
            <p className="wide">
              Drop off your dirty kicks at a location close to you and pick it
              back up after our Sneaker Technician are done offering your kicks
              premium care.
            </p>
            <p>
              101 St. Finbarr’s College Road, Akoka, Yaba, Lagos <br />
              Mon. – Fri. (9am – 5pm) <br />
              Sat. (9am – 2pm)
            </p>
            <div className="flexx">
              <Link
                className="buttonn"
                to="https://api.whatsapp.com/send/?phone=%2B2347087709372&text&type=phone_number&app_absent=0"
              >
                Book Online
              </Link>
              <Link
                className="arrow"
                to="https://goo.gl/maps/gQij2y3awypcVJdMA"
              >
                Locate us
              </Link>
            </div>
          </div>
          <img className="right" src={Headpic} alt="main pic" />
        </div>
      </div>
    </div>
  );
};

export default header;
