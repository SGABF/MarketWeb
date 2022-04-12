import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import FileUploadService from "service/FileUploadService";

import { Input } from "@mui/material";
import Button from "@mui/material/Button";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

function ISell(Props) {
	const [selectedFiles, setSelectedFiles] = useState(undefined);
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState(0);
	const [content, setContent] = useState("");
	const [boardData, setBoardData] = useState([]);
	const [message, setMessage] = useState([]);
	const history = useHistory();

	useEffect(() => {
		dataSetting(title, price, content);
	}, [title, content, price, selectedFiles]);

	// 파일 첨부
	const selectFiles = (event) => {
		setSelectedFiles(event.target.files);
	};

	// 파일 첨부/미첨부 업로드
	const uploadFiles = () => {
		if (selectedFiles != null) {
			const uploadPromises = upload(selectedFiles);
			window.alert("게시글 등록이 완료되었습니다.");
			history.push("/sale");
		} else {
			const uploadPromises = FileUploadService.upload_nonFile(boardData);
			window.alert("게시글 등록이 완료되었습니다.");
			history.push("/sale");
		}
		setMessage([]);
	};

	// 파일첨부 업로드
	const upload = (file) => {
		return FileUploadService.upload(file, boardData);
	};

	// input onChange
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

	return (
		<div
			style={{
				backgroundColor: "orange",
				paddingTop: "10px",
				width: "100%",
				height: "100%",
				margin: "0 auto",
			}}
		>
			<h1 style={{ color: "white" }}>
				<strong>&nbsp;&nbsp;판매 글 등록</strong>
			</h1>
			<div
				style={{
					paddingLeft: "10px",
					paddingRight: "10px",
				}}
			>
				<Paper sx={{ width: "100%" }}>
					<TableContainer component={Paper}>
						<Table
							sx={{ minWidth: 650 }}
							size="large"
							aria-label="a dense table"
						>
							<TableHead>
								<TableRow>
									<TableCell>
										<Input
											type="text"
											onChange={changeTitle}
											value={title}
											placeholder="제목을 입력해주세요"
											style={{
												width: "100%",
												height: "100%",
												border: "1px solid gray",
											}}
										/>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										판매 가격
										<Input
											type="text"
											onChange={changePrice}
											value={price}
											style={{
												width: "100%",
												minHeight: "100%",
												border: "1px solid gray",
											}}
										/>
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow>
									<TableCell colSpan={2} component="th" scope="row">
										<textarea
											type="text"
											onChange={changeContent}
											value={content}
											placeholder="내용을 입력해주세요"
											style={{
												width: "100%",
												// maxHeight: "25vh",
												minHeight: "25vh",
												border: "1px solid gray",
											}}
										/>
									</TableCell>
								</TableRow>
								<TableRow>
									<label htmlFor="icon-button-file" />
									<label htmlFor="contained-button-file" />
									<input
										accept="image/*"
										id="contained-button-file"
										multiple
										type="file"
										onChange={selectFiles}
										style={{ padding: "10px" }}
									/>
									<br />
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Paper>
				<br />
				<div style={{ textAlign: "right", paddingRight: "20px" }}>
					<Button
						onClick={uploadFiles}
						variant="outlined"
						style={{ textDecoration: "none" }}
					>
						등록
					</Button>
					&nbsp;
					<Button
						href="sale"
						variant="outlined"
						style={{ textDecoration: "none" }}
					>
						목록
					</Button>
				</div>
				<br />
			</div>
		</div>
	);
}

export default ISell;
