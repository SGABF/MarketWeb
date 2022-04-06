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

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Input = styled("input")({
	display: "none",
});

function IBuy(Props) {
	const [category, setCategory] = React.useState("");

	const handleChange = (event) => {
		setCategory(event.target.value);
	};

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

	const sellCategory = 1;

	return (
		<>
			<div className="Subpage">
				<div className="Subpage-container">
					<div className="title">
						<Box sx={{ minWidth: 120 }}>
							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label">카테고리</InputLabel>
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
						</Box>
						<h1>
							희망 상품 이름 :{" "}
							<input type="text" onChange={changeTitle} value={title} />
						</h1>
						<p>
							희망 구매 가격 :{" "}
							<input type="text" onChange={changePrice} value={price} />
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
		</>
	);
}

export default IBuy;
