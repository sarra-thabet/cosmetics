import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

export const Categories = () => {
  return (
    <div className="categories">
      <div className="categories-title">
        <hr className="line" />
        <p>Our Categories</p>
        <hr  className="line" />
      </div>
      <div className="categories-cards">
        <div className="categories-cards-child">
        <Link to={'/skincare'}> <img src="images/soins-visage2.webp" className="imgZoom"></img></Link> 
        <div className="text_card">SkinCare</div>
        </div>
        <div className="categories-cards-child">
        <Link to={'/bodycare'}> <img src="images/soins-corps.jpg" className="imgZoom"></img></Link> 
        <div className="text_card">BodyCare</div>

        </div>
        <div className="categories-cards-child">
        <Link to={'/makeup'}> <img src="images/makeup.jpg" className="imgZoom"></img></Link> 
         <div className="text_card">MakeUp</div>

        </div>
        <div className="categories-cards-child">
        <Link to={'/perfume'}><img src="images/parfum.jpeg" className="imgZoom"></img></Link>
          <div className="text_card">Perfume</div>

        </div>
      </div>
    </div>
  );
};
