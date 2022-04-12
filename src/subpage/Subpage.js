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
import BoardComment from "./BoardComment";

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
	const [comment, setComment] = useState([]);
	const token = localStorage.getItem("token");
	const history = useHistory();
	const location = useLocation();
	const id_data = location.state;

	useEffect(() => {
		getComment(id_data);
	}, []);

	const getComment = async (idx) => {
		await axios
			.post(
				"http://192.168.0.151:8080/home/selectByIdxBoard",

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
					src={
						"http://192.168.0.151:8080/imagePath/" + item.boardImage_saveName
					}
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
					<br />
					<h1 style={{ textAlign: "center" }}>제품 상세페이지</h1>
					<br />
					<br />
					<Carousel variant="dark">{imageList}</Carousel>

					<div className="title">
						<CheckBoxIcon /> 직거래 물품
						<CheckBoxOutlineBlankIcon /> 택배 물품
						<br />
						<br />
						<h1>{comment.board_name}</h1>
						<p>
							<strong>상품 가격 :</strong> ₩{comment.board_price}
							<br />
							{comment.board_auctionOnOff === 1 ? (
								<p>입찰 잔여시간 : {comment.board_regDate}</p>
							) : null}
							<strong>판매자 아이디 :</strong> {comment.user_id}
						</p>
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
						<strong>상품 설명 :</strong> <br />
						{comment.board_content} <br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						{token ? <BoardComment /> : <br />}
						<br />
						<br />
					</div>
				</div>
			</div>
		</>
	);
}

export default Subpage;
