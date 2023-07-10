import React from "react";
import { Link } from "react-router-dom";
import Physicaljpg from "../images/physical.png";
const physical = () => {
  return (
    <div className="physical">
      <div className="margin">
        <h1>Our Physical Drop-Off store</h1>
        <div className="flex invert ">
          <div className="left">
            <h2>Luxury By Shizzi</h2>
            <p>
              The kick that needs cleaning can be dropped off at a physical
              store <br />
              <b>Luxury By Shizzi</b> <br />
              Here’s how it works: <br />
              <b>Step 1:</b> Sneaklin reps will greet you with a smile and
              collect your beloved kicks. <br />
              <b>Step 2:</b> We’ll handle the packing and transportation,
              ensuring your shoes receive the utmost care at our
              state-of-the-art cleaning facility. <br />
              <b>Step 3:</b> Return to the store the next Tuesday to reclaim
              your squeaky clean shoes, looking as fresh as the day you bought
              them!
            </p>
            <p>4 Adeniyi Jones, Ogba 101233, Ojodu, Lagos</p>
            <Link
              className="arrow width"
              to="https://goo.gl/maps/VotLpq59fRS8FAR77"
            >
              Locate LBS
            </Link>
          </div>
          <img className="right" src={Physicaljpg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default physical;
