import React, { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { Input } from "@mui/material";
import TableHead from "@mui/material/TableHead";
import FileUploadService from "service/FileUploadService";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

import { styled } from "@mui/material/styles";

export default function Write() {
	const [selectedFiles, setSelectedFiles] = useState(undefined);
	const [message, setMessage] = useState([]);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [qnaData, setQnaData] = useState([]);
	const selectFiles = (event) => {
		setSelectedFiles(event.target.files);
	};
	const history = useHistory();

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

	const uploadQna = (file) => {
		return FileUploadService.uploadQna(file, qnaData);
	};

	useEffect(() => {
		dataSetting(title, content);
	}, [title, content, selectedFiles]);

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
	// const editorRef = useRef(null);
	// const log = () => {
	// 	if (editorRef.current) {
	// 		console.log(editorRef.current.getContent());
	// 	}
	// };
	// let history = useHistory();

	// const Input = styled("input")({
	// 	display: "none",
	// });

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
			<div style={{ backgroundColor: "orange", paddingTop: "10px" }}>
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
											<input
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
								</TableHead>
								<TableBody>
									<TableRow>
										<TableCell colSpan={2} component="th" scope="row">
											<strong>문의 내용 </strong>
											<input
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
						<Button href="qnalist">목록</Button>
					</div>
				</div>
			</div>
			<br />
			<br />
		</div>
	);
}
