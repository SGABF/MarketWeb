import React, { useState, useEffect } from "react";
import { Carousel, className, DropdownButton, Dropdown } from "react-bootstrap";
import "./Registration.css";
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
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { UserAddOutlined } from "@ant-design/icons";
import { loggedInUser } from "../pages/Home";

import FileUploadService from "service/FileUploadService";

import Upload from "material-ui-upload/Upload";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Input = styled("input")({
  display: "none",
});

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
          <h2 id="child-modal-title">입찰 성공</h2>
          <p id="child-modal-description">감사</p>
          <Button onClick={handleClose}>닫기</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

function Registration(props) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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

  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [message, setMessage] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(Number);
  const [content, setContent] = useState("");
  const [boardData, setBoardData] = useState([]);
  const selectFiles = (event) => {
    setSelectedFiles(event.target.files);
  };

  const uploadFiles = () => {
    if (selectedFiles != null) {
      const uploadPromises = upload(selectedFiles);
    } else {
      const uploadPromises = FileUploadService.upload_nonFile(boardData);
    }
    setMessage([]);
  };

  const upload = (file) => {
    return FileUploadService.upload(file, boardData);
  };

  useEffect(() => {
    // console.log(title);
    // console.log(content);
    // console.log(boardData);
    // console.log(price);
    // console.log(selectedFiles);
    dataSetting(title, content);
  }, [title, content, price, selectedFiles]);

  const changeTitle = (e) => {
    let { value } = e.target;
    setTitle(value);
  };

  const changeContent = (e) => {
    let { value } = e.target;
    setContent(value);
  };

  const changePrice = (e) => {
    let { value } = e.target;
    setPrice(value);
  };

  const dataSetting = (title, price, content) => {
    setBoardData({
      board_name: title,
      board_price: price,
      board_content: content,
    });
  };
  const [open, setOpen] = React.useState(false);
  const [post, setPost] = useState([]);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const token = localStorage.getItem("token");
    await axios({
      method: "post",
      url: "http://192.168.0.76:8080/board/insertBoard",
      headers: { Authorization: "Bearer " + token },
    })
      .then((res) => {
        console.log("가져온값 : " + res.data.length);
        console.log("가져온값 : " + JSON.stringify(res.data));
        setPost(res.data);
      })
      .catch((error) => {
        console.log(`getComment 에러 :  ${error.message}`);
      });
  };

  const sell = 1;
  const autotion = 1;

  return (
    <>
      <div className="Subpage">
        <div className="Subpage-container">
          <div className="title">
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="판매글"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="구매글"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="경매글"
                />
              </RadioGroup>
            </FormControl>
            <br />
            <br />

            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">카테고리</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="카테고리"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>여성의류</MenuItem>
                  <MenuItem value={20}>남성의류</MenuItem>
                  <MenuItem value={30}>전자기기</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <h1>
              상품 이름 :{" "}
              <input type="text" onChange={changeTitle} value={title} />
            </h1>
            <p>
              상품 가격 :{" "}
              <input type="text" onChange={changePrice} value={price} />
              <br />
              경매 시작가 : <input type="text" />
              <br />
              입찰 잔여시간 : <input type="text" />
              <br /> 상품 설명 :{" "}
              <input
                type="text"
                className="size"
                onChange={changeContent}
                value={content}
              />
            </p>
            <label htmlFor="icon-button-file"></label>
            <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
              />
              <input type="file" multiple onChange={selectFiles} />
              <br />
              <button className="btn btn-success btn-sm" onClick={uploadFiles}>
                Send
              </button>
            </label>

            <br />
          </div>
        </div>
      </div>
      <br /> <br /> <br /> <br /> <br />
      <Footer />
    </>
  );
}

export default Registration;
