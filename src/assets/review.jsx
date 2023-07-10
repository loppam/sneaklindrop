import React from "react";
import Review from "../images/review.png";
const review = () => {
  return (
    <div className="review">
      <div className="margin">
        <h1>Customer Review</h1>
        <div className="flex">
          <img className="right" src={Review} alt="" />
          <div className="leftt">
            <div className="row">
              <h2>
                &quot;no cap started using this product two years ago, never
                gone back to any other thing since...&quot;
              </h2>
              <h3>~Opa Silas</h3>
            </div>
            <div className="row">
              <h2>
                &quot;Amazing at maintaining my shoe’s health quite literally,
                10/10...&quot;
              </h2>
              <h3>~Thundaie</h3>
            </div>
            <div className="row">
              <h2>&quot;Works like magic. No doubts...&quot;</h2>
              <h3>~Shizzi03</h3>
            </div>
            <div className="row">
              <h2>&quot;My shoes love you...&quot;</h2>
              <h3>~Officiallayon</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default review;
