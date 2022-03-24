import "antd/dist/antd.css";
<<<<<<< HEAD

import React, { useState } from "react";
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

import { Link } from "react-router-dom";

import "./Table.css";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },

  { id: "Subname", label: "Subname", minWidth: 170 },
  {
    id: "Content",
    label: "Content",
    minWidth: 300,
    align: "right",
    format: (value) => value.toLocaleString("ko-KR"),
  },


  {
    id: "Question",
    label: "Question",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("ko-KR"),
  },
  {
    id: "RegDate",
    label: "RegDate",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("ko-KR"),
  },
];

function createData(name, Subname, Content, Question, RegDate) {
  return { name, Subname, Content, Question, RegDate };
}

const rows = [
  createData(
    "김철수",
    "배송이 대체 언제오죠?? 참나 ㅡㅡ",
    "배송이 안되요 ㅠㅠㅠ 아직도 안왔어요 ㅠㅠㅠㅠㅠㅠㅠ",
    "✔",
    "2022-03-15"
  ),
  createData(
    "김철수",
    "배송이 대체 언제오죠?? 참나 ㅡㅡ",
    "배송이 안되요 ㅠㅠㅠ 아직도 안왔어요 ㅠㅠㅠㅠㅠㅠㅠ",
    "✔",
    "2022-03-15"
  ),
  createData(
    "김철수",
    "배송이 대체 언제오죠?? 참나 ㅡㅡ",
    "배송이 안되요 ㅠㅠㅠ 아직도 안왔어요 ㅠㅠㅠㅠㅠㅠㅠ",
    "✔",
    "2022-03-15"
  ),
  createData(
    "김철수",
    "배송이 대체 언제오죠?? 참나 ㅡㅡ",
    "배송이 안되요 ㅠㅠㅠ 아직도 안왔어요 ㅠㅠㅠㅠㅠㅠㅠ",
    "✔",
    "2022-03-15"
  ),
  createData(
    "김철수",
    "배송이 대체 언제오죠?? 참나 ㅡㅡ",
    "배송이 안되요 ㅠㅠㅠ 아직도 안왔어요 ㅠㅠㅠㅠㅠㅠㅠ",
    "✔",
    "2022-03-15"
  ),
  createData(
    "김철수",
    "배송이 대체 언제오죠?? 참나 ㅡㅡ",
    "배송이 안되요 ㅠㅠㅠ 아직도 안왔어요 ㅠㅠㅠㅠㅠㅠㅠ",
    "✔",
    "2022-03-15"
  ),
  createData(
    "김철수",
    "배송이 대체 언제오죠?? 참나 ㅡㅡ",
    "배송이 안되요 ㅠㅠㅠ 아직도 안왔어요 ㅠㅠㅠㅠㅠㅠㅠ",
    "✔",
    "2022-03-15"
  ),
  createData(
    "김철수",
    "배송이 대체 언제오죠?? 참나 ㅡㅡ",
    "배송이 안되요 ㅠㅠㅠ 아직도 안왔어요 ㅠㅠㅠㅠㅠㅠㅠ",
    "✔",
    "2022-03-15"
  ),
  createData(
    "김철수",
    "배송이 대체 언제오죠?? 참나 ㅡㅡ",
    "배송이 안되요 ㅠㅠㅠ 아직도 안왔어요 ㅠㅠㅠㅠㅠㅠㅠ",
    "✔",
    "2022-03-15"
  ),
  createData(
    "김철수",
    "배송이 대체 언제오죠?? 참나 ㅡㅡ",
    "배송이 안되요 ㅠㅠㅠ 아직도 안왔어요 ㅠㅠㅠㅠㅠㅠㅠ",
    "✔",
    "2022-03-15"
  ),
  createData(
    "김철수",
    "배송이 대체 언제오죠?? 참나 ㅡㅡ",
    "배송이 안되요 ㅠㅠㅠ 아직도 안왔어요 ㅠㅠㅠㅠㅠㅠㅠ",
    "✔",
    "2022-03-15"
  ),
  createData(
    "김철수",
    "배송이 대체 언제오죠?? 참나 ㅡㅡ",
    "배송이 안되요 ㅠㅠㅠ 아직도 안왔어요 ㅠㅠㅠㅠㅠㅠㅠ",
    "✔",
    "2022-03-15"
  ),
  createData(
    "김철수",
    "배송이 대체 언제오죠?? 참나 ㅡㅡ",
    "배송이 안되요 ㅠㅠㅠ 아직도 안왔어요 ㅠㅠㅠㅠㅠㅠㅠ",
    "✔",
    "2022-03-15"
  ),
  createData(
    "김철수",
    "배송이 대체 언제오죠?? 참나 ㅡㅡ",
    "배송이 안되요 ㅠㅠㅠ 아직도 안왔어요 ㅠㅠㅠㅠㅠㅠㅠ",
    "✔",
    "2022-03-15"
  ),
  createData(
    "김철수",
    "배송이 대체 언제오죠?? 참나 ㅡㅡ",
    "배송이 안되요 ㅠㅠㅠ 아직도 안왔어요 ㅠㅠㅠㅠㅠㅠㅠ",
    "✔",
    "2022-03-15"
  ),
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
      <h1>고객센터</h1>

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
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
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
                            <Link to="Post" className="TableBody">
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
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <br />
      <Button variant="outlined" href="Write">
        글쓰기
      </Button>
    </div>
  );
}
=======
import { Button, Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function Tables() {
    const [isEditing, setIsEditing] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);
    const [dataSource, setDataSource] = useState([
        {
            id: 1,
            name: "John",
            email: "john@gmail.com",
            error: "창이 안떠요 ㅠㅠ",
        },
        {
            id: 2,
            name: "David",
            email: "david@gmail.com",
            error: "렉이 걸려요 ㅠㅠ",
        },
        {
            id: 3,
            name: "James",
            email: "james@gmail.com",
            error: "배송언제오죠??",
        },
        {
            id: 4,
            name: "Sam",
            email: "sam@gmail.com",
            error: "그냥올려봄",
        },
    ]);
    const columns = [
        {
            key: "1",
            title: "ID",
            dataIndex: "id",
        },
        {
            key: "2",
            title: "Name",
            dataIndex: "name",
        },
        {
            key: "3",
            title: "Email",
            dataIndex: "email",
        },
        {
            key: "4",
            title: "error",
            dataIndex: "error",
        },
        {
            key: "5",
            title: "Actions",
            render: (record) => {
                return (
                    <>
                        <EditOutlined
                            onClick={() => {
                                onEditStudent(record);
                            }}
                        />
                        <DeleteOutlined
                            onClick={() => {
                                onDeleteStudent(record);
                            }}
                            style={{ color: "red", marginLeft: 12 }}
                        />
                    </>
                );
            },
        },
    ];

    const onAddStudent = () => {
        const randomNumber = parseInt(Math.random() * 1000);
        const newStudent = {
            id: randomNumber,
            name: "Name " + randomNumber,
            email: randomNumber + "@gmail.com",
            error: "error " + randomNumber,
        };
        setDataSource((pre) => {
            return [...pre, newStudent];
        });
    };
    const onDeleteStudent = (record) => {
        Modal.confirm({
            title: "지우시겠습니까?",
            okText: "네",
            okType: "아니요",
            onOk: () => {
                setDataSource((pre) => {
                    return pre.filter((student) => student.id !== record.id);
                });
            },
        });
    };
    const onEditStudent = (record) => {
        setIsEditing(true);
        setEditingStudent({ ...record });
    };
    const resetEditing = () => {
        setIsEditing(false);
        setEditingStudent(null);
    };
    return (

        <div className="App">
            <h1>고객센터</h1>
            <header className="App-header">
                <Button onClick={onAddStudent}>글 추가</Button>
                <Table columns={columns} dataSource={dataSource}></Table>
                <Modal
                    title="Edit Student"
                    visible={isEditing}
                    okText="Save"
                    onCancel={() => {
                        resetEditing();
                    }}
                    onOk={() => {
                        setDataSource((pre) => {
                            return pre.map((student) => {
                                if (student.id === editingStudent.id) {
                                    return editingStudent;
                                } else {
                                    return student;
                                }
                            });
                        });
                        resetEditing();
                    }}
                >
                    <Input
                        value={editingStudent?.name}
                        onChange={(e) => {
                            setEditingStudent((pre) => {
                                return { ...pre, name: e.target.value };
                            });
                        }}
                    />
                    <Input
                        value={editingStudent?.email}
                        onChange={(e) => {
                            setEditingStudent((pre) => {
                                return { ...pre, email: e.target.value };
                            });
                        }}
                    />
                    <Input
                        value={editingStudent?.error}
                        onChange={(e) => {
                            setEditingStudent((pre) => {
                                return { ...pre, error: e.target.value };
                            });
                        }}
                    />
                </Modal>
            </header>
        </div>
    );
}

export default Tables;
>>>>>>> d49f371af1902cc21cc279c8e61dc4a1ed485f26
