import "antd/dist/antd.css";

import React,{ useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Footer from "../components/Footer";

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import { Link } from "react-router-dom";

const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },

    {
        id: 'Content',
        label: 'Content',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('ko-KR'),
    },
    
    {
        id: 'Question',
        label: 'Question',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('ko-KR'),
    },
    {
        id: 'RegDate',
        label: 'RegDate',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('ko-KR'),
    },
];

function createData(name, Content, Question, RegDate) {

    return { name, Content, Question, RegDate  };
}

const rows = [
    createData('운영자', '배송이 늦어져서 죄송합니다. 19일까지 배송 완료 될 예정입니다.', '15일 배송건에 대해서 공지사항 드립니다.', '2022-03-15'),
    createData('운영자', '배송이 늦어져서 죄송합니다. 19일까지 배송 완료 될 예정입니다.', '15일 배송건에 대해서 공지사항 드립니다.', '2022-03-15'),
    createData('운영자', '배송이 늦어져서 죄송합니다. 19일까지 배송 완료 될 예정입니다.', '15일 배송건에 대해서 공지사항 드립니다.', '2022-03-15'),
    createData('운영자', '배송이 늦어져서 죄송합니다. 19일까지 배송 완료 될 예정입니다.', '15일 배송건에 대해서 공지사항 드립니다.', '2022-03-15'),
    createData('운영자', '배송이 늦어져서 죄송합니다. 19일까지 배송 완료 될 예정입니다.', '15일 배송건에 대해서 공지사항 드립니다.', '2022-03-15'),
    createData('운영자', '배송이 늦어져서 죄송합니다. 19일까지 배송 완료 될 예정입니다.', '15일 배송건에 대해서 공지사항 드립니다.', '2022-03-15'),
    createData('운영자', '배송이 늦어져서 죄송합니다. 19일까지 배송 완료 될 예정입니다.', '15일 배송건에 대해서 공지사항 드립니다.', '2022-03-15'),
    createData('운영자', '배송이 늦어져서 죄송합니다. 19일까지 배송 완료 될 예정입니다.', '15일 배송건에 대해서 공지사항 드립니다.', '2022-03-15'),
    createData('운영자', '배송이 늦어져서 죄송합니다. 19일까지 배송 완료 될 예정입니다.', '15일 배송건에 대해서 공지사항 드립니다.', '2022-03-15'),
    createData('운영자', '배송이 늦어져서 죄송합니다. 19일까지 배송 완료 될 예정입니다.', '15일 배송건에 대해서 공지사항 드립니다.', '2022-03-15'),
    createData('운영자', '배송이 늦어져서 죄송합니다. 19일까지 배송 완료 될 예정입니다.', '15일 배송건에 대해서 공지사항 드립니다.', '2022-03-15'),
    createData('운영자', '배송이 늦어져서 죄송합니다. 19일까지 배송 완료 될 예정입니다.', '15일 배송건에 대해서 공지사항 드립니다.', '2022-03-15'),
    createData('운영자', '배송이 늦어져서 죄송합니다. 19일까지 배송 완료 될 예정입니다.', '15일 배송건에 대해서 공지사항 드립니다.', '2022-03-15'),
    createData('운영자', '배송이 늦어져서 죄송합니다. 19일까지 배송 완료 될 예정입니다.', '15일 배송건에 대해서 공지사항 드립니다.', '2022-03-15'),
    createData('운영자', '배송이 늦어져서 죄송합니다. 19일까지 배송 완료 될 예정입니다.', '15일 배송건에 대해서 공지사항 드립니다.', '2022-03-15'),
];

export default function ColumnGroupingTable() {
    
    
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

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

        <Paper sx={{ width: '100%' }}>
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
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
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
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>

            <Link to="Write" alt="">
                <button type="submit">글쓰기</button>
            </Link>
        </div>
    );
}