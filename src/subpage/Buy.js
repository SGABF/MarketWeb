import React, { useEffect, useState } from "react";
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
import axios from "axios";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";

import ZoomInIcon from "@mui/icons-material/ZoomIn";

function Buy() {
  const [banner, setBanner] = useState([]);
  const [home, setHome] = useState([]);

  useEffect(() => {
    getBannerAPI();
    getHome();
  }, []);

  const getBannerAPI = () => {
    axios
      .get("http://192.168.0.150:8080/MainView/getCanUseList")
      .then((res) => {
        setBanner(res.data);
      });
  };

  const getHome = async () => {
    const token = localStorage.getItem("token");
    await axios
      .post("http://192.168.0.76:8080/home/buyBoard", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        // console.log("가져온값 : " + res.data.length);
        // console.log("가져온값 : " + JSON.stringify(res.data));
        setHome(res.data);
      })
      .catch((error) => {
        console.log(`getHome 에러 :  ${error.message}`);
      });
  };

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
                      "http://192.168.0.150:8080/imagePath/" +
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
          {home &&
            home.map((item) => {
              return (
                <div className="home">
                  <div className="home-container">
                    <div className="home_row">
                      <div className="product">
                        <div className="product_info">
                          {item.board_name} <br />
                          <p className="product_price">
                            가격 : {item.board_price}원 <br />
                          </p>
                          <div>
                            <button className="bastket">
                              <ShoppingBasket />
                            </button>

                            {/* <img
                            src={
                              "http://192.168.0.76:8080/imagePath/" +
                              item.boardImageList[0].boardImage_saveName
                            }
                            alt="Third slide"
                            width="1000px"
                            height="250px"
                          /> */}

                            <Link
                              to={{
                                pathname: "subpage/subpagethree",
                                state: item.board_idx,
                              }}
                            >
                              <button className="icon_buttons">
                                <ZoomInIcon />
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

          {/* <Product
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
          /> */}
        </div>

        <div></div>

        <Footer />
      </div>
    </div>
  );
}

export default Buy;
