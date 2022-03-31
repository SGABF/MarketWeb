import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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

import InputAdornment from "@mui/material/InputAdornment";

import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import axios from "axios";
import { Item } from "semantic-ui-react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function comment() {}
console.log(힝);
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
        <Box sx={{ ...style, width: 800, height: 900 }}>
          <img src="../image/dog.png" />
          <br />
          <img src="../image/hunny.jpg" />
          <h2 id="child-modal-title"></h2>
          <p id="child-modal-description">개꿀!</p>
          <Button onClick={handleClose}>닫기</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

function Subpage(props) {
  const [showPopup, setShowPopup] = useState(false);
  const [comment, setComment] = useState([]);
  const location = useLocation();
  const id_data = location.state;

  useEffect(() => {
    console.log(id_data);
    getComment(id_data);
  }, []);

  const getComment = async (idx) => {
    const token = localStorage.getItem("token");
    await axios
      .post(
        "http://192.168.0.76:8080/home/selectByIdxBoard",
        {
          headers: { Authorization: "Bearer " + token },
        },
        {
          params: { board_idx: idx },
        }
      )
      .then((res) => {
        console.log("가져온값 : " + res.data.length);
        console.log("가져온값 : " + JSON.stringify(res.data));
        setComment(res.data);
      })
      .catch((error) => {
        console.log(`getComment 에러 :  ${error.message}`);
      });
  };

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

  // getComment();

  const imageList =
    comment.boardImageList &&
    comment.boardImageList.map((item) => (
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"http://192.168.0.76:8080/imagePath/" + item.boardImage_saveName}
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    ));
  return (
    <>
      <div className="Subpage">
        <div className="Subpage-container">
          <Carousel variant="dark">{imageList}</Carousel>

          <div className="title">
            <CheckBoxIcon /> 직거래 물품
            <CheckBoxOutlineBlankIcon /> 택배 물품
            <br />
            <br />
            <h1>{comment.board_name}</h1>
            <p>
              상품 가격 : ₩ {comment.board_price}원
              <br />
              입찰 잔여시간 :
              {/* <Moment
                duration="2022-03-10T10:59-0500"
                date="2022-03-15T12:59-0500"
              /> */}
              {comment.board_regDate}
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
                  상품 이름 : {comment.board_name}
                  <br />
                  상품 가격 : ₩ {comment.board_price}원
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
                  <h2>
                    {comment.board_content} <br />
                  </h2>

                  <br />
                  <button className="close" onClick={togglePopup}>
                    닫기
                  </button>
                </div>
              </div>
            ) : null}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <TextField
              id="input-with-icon-textfield"
              label="comment"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            <Button>댓글 남기기</Button>
            <br />
            <br />
            comment : 예를들어 댓글남기기
            <Button>수정</Button>
            <Button>삭제</Button>
            <br />
            comment : 예를들어 댓글남기기
            <Button>수정</Button>
            <Button>삭제</Button>
            <br />
            comment : 예를들어 댓글남기기
            <Button>수정</Button>
            <Button>삭제</Button>
            <br />
          </div>
          <comment />
        </div>
      </div>
      <br /> <br /> <br /> <br /> <br />
      <Footer />
    </>
  );
}

export default Subpage;
