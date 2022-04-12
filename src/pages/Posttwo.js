import React, { useEffect, useState } from "react";
// import "./Post.css";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
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
								sx={{ minHeight: 500 }}
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
					<div style={{ textAlign: "right", padding: "20px" }}>
						<Button
							href="Notice"
							variant="outlined"
							style={{ textDecoration: "none" }}
						>
							목록
						</Button>
						<br />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Posttwo;
