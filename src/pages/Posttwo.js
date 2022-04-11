import React, { useEffect, useState } from "react";
import "./Post.css";
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
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function Posttwo(props) {
	const [notice, setNotice] = useState([]);
	const location = useLocation();
	const id_value = location.id_value;

	useEffect(() => {
		getNotice(id_value);
		console.log(id_value);
	}, []);

	const getNotice = async (id_value) => {
		await axios
			.get("http://192.168.0.150:8080/MainView/noticeDetail", {
				params: { notice_Idx: id_value },
			})
			.then((res) => {
				console.log("가져온값 : " + res.data.length);
				console.log("가져온값 : " + JSON.stringify(res.data));
				setNotice(res.data);
				console.log(res.data);
			})
			.catch((error) => {
				console.log(`getNotice 에러 :  ${error.message}`);
			});
	};

	// const imageList =
	// 	notice &&
	// 	notice.map((item) => (
	// 		<img
	// 			className="image"
	// 			src={
	// 				"http://192.168.0.150:8080/imagePath/" + item.back_Noticefile_SaveName
	// 			}
	// 			alt="First slide"
	// 		/>
	// 	));

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
					<strong>&nbsp;&nbsp;고객센터 답변</strong>
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
											<strong>제목 : {notice.back_Notice_Subject}</strong>
										</TableCell>
										<TableCell align="right">
											{notice.back_Notice_RegDate}
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow>
										<TableCell colSpan={2} component="th" scope="row">
											<img
												src={
													"http://192.168.0.150:8080/imagePath/" +
													notice.back_Noticefile_SaveName
												}
											/>
											<br />
											<br />
											{notice.back_Notice_Content}
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</TableContainer>
					</Paper>
					<br />
					<br />
					<div style={{ textAlign: "right" }}>
						<Button href="Notice">목록</Button>
					</div>
				</div>
			</div>
			<br />
			<br />
		</div>
	);
}

export default Posttwo;
