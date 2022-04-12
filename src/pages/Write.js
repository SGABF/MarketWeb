import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FileUploadService from "service/FileUploadService";

import Button from "@mui/material/Button";
import { Input } from "@mui/material";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

export default function Write() {
	const [selectedFiles, setSelectedFiles] = useState(undefined);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [qnaData, setQnaData] = useState([]);
	const [message, setMessage] = useState([]);
	const history = useHistory();

	useEffect(() => {
		dataSetting(title, content);
	}, [title, content, selectedFiles]);

	// 파일 첨부
	const selectFiles = (event) => {
		setSelectedFiles(event.target.files);
	};

	// 파일 첨부/미첨부 업로드
	const uploadFiles = () => {
		if (selectedFiles != null) {
			const uploadPromises = uploadQna(selectedFiles);
			window.alert("게시글 등록이 완료되었습니다.");
			history.push("/qnalist");
		} else {
			const uploadPromises = FileUploadService.uploadQna_nonFile(qnaData);
			window.alert("게시글 등록이 완료되었습니다.");
			history.push("/qnalist");
		}
		setMessage([]);
	};

	// 파일첨부 업로드
	const uploadQna = (file) => {
		return FileUploadService.uploadQna(file, qnaData);
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

	const dataSetting = (title, content) => {
		setQnaData({
			back_Qna_Name: title,
			back_Qna_Content: content,
		});
	};

	return (
		<div
			style={{
				backgroundColor: "rgb(243, 243, 239)",
				marginLeft: "10%",
				marginRight: "10%",
			}}
		>
			<br />
			<br />
			<div
				style={{
					backgroundColor: "orange",
					paddingTop: "10px",
					width: "700px",
					height: "100%",
					margin: "0 auto",
				}}
			>
				<h1 style={{ color: "white" }}>
					<strong>&nbsp;&nbsp;문의 남기기</strong>
				</h1>
				<div
					style={{
						paddingLeft: "10px",
						paddingRight: "10px",
						width: "100%",
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
											<input
												type="text"
												onChange={changeTitle}
												value={title}
												placeholder="제목을 입력해주세요"
												style={{
													width: "100%",
													height: "30px",
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
													// maxHeight: "30vh",
													minHeight: "25vh",
													border: "1px solid gray",
													margin: "0 auto",
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
										* 파일은 1개만 첨부 가능합니다.
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
							href="qnalist"
							variant="outlined"
							style={{ textDecoration: "none" }}
						>
							목록
						</Button>
					</div>
					<br />
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
		</div>
	);
}
