import React from "react";
import { Categories } from "../categories/Categories";
import ImageCarousel from "../imageCarousel/ImageCarousel";
import { OurServices } from "../ourservices/OurServices";
import "./Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <ImageCarousel />
      <Categories />
      <OurServices />
      <Link to="/about">
        <button type="button" class="button">
          <div class="button-top">Get To Know More About Us</div>
          <div class="button-bottom"></div>
          <div class="button-base"></div>
        </button>
      </Link>
      <div className="advice-temp">
        <img src="images/cover.png"></img>
        <div className="advice-temp-content">
          "Looking for expert skincare advice? Navigate to our dedicated
          Skincare section for all the insights you need. If you're looking for
          natural SkinCare recepes for glowing skin, we have you covered. Let us
          guide you towards healthier, happier skin effortlessly. Visit now and
          unlock the secrets to your best skin yet!"
          <br/>
          <Link to={'/advice'}>
          <button class="learn-more">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">Learn More</span>
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};
