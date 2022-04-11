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

export default function ColumnGroupingTable() {
	const [notice, setNotice] = useState([]);
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const location = useLocation();
	const id_data = location.state;
	const [comment, setComment] = useState([]);

	useEffect(() => {
		getNotice();
	}, []);

	const getNotice = async () => {
		await axios
			.get("http://192.168.0.150:8080/MainView/noticeList")
			.then((res) => {
				console.log("가져온값 : " + res.data.length);
				console.log("가져온값 : " + JSON.stringify(res.data));
				setNotice(res.data);
			})
			.catch((error) => {
				console.log(`getHome 에러 :  ${error.message}`);
			});
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
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
			<div style={{ backgroundColor: "orange", paddingTop: "10px" }}>
				<h1 style={{ color: "white" }}>
					<strong>&nbsp;&nbsp;공지사항</strong>
				</h1>
				<Paper sx={{ width: "100%" }}>
					<TableContainer sx={{ maxHeight: 440 }}>
						<Table stickyHeader aria-label="sticky table">
							<TableHead>
								<TableRow>
									<TableCell
										align="center"
										width="50%"
										style={{ fontSize: "15pt" }}
									>
										<strong>제목</strong>
									</TableCell>
									<TableCell
										align="center"
										width="25%"
										style={{ fontSize: "15pt" }}
									>
										<strong>등록일</strong>
									</TableCell>
								</TableRow>
							</TableHead>

							<TableBody>
								{notice.map((row) => {
									return (
										<TableRow
											hover
											role="checkbox"
											tabIndex={-1}
											key={row.code}
										>
											{columns.map((column) => {
												const value = row[column.id];
												return (
													<TableCell key={column.id} align={column.align}>
														<Link
															to={{
																pathname: "/Posttwo",
																id_value: row.back_Notice_Idx,
															}}
															className="TableBody"
														>
															{column.format && typeof value === "number"
																? column.format(value)
																: value}
														</Link>
													</TableCell>
												);
											})}
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
					</TableContainer>
					<TablePagination
						rowsPerPageOptions={[10, 25, 100]}
						component="div"
						count={notice.length}
						rowsPerPage={rowsPerPage}
						page={page}
						onPageChange={handleChangePage}
						onRowsPerPageChange={handleChangeRowsPerPage}
					/>
				</Paper>
				<br />
				<br />
				<br />
			</div>
			<br />
			<br />
		</div>
	);
}

const columns = [
	// { id: "back_Notice_Idx", label: "", minWidth: 170 },

	{ id: "back_Notice_Subject", label: "제목" },
	// {
	// 	id: "back_Notice_Content",
	// 	label: "내용",
	// 	align: "right",
	// 	format: (value) => value.toLocaleString("ko-KR"),
	// },

	{
		id: "back_Notice_RegDate",
		label: "등록일",
		align: "right",
		format: (value) => value.toLocaleString("ko-KR"),
	},
];
