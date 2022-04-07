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
import { Input, Grid, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { UserAddOutlined } from "@ant-design/icons";
import { loggedInUser } from "../pages/Home";
import FileUploadService from "service/FileUploadService";

// const label = { inputProps: { "aria-label": "Checkbox demo" } };
// const Input = styled("input")({
// 	display: "none",
// 	required: "true",
// });

function ISell(Props) {
	const [category, setCategory] = React.useState("");

	const handleChange = (event) => {
		setCategory(event.target.value);
	};

	// const style = {
	// 	position: "absolute",
	// 	top: "50%",
	// 	left: "50%",
	// 	transform: "translate(-50%, -50%)",
	// 	width: 400,
	// 	bgcolor: "background.paper",
	// 	border: "2px solid #000",
	// 	boxShadow: 24,
	// 	pt: 2,
	// 	px: 4,
	// 	pb: 3,
	// };

	const [selectedFiles, setSelectedFiles] = useState(undefined);
	const [message, setMessage] = useState([]);
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState(0);
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
		console.log(sellCategory);
		dataSetting(title, price, content, category, sellCategory);
	}, [title, content, price, category, selectedFiles]);

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

	const dataSetting = (title, price, content, category, sellCategory) => {
		setBoardData({
			board_name: title,
			board_price: price,
			board_content: content,
			board_category: category,
			board_sell_category: sellCategory,
		});
	};

	const sellCategory = 0;

	return (
		<>
			<div className="Subpage">
				<div className="Subpage-container">
					<div className="title">
						<Box sx={{ minWidth: 120 }}>
							<FormControl fullWidth margin="normal">
								<InputLabel spacing={20} id="demo-simple-select-label">
									카테고리
								</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={category}
									label="카테고리"
									onChange={handleChange}
								>
									<MenuItem value={1}>여성의류</MenuItem>
									<MenuItem value={2}>남성의류</MenuItem>
									<MenuItem value={3}>전자기기</MenuItem>
								</Select>
							</FormControl>
							<Box sx={{ minWidth: 120, maxWidth: "100%" }}>
								<InputLabel
									spacing={20}
									id="demo-simple-select-label"
								></InputLabel>
								<TextField fullWidth value={title} label="글 제목" id="title" />
							</Box>
							<TextField container margin="normal">
								<TextField
									id="outlined-name"
									label="글 제목"
									value={title}
									onChange={changeTitle}
								/>
								<TextField
									id="outlined-name"
									label="Name"
									value={title}
									onChange={handleChange}
								/>
							</TextField>
							{/* 상품 이름
						<Input required type="text" onChange={changeTitle} value={title} />
						<p>
						상품 가격 : <input type="text" value={price} />
					<br /> 상품 설명 :{" "} */}
							{/* * 표시되어있는 항목은 필수 입력입니다. */}
							{/* <Grid container spacing={20}>
									<Grid item xs={12} sm={20}>
										<TextField
											onChange={changePrice}
											required
											fullWidth
											id="name"
											name="name"
											label="글 제목"
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											onChange={changePrice}
											required
											fullWidth
											id="name"
											name="name"
											label="상품 설명"
										/>
									</Grid>
								</Grid> */}
							{/* <input
								type="text"
								className="size"
								onChange={changeContent}
								value={content}
							/> */}
						</Box>
						<label htmlFor="icon-button-file"></label>
						<label htmlFor="contained-button-file">
							<Input
								accept="image/*"
								id="contained-button-file"
								multiple
								type="file"
							/>
							{/* <input type="file" multiple onChange={selectFiles} /> */}
							<br />
							<button className="btn btn-success btn-sm" onClick={uploadFiles}>
								Send
							</button>
						</label>
						<br />
					</div>
				</div>
			</div>
		</>
	);
}

export default ISell;
