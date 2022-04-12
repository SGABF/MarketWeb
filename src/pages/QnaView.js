import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import axios from "axios";
import "./Notice.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function QnaView(props) {
	const [qnaView, setQnaView] = useState([]);
	const [qnaFile, setQnaFile] = useState([]);
	const [qnaReply, setQnaReply] = useState([]);
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const location = useLocation();
	const id_data = location.state;
	const [comment, setComment] = useState([]);

	useEffect(() => {
		getQnaView(id_data);
	}, []);
	// console.log(qnaView);
	// console.log(qnaFile.back_Qnafile_SaveName);
	// const imageList =
	// 	qnaView.back_Qnafile_OriName &&
	// 	qnaView.back_Qnafile_OriName.map((item) => (
	// 		<img
	// 			className="d-block w-100"
	// 			src={"http://192.168.0.150:8080/imagePath/" + item.back_Qnafile_OriName}
	// 			alt="First slide"
	// 		/>
	// 	));

	const getQnaView = async (idx) => {
		await axios
			.post("http://192.168.0.150:8080/MainView/qnaView", null, {
				params: { idx: idx },
			})
			.then((res) => {
				// console.log("가긴했음");
				// console.log("가져온값 : " + JSON.stringify(res.data));
				setQnaView(res.data);
				setQnaFile(res.data.file);
				setQnaReply(res.data.reply);
			})
			.catch((error) => {
				console.log(`getQnaView
				 에러 :  ${error.message}`);
			});
	};

	// const imageList =
	// 	qnaView.file &&
	// 	qnaView.file.map((item) => (
	// 		<img
	// 			className="d-block w-100"
	// 			src={
	// 				"http://192.168.0.121:8080/imagePath/" + item.back_Qnafile_SaveName
	// 			}
	// 			alt="First slide"
	// 		/>
	// 	));

	function createData(name, calories, fat, carbs, protein) {
		return { name, calories, fat, carbs, protein };
	}

	const rows = [createData("Frozen yoghurt", 159, 6.0, 24, 4.0)];

	return (
		<div
			style={{
				backgroundColor: "rgb(243, 243, 239)",
				marginLeft: "10%",
				marginRight: "10%",
				minHeight: "100vh",
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
					<strong>&nbsp;&nbsp;고객센터 답변</strong>
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
										<TableCell style={{ fontSize: "13pt" }}>
											<strong>제목 : {qnaView.back_Qna_Name}</strong>
										</TableCell>
										<TableCell align="right">
											{qnaView.back_Qna_RegDate}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell colSpan={2}>
											<strong>작성자 : {qnaView.user_Name}</strong>
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow>
										<TableCell colSpan={2} component="th" scope="row">
											{qnaFile === null ? (
												""
											) : (
												<img
													src={
														"http://192.168.0.150:8080/imagePath/" +
														qnaFile.back_Qnafile_SaveName
													}
												/>
											)}
											<br />
											{qnaView.back_Qna_Content}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell colSpan={2}>
											<strong>답변 : </strong>
											{qnaReply
												? qnaReply.back_Qna_Reply_Content
												: "답변 준비중입니다."}
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</TableContainer>
					</Paper>
					<br />
					<div style={{ textAlign: "right", paddingRight: "20px" }}>
						<Button
							href="Write"
							variant="outlined"
							style={{ textDecoration: "none" }}
						>
							수정
						</Button>
						&nbsp;
						<Button
							href="QnaList"
							variant="outlined"
							style={{ textDecoration: "none" }}
						>
							목록
						</Button>
					</div>
					<br />
				</div>
			</div>
		</div>
	);
}

export default QnaView;
