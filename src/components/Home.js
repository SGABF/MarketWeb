import React from "react";
import "./Home.css";
import Product from "./Product";
import { Carousel, className } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";


function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="image/ball.jpg"
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="image/2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="image/3.jpg"
              alt="Third slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>

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
            title="Laptops"
            price={1000000}
            image="image/min4.jpg"
            code={"X616D4D4"}
          />
        </div>
        <div className="home_row">
          <Product
            id="2323"
            title='"turn on the lights."'
            price={11000}
            image="image/min5.jpg"
            code={"X616D4D1"}
          />
          <Product
            id="2324"
            title="Easy returns"
            price={11000}
            image="image/min6.jpg"
            code={"X616D4D2"}
          />
          <Product
            id="2325"
            title="Shop smartwatches"
            price={200000}
            image="image/min7.jpg"
            code={"X616D4D3"}
          />
          <Product
            id="2326"
            title="Shop Pet supplies"
            price={10000}
            image="image/min8.jpg"
            code={"X616D4D4"}
          />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
