import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img className="home_image" src="image/ball.jpg" alt="" />

        <div className="home_row">
          <Product
            id="2323"
            title='"Alexa, play music."'
            price={11000}
            image="image/min1.jpg"
            code={"X616D4D1"}
          />
          <Product
            id="2324"
            title="AmazonBasics"
            price={11000}
            image="image/min2.jpg"
            code={"X616D4D2"}
          />
          <Product
            id="2325"
            title="TV & Furniture"
            price={1100000}
            image="image/min3.jpg"
            code={"X616D4D3"}
          />
          <Product
            id="2326"
            title="Laptops & Accessories"
            price={1000000}
            image="image/min4.jpg"
            code={"X616D4D4"}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
