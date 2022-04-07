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
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Moment from "react-moment";
import Button from "@mui/material/Button";
import Footer from "components/Footer";

import InputAdornment from "@mui/material/InputAdornment";

import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import axios from "axios";
import { Item } from "semantic-ui-react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

import BoardComment from "./BoardComment";

function comment() {}

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
	const [realcomment, setRealcomment] = useState([]);
	const username = localStorage.getItem("authenticatedUser");
	const token = localStorage.getItem("token");
	const [key, setKey] = useState("0");
	console.log(key);

	const history = useHistory();
	const location = useLocation();
	const id_data = location.state;

	useEffect(() => {
		console.log(id_data);
		getComment(id_data);
	}, []);

	const getComment = async (idx) => {
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
				setComment(res.data);
			})
			.catch((error) => {
				console.log(`getComment 에러 :  ${error.message}`);
			});
	};

	console.log(comment);

	const deleteBoard = () => {
		console.log(id_data);
		if (
			window.confirm(
				"게시물 삭제시 해당 게시물의 댓글이 모두 삭제됩니다. 그래도 삭제하시겠습니까?"
			)
		) {
			axios({
				method: "post",
				url: "http://192.168.0.76:8080/board/deleteBoard",
				headers: { Authorization: "Bearer " + token, user_id: username },
				params: { board_idx: id_data },
			});
			window.alert("삭제 완료");
			history.push("/mymarket");
		}
	};

	const updateStatus = () => {
		console.log(key);
		if (window.confirm("판매상태를 수정하시겠습니까?")) {
			axios({
				method: "post",
				url: "http://192.168.0.76:8080/board/updateSoldout",
				headers: { Authorization: "Bearer " + token, user_id: username },
				data: { board_idx: id_data, board_soldout: key },
			});
			window.alert("수정 완료");
		}
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
					width="250px"
					height="250px"
				/>
				<Carousel.Caption></Carousel.Caption>
			</Carousel.Item>
		));

	const action = 1;

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
							{comment.board_auctionOnOff === 1 ? (
								<p>입찰 잔여시간 : {comment.board_regDate}</p>
							) : null}
						</p>
						{/*<Button variant="contained" endIcon={<SendIcon/>}>*/}
						{/*    입찰하기*/}
						{/*</Button>*/}
						{comment.board_auctionOnOff === 1 ? (
							<Button onClick={handleOpen}>입찰하기</Button>
						) : (
							<Button onClick={handleOpen}>구매하기</Button>
						)}
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
						<Tabs
							id="controlled-tab-example"
							activeKey={key}
							onSelect={(k) => setKey(k)}
							className="mb-3"
							variant="pills"
						>
							<Tab eventKey="0" title="판매중"></Tab>
							<Tab eventKey="1" title="예약중"></Tab>
							<Tab eventKey="2" title="판매완료"></Tab>
						</Tabs>
						<Button onClick={updateStatus}>판매상태 수정하기</Button>
						<Button onClick={deleteBoard}>게시글삭제</Button>
						<br />
						<br />
						<br />
						<br />
						{/* <TextField
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
						{comment.replyList &&
							comment.replyList.map((item) => (
								<p>
									comment : {item.reply_content}
									<Button>수정</Button>
									<Button>삭제</Button>
								</p>
							))}
						<br />
						<br /> */}
						{token ? <BoardComment /> : <br />}
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
