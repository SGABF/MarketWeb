import React from "react";
<<<<<<< HEAD
import "./Electronics.css";
import Product from "components/Product";
import {Carousel, className, DropdownButton, Dropdown} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "components/Footer";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Navbar from "../components/Navbar";
import {Route, Link} from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

=======

import Product from "components/Product";
import {Carousel, className, DropdownButton, Dropdown} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "components/Footer";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Navbar from "../components/Navbar";






>>>>>>> d49f371af1902cc21cc279c8e61dc4a1ed485f26
function Electronics() {
    return (
        <div className="home">
            <div className="home-container">
<<<<<<< HEAD
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
                    <Navbar/>

                    <ButtonGroup
                        variant="outlined"
                        aria-label="outlined button group"
                        className="home_buttons">
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
                        <Button variant="contained" endIcon={<SendIcon/>}>
                            제품등록
                        </Button>
                    </div>

                </div>
                <div className="home_row">
                    <Product
                        id="1"
=======

                <div className="menubar">
                    <Navbar />
                    <ButtonGroup variant="outlined" aria-label="outlined button group" className="home_buttons">
                        <Button>전체글</Button>
                        <Button>판매글</Button>
                        <Button>구매글</Button>
                        <Button>경매글</Button>

                    </ButtonGroup>
                </div>
                <div className="home_row">
                    <Product
                        id="2323"
>>>>>>> d49f371af1902cc21cc279c8e61dc4a1ed485f26
                        title='"Alexa, play music."'
                        price={11000}
                        image="image/min1.jpg"
                        code={"X616D4D1"}
<<<<<<< HEAD
                        location="../subpage"
                    />

                    <Product
                        id="2"
=======
                    />
                    <Product
                        id="2324"
>>>>>>> d49f371af1902cc21cc279c8e61dc4a1ed485f26
                        title="AmazonBasics"
                        price={11000}
                        image="image/min2.jpg"
                        code={"X616D4D2"}
<<<<<<< HEAD
                        location="../Subpagetwo"
                    />

                    <Product
                        id="3"
=======
                    />
                    <Product
                        id="2325"
>>>>>>> d49f371af1902cc21cc279c8e61dc4a1ed485f26
                        title="TV & Furniture"
                        price={1100000}
                        image="image/min3.jpg"
                        code={"X616D4D3"}
<<<<<<< HEAD
                        location="../subpagethree"
                    />
                    <Product
                        id="4"
=======
                    />
                    <Product
                        id="2326"
>>>>>>> d49f371af1902cc21cc279c8e61dc4a1ed485f26
                        title="Laptops"
                        price={1000000}
                        image="image/min4.jpg"
                        code={"X616D4D4"}
<<<<<<< HEAD
                        location="../subpagefour"
=======
>>>>>>> d49f371af1902cc21cc279c8e61dc4a1ed485f26
                    />
                </div>
                <div className="home_row">
                    <Product
<<<<<<< HEAD
                        id="5"
=======
                        id="2323"
>>>>>>> d49f371af1902cc21cc279c8e61dc4a1ed485f26
                        title='"turn on the lights."'
                        price={11000}
                        image="image/min5.jpg"
                        code={"X616D4D6"}
<<<<<<< HEAD
                        location="../subpagefive"
                    />
                    <Product
                        id="6"
=======
                    />
                    <Product
                        id="2324"
>>>>>>> d49f371af1902cc21cc279c8e61dc4a1ed485f26
                        title="Easy returns"
                        price={11000}
                        image="image/min6.jpg"
                        code={"X616D4D7"}
<<<<<<< HEAD
                        location="../subpagesix"
                    />
                    <Product
                        id="7"
=======
                    />
                    <Product
                        id="2325"
>>>>>>> d49f371af1902cc21cc279c8e61dc4a1ed485f26
                        title="Shop smartwatches"
                        price={200000}
                        image="image/min7.jpg"
                        code={"X616D4D8"}
<<<<<<< HEAD
                        location="../subpageseven"
                    />
                    <Product
                        id="8"
=======
                    />
                    <Product
                        id="2326"
>>>>>>> d49f371af1902cc21cc279c8e61dc4a1ed485f26
                        title="Shop Pet supplies"
                        price={10000}
                        image="image/min8.jpg"
                        code={"X616D4D9"}
<<<<<<< HEAD
                        location="../subpagesix"
=======
>>>>>>> d49f371af1902cc21cc279c8e61dc4a1ed485f26
                    />
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        </div>
<<<<<<< HEAD
    );
}

export default Electronics;
=======
    )
        ;
}

export default Electronics;
>>>>>>> d49f371af1902cc21cc279c8e61dc4a1ed485f26
