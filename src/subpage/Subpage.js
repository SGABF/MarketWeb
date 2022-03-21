import React, { useState } from "react";
import { Carousel, className, DropdownButton, Dropdown } from "react-bootstrap";
import "./Subpage.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ModalUnstyled from "@mui/base/ModalUnstyled";

import Moment from "react-moment";
import Button from "@mui/material/Button";
import Footer from "components/Footer";

function ChildModal() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>입찰하기</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">입찰 성공 했습니다!</h2>
          <p id="child-modal-description">감사합니다.</p>
          <Button onClick={handleClose}>닫기</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

function Subpage(props) {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = (event) => {
    setShowPopup(event.target.value);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="Subpage">
        <div className="Subpage-container">
          <img src="../image/yes2.jpg" alt="" className="img1" />

          <div className="title">
            <CheckBoxIcon /> 직거래 물품
            <CheckBoxOutlineBlankIcon /> 택배 물품
            <br />
            <br />
            <h1>
              All-new Echo Dot (4th generation) International Version | Smart
              speaker with Alexa | Charcoal
            </h1>
            <p>
              상품 상한가 : ₩50000
              <br />
              상품 현재가 : ₩10000
              <br />
              상품 최소가격 : ₩10000
              <br />
              입찰 잔여시간 :{" "}
              <Moment
                duration="2022-03-10T10:59-0500"
                date="2022-03-15T12:59-0500"
              />
            </p>
            {/*<Button variant="contained" endIcon={<SendIcon/>}>*/}
            {/*    입찰하기*/}
            {/*</Button>*/}
            <Button onClick={handleOpen}>입찰하기</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box sx={{ ...style, width: 400 }}>
                <h2 id="parent-modal-title">입찰하기</h2>
                <p id="parent-modal-description">
                  상품 이름 : All-new Echo Dot (4th generation) International
                  Version | Smart speaker with Alexa | Charcoal
                  <br />
                  상품 상한가 : ₩50000
                  <br />
                  상품 현재가 : ₩10000
                  <br />
                  희망 가격 : <input type="text" />
                </p>
                <ChildModal />
              </Box>
            </Modal>
            <button className="open" onClick={togglePopup} value="false">
              상품설명
            </button>
            {showPopup ? (
              <div className="popup">
                <div className="popup_inner">
                  <h2>상품설명</h2>
                  Meet Echo Dot — Echo Dot (4th generation) connects to Alexa, a
                  cloud-based voice service, to play music, set timers and
                  alarms, control compatible smart home devices, and more.
                  Recommended language — English United States or Español
                  Estados Unidos is the recommended language to access Skills,
                  Features and an optimal music experience. Voice control your
                  entertainment — stream songs from Amazon Music Unlimited
                  (unavailable in ID and KR) , Spotify (Free Tier not available
                  in KR) and TuneIn. Pair with another Echo Dot (4th gen) for
                  stereo sound or stream music from other popular audio services
                  via Bluetooth with your smartphone or tablet (requires a
                  Bluetooth connection from a compatible device, voice control
                  not supported). Ready to help — ask Alexa to play music,
                  answer questions, play the news, check the weather, set alarms
                  and more. Control your smart home — use your voice to turn on
                  lights and plugs with compatible devices. Designed to protect
                  your privacy — built with multiple layers of privacy
                  protection and control, including a Microphone Off button that
                  disables the microphones. Listen to the news- Ask "Alexa,
                  what’s in the news" and she will provide access to local and
                  international news. Feature availability – some Alexa features
                  may not be supported in your country including Alexa Guard,
                  Amazon Kids, and In-skill Purchases.
                  <br />
                  <button className="close" onClick={togglePopup}>
                    닫기
                  </button>
                </div>
              </div>
            ) : null}
            <br />
          </div>
        </div>
      </div>
      <br /> <br /> <br /> <br /> <br />
      <Footer />
    </>
  );
}

export default Subpage;
