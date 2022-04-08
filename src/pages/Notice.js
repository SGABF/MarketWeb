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
		<div>
			<h1>공지사항</h1>

			<Paper sx={{ width: "100%" }}>
				<TableContainer sx={{ maxHeight: 440 }}>
					<Table stickyHeader aria-label="sticky table">
						<TableHead>
							<TableRow>
								<TableCell align="center" colSpan={2}>
									Notice
								</TableCell>
								<TableCell align="center" colSpan={3}>
									Details
								</TableCell>
							</TableRow>
							<TableRow>
								{columns.map((column) => (
									<TableCell
										key={column.id}
										align={column.align}
										style={{ top: 57, minWidth: column.minWidth }}
									>
										{column.label}
									</TableCell>
								))}
							</TableRow>
						</TableHead>

						<TableBody>
							{notice.map((row) => {
								return (
									<TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
										{columns.map((column) => {
											const value = row[column.id];
											console.log("너는 누구냐? : " + row.back_Notice_Idx);
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
			<Footer />
		</div>
	);
}

const columns = [
	{ id: "back_Notice_Idx", label: "Id", minWidth: 170 },

	{ id: "back_Notice_Subject", label: "Name", minWidth: 170 },
	{
		id: "back_Notice_Content",
		label: "Content",
		minWidth: 170,
		align: "right",
		format: (value) => value.toLocaleString("ko-KR"),
	},

	{
		id: "back_Notice_RegDate",
		label: "RegDate",
		minWidth: 170,
		align: "right",
		format: (value) => value.toLocaleString("ko-KR"),
	},
];

// function createData(name, Subname, Content, RegDate, location) {
//   return { name, Subname, Content, RegDate, location };
// }

// createData(
//   "운영자",
//   "15일 배송건에 대해서 공지사항 드립니다.",

//   "배송이 늦어져서 죄송합니다. 19일까지 배송 완료 될 예정입니다.",

//   "2022-03-15"
// ),
//   createData(
//     "운영자",
//     "15일 배송건에 대해서 공지사항 드립니다.",

//     "배송이 늦어져서 죄송합니다. 19일까지 배송 완료 될 예정입니다.",

//     "2022-03-15"
//   ),
//   createData(
//     "운영자",
//     "15일 배송건에 대해서 공지사항 드립니다.",
//     "배송이 늦어져서 죄송합니다. 19일까지 배송 완료 될 예정입니다.",

//     "2022-03-15"
//   ),
//   createData(
//     "운영자",
//     "15일 배송건에 대해서 공지사항 드립니다.",
//     "배송이 늦어져서 죄송합니다. 19일까지 배송 완료 될 예정입니다.",

//     "2022-03-15"
//   ),
//   createData(
//     "운영자",
//     "15일 배송건에 대해서 공지사항 드립니다.",
//     "배송이 늦어져서 죄송합니다. 19일까지 배송 완료 될 예정입니다.",
//     "2022-03-15"
//   ),
//   createData(
//     "운영자",
//     "15일 배송건에 대해서 공지사항 드립니다.",
//     "배송이 늦어져서 죄송합니다. 19일까지 배송 완료 될 예정입니다.",

//     "2022-03-15"
//   ),
//   createData(
//     "운영자",
//     "15일 배송건에 대해서 공지사항 드립니다.",
//     "배송이 늦어져서 죄송합니다. 19일까지 배송 완료 될 예정입니다.",

//     "2022-03-15"
//   ),
//   createData(
//     "운영자",
//     "15일 배송건에 대해서 공지사항 드립니다.",
//     "배송이 늦어져서 죄송합니다. 19일까지 배송 완료 될 예정입니다.",

//     "2022-03-15"
//   ),
//   createData(
//     "운영자",
//     "15일 배송건에 대해서 공지사항 드립니다.",
//     "배송이 늦어져서 죄송합니다. 19일까지 배송 완료 될 예정입니다.",

//     "2022-03-15"
//   ),
//   createData(
//     "운영자",
//     "15일 배송건에 대해서 공지사항 드립니다.",
//     "배송이 늦어져서 죄송합니다. 19일까지 배송 완료 될 예정입니다.",

//     "2022-03-15"
//   ),
//   createData(
//     "운영자",
//     "15일 배송건에 대해서 공지사항 드립니다.",
//     "배송이 늦어져서 죄송합니다. 19일까지 배송 완료 될 예정입니다.",

//     "2022-03-15"
//   ),
//   createData(
//     "운영자",
//     "15일 배송건에 대해서 공지사항 드립니다.",
//     "배송이 늦어져서 죄송합니다. 19일까지 배송 완료 될 예정입니다.",

//     "2022-03-15"
//   ),
//   createData(
//     "운영자",
//     "15일 배송건에 대해서 공지사항 드립니다.",
//     "배송이 늦어져서 죄송합니다. 19일까지 배송 완료 될 예정입니다.",

//     "2022-03-15"
//   ),
//   createData(
//     "운영자",
//     "15일 배송건에 대해서 공지사항 드립니다.",
//     "배송이 늦어져서 죄송합니다. 19일까지 배송 완료 될 예정입니다.",

//     "2022-03-15"
//   );
