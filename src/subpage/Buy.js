import React from "react";
import "./Buy.css";
import Product from "components/Product";
import { Carousel, className, DropdownButton, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "components/Footer";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Navbar from "../components/Navbar";
import { Route, Link } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

function Buy() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="carousel">
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="image/logo1.jpg"
                alt="First slide"
              />


              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="image/logo2.jpg"
                alt="Second slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="image/logo4.jpg"
                alt="Third slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="menubar">
          <Navbar />

          <ButtonGroup
            variant="outlined"
            aria-label="outlined button group"
            className="home_buttons"
          >
            <Link to="/">
              <Button>전체글</Button>
            </Link>
            <Link to="../Sale">
              <Button>판매글</Button>
            </Link>
            <Link to="../Buy">
              <Button>구매글</Button>
            </Link>
            <Link to="../Auction">
              <Button>경매글</Button>
            </Link>
          </ButtonGroup>
          <div>
            <Link to="../Registration">
              <Button variant="contained" endIcon={<SendIcon />}>
                제품등록
              </Button>
            </Link>
          </div>
        </div>
        <div className="home_row">
          <Product
            id="3"
            title="TV & Furniture"
            price={1100000}
            image="image/min3.jpg"
            code={"X616D4D3"}
            location="../subpagethree"
          />
          <Product
            id="4"
            title="Laptops"
            price={1000000}
            image="image/min4.jpg"
            code={"X616D4D4"}
            location="../subpagefour"
          />
        </div>

        <div></div>

        <Footer />
      </div>
    </div>
  );
}

export default Buy;
