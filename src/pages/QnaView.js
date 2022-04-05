import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Footer from "../components/Footer";
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
import { Link } from "react-router-dom";
import "./Notice.css";
import {
	Redirect,
	useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

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
	console.log(qnaView);
	console.log(qnaFile.back_Qnafile_SaveName);
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
			.post("http://192.168.0.121:8080/MainView/qnaView", null, {
				params: { idx: idx },
			})
			.then((res) => {
				console.log("가긴했음");
				console.log("가져온값 : " + JSON.stringify(res.data));
				setQnaView(res.data);
				setQnaFile(res.data.file);
				setQnaReply(res.data.reply);
				console.log(JSON.stringify(res.data.file));
				console.log(res.data.file.back_Qnafile_SaveName);
				console.log(res.data.reply.back_Qna_Reply_Content);
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

	return (
		<div>
			<h1>고객센터 답변</h1>
			<div className="Post_container">
				<div className="blue_button">
					<div>
						<table>
							<tr>{qnaView.back_Qna_Content}</tr>
							<tr>{qnaView.back_Qna_RegDate}</tr>
							{/* <tr>{qnaView.file.back_Qnafile_SaveName}</tr> */}
							<tr>{qnaView.back_Qna_Name}</tr>
							<tr>{qnaFile.back_Qnafile_SaveName}</tr>
							<tr>{qnaReply.back_Qna_Reply_Content}</tr>
						</table>
					</div>
					<br />
					<br />
					<Button href="Write">수정</Button>
					<Button href="Notice">목록</Button>
				</div>
			</div>
			<br />
		</div>
	);
}

export default QnaView;
