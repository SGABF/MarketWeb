import React, { useEffect, useState } from "react";
import "./Home.css";
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
import axios from "axios";




function Home() {
  const [banner, setBanner] = useState([]);

  const getBannerAPI = async () => {
    await axios
      .get("http://192.168.0.124:8080/MainView/getList")
      .then((res) => {
        setBanner(res.data);
      });
  };

<<<<<<< HEAD
  const getboardList = async () => {
    await axios.get("http://192.168.0.76:8080/board/selectList").then((res) => {
      setBanner(res.data);
    });
  };

  useEffect(() => {
    getBannerAPI();
    getboardList();
  }, []);

  const products = [
    [
      {
        id: "1",
        title: '"Alexa, play music."',
        price: 11000,
        src: "./image/min1.jpg",
        image: "image/min1.jpg",
        code: "X616D4D1",
        location: "../subpage",
      },
      {
        id: "2",
        title: "AmazonBasics",
        price: 11000,
        image: "image/min2.jpg",
        code: "X616D4D2",
        location: "../subpage",
      },
    ],
    [
      {
        id: "3",
        title: "Alexa, play music.",
        price: 11000,
        image: "image/min1.jpg",
        code: "X616D4D1",
        location: "../subpage",
      },
      {
        id: "4",
        title: "Alexa, play music.",
        price: 11000,
        image: "image/min1.jpg",
        code: "X616D4D1",
        location: "../subpage",
      },
    ],
    [
      {
        id: "5",
        title: "Alexa, play music.",
        price: 11000,
        image: "image/min1.jpg",
        code: "X616D4D1",
        location: "../subpage",
      },
      {
        id: "5",
        title: "Alexa, play music.",
        price: 11000,
        image: "image/min1.jpg",
        code: "X616D4D1",
        location: "../subpage",
      },
      {
        id: "5",
        title: "Alexa, play music.",
        price: 11000,
        image: "image/min1.jpg",
        code: "X616D4D1",
        location: "../subpage",
      },
      {
        id: "5",
        title: "Alexa, play music.",
        price: 11000,
        image: "image/min1.jpg",
        code: "X616D4D1",
        location: "../subpage",
      },
    ],
  ];
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
            {banner.map((item) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={
                      "http://192.168.0.124:8080/imagePath/" +
                      item.banner_saveName
                    }
                    alt="Third slide"
                    width="1000px"
                    height="250px"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
=======
                </ButtonGroup>
                </div>
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
                        code={"X616D4D6"}
                    />
                    <Product
                        id="2324"
                        title="Easy returns"
                        price={11000}
                        image="image/min6.jpg"
                        code={"X616D4D7"}
                    />
                    <Product
                        id="2325"
                        title="Shop smartwatches"
                        price={200000}
                        image="image/min7.jpg"
                        code={"X616D4D8"}
                    />
                    <Product
                        id="2326"
                        title="Shop Pet supplies"
                        price={10000}
                        image="image/min8.jpg"
                        code={"X616D4D9"}
                    />


                </div>
                <div>
                    <Footer/>
                </div>
            </div>
>>>>>>> d49f371af1902cc21cc279c8e61dc4a1ed485f26
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
        {products.map((item) => {
          return item.map((item2) => {
            return (
              <div className="home_row">
                {item2.id} <br /> {item2.title} <br /> 가격{item2.price} <br />
                {item2.image} <br />
                코드{item2.code}
              </div>
            );
          });
        })}
        console.log("음....")
        <div className="home_row">
          <Product
            id="1"
            title='"Alexa, play music."'
            price={11000}
            image="image/min1.jpg"
            code={"X616D4D1"}
            location="../subpage"
          />

          <Product
            id="2"
            title="AmazonBasics"
            price={11000}
            image="image/min2.jpg"
            code={"X616D4D2"}
            location="../Subpagetwo"
          />

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
        <div className="home_row">
          <Product
            id="5"
            title='"turn on the lights."'
            price={11000}
            image="image/min5.jpg"
            code={"X616D4D6"}
            location="../subpagefive"
          />
          <Product
            id="6"
            title="Easy returns"
            price={11000}
            image="image/min6.jpg"
            code={"X616D4D7"}
            location="../subpagesix"
          />
          <Product
            id="7"
            title="Shop smartwatches"
            price={200000}
            image="image/min7.jpg"
            code={"X616D4D8"}
            location="../subpageseven"
          />
          <Product
            id="8"
            title="Shop Pet supplies"
            price={10000}
            image="image/min8.jpg"
            code={"X616D4D9"}
            location="../subpagesix"
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
