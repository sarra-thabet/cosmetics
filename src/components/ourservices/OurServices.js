import React from "react";
import "./OurServices.css";
import "../categories/Categories.css";
export const OurServices = () => {
  return (
    <div className="services">
      <div className="categories-title">
        <hr className="line" />
        <p>Our Services</p>
        <hr className="line" />
      </div>
      <div className="service-cards">
        <div className="services-cards-child">
          <img src="images/verified-prod.png"></img>
          <p>Certified Products</p>
        </div>
        <div className="services-cards-child">
          <img src="images/delivery.png"></img>
          <p>Fast and Safe Delivery</p>
        </div>
        <div className="services-cards-child">
          <img src="images/advice.png"></img>
          <p>give you the advice you need</p>
        </div>
      </div>
    </div>
  );
};
