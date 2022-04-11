import React, { useState, useEffect } from "react";
import "./Registration.css";
import { Input } from "@mui/material";
import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

import FileUploadService from "service/FileUploadService";

// const label = { inputProps: { "aria-label": "Checkbox demo" } };
// const Input = styled("input")({
// 	display: "none",
// });

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
		<div
			style={{
				backgroundColor: "rgb(243, 243, 239)",
			}}
		>
			<br />
			<br />
			<div
				style={{ backgroundColor: "orange", paddingTop: "10px", width: "100%" }}
			>
				<h1 style={{ color: "white" }}>
					<strong>&nbsp;&nbsp;문의 남기기</strong>
				</h1>
				<div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
					<Paper sx={{ width: "100%" }}>
						<TableContainer component={Paper}>
							<Table
								sx={{ minWidth: 650 }}
								size="large"
								aria-label="a dense table"
							>
								<TableHead>
									<TableRow>
										<TableCell style={{ fontSize: "15pt" }}>
											<strong>&nbsp;제목 &nbsp;&nbsp;</strong>
											<Input
												type="text"
												onChange={changeTitle}
												value={title}
												style={{
													width: "800px",
													height: "50px",
													border: "1px solid gray",
												}}
											/>
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<strong>희망 가격 </strong>
											<Input
												type="text"
												onChange={changePrice}
												value={price}
												style={{
													width: "800px",
													height: "50px",
													border: "1px solid gray",
												}}
											/>
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow>
										<TableCell colSpan={2} component="th" scope="row">
											<strong>상품 설명 </strong>
											<Input
												type="text"
												style={{
													width: "800px",
													height: "500px",
													border: "1px solid gray",
												}}
												onChange={changeContent}
												value={content}
											/>
										</TableCell>
									</TableRow>
									<TableRow>
										&nbsp;
										<label htmlFor="icon-button-file" />
										<label htmlFor="contained-button-file" />
										<Input
											accept="image/*"
											id="contained-button-file"
											multiple
											type="file"
											onChange={selectFiles}
										/>
										<br />
									</TableRow>
								</TableBody>
							</Table>
						</TableContainer>
					</Paper>
					<br />
					<br />
					<div style={{ textAlign: "right" }}>
						<Button onClick={uploadFiles}>등록</Button>
						<Button href="buy">목록</Button>
					</div>
				</div>
			</div>
			<br />
			<br />
		</div>
		// <>
		// 	<div className="Subpage">
		// 		<div className="Subpage-container">
		// 			<div className="title">

		// 				<h1>
		// 					희망 상품 이름 :{" "}
		// 					<input type="text" onChange={changeTitle} value={title} />
		// 				</h1>
		// 				<p>
		// 					희망 구매 가격 :{" "}
		// 					<input type="text" onChange={changePrice} value={price} />
		// 					<br /> 상품 설명 :{" "}
		// 					<input
		// 						type="text"
		// 						className="size"
		// 						onChange={changeContent}
		// 						value={content}
		// 					/>
		// 				</p>
		// 				<label htmlFor="icon-button-file"></label>
		// 				<label htmlFor="contained-button-file">
		// 					<Input
		// 						accept="image/*"
		// 						id="contained-button-file"
		// 						multiple
		// 						type="file"
		// 					/>
		// 					<input type="file" multiple onChange={selectFiles} />
		// 					<br />
		// 					<button className="btn btn-success btn-sm" onClick={uploadFiles}>
		// 						Send
		// 					</button>
		// 				</label>

		// 				<br />
		// 			</div>
		// 		</div>
		// 	</div>
		// </>
	);
}

export default IBuy;
