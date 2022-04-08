import React, { useState, useEffect } from "react";
import "./Registration.css";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Input } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FileUploadService from "service/FileUploadService";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

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
	const history = useHistory();

	const uploadFiles = () => {
		if (selectedFiles != null) {
			const uploadPromises = upload(selectedFiles);
			window.alert("게시글 등록이 완료되었습니다.");
			history.push("/");
		} else {
			const uploadPromises = FileUploadService.upload_nonFile(boardData);
			window.alert("게시글 등록이 완료되었습니다.");
			history.push("/sale");
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
						{/* <Box sx={{ minWidth: 120 }}>
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
						</Box> */}
						<h1>
							글 제목 :{" "}
							<input type="text" onChange={changeTitle} value={title} />
						</h1>
						<p>
							가격 : <input type="text" onChange={changePrice} value={price} />
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
								onChange={selectFiles}
							/>
							{/* <input type="file" multiple onChange={selectFiles} /> */}
							<br />
							<button className="btn btn-success btn-sm" onClick={uploadFiles}>
								제품 등록
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
