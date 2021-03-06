import React from "react";

import Product from "components/Product";
import {Carousel, className, DropdownButton, Dropdown} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "components/Footer";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Navbar from "../components/Navbar";






function Home() {
    return (
        <div className="home">
            <div className="home-container">

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
                        id="2999"
                        title='"Alexa, play music."'
                        price={11000}
                        image="image/min1.jpg"
                        code={"X616D4D1"}
                    />
                    <Product
                        id="3000"
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
        </div>
    )
        ;
}

export default Home;