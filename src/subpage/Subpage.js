import React from "react";
import { Carousel, className, DropdownButton, Dropdown } from "react-bootstrap";
import "./Subpage.css";

function subpage(props) {
  return (
    <>
      <img src="../image/yes1.jpg" alt="" className="img1" />
      <h1>
        All-new Echo Dot (4th generation)
        <br />
        International Version | Smart speaker
        <br />
        with Alexa | Charcoal
      </h1>

      <p>가격 : ₩</p>
      <p className="price">11000</p>

      <p>코드 : X616D4D1</p>
    </>
  );
}

export default subpage;
