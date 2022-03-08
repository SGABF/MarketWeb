import "antd/dist/antd.css";
import { Button, Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Footer from "../components/Footer";

function App() {
    const [isEditing, setIsEditing] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);
    const [dataSource, setDataSource] = useState([
        {
            id: 1,
            notice: "금일 점검 시간 안내(오후 3시~4시)",
        },
        {
            id: 2,
            notice: "배송 지연 사항 안내",
        },
        {
            id: 3,
            notice: "오류 해결방법 안내",
        },
        {
            id: 4,
            notice: "공지사항",
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
            title: "notice",
            dataIndex: "notice",
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
            notice: "notice " + randomNumber,
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
            <h1>공지사항</h1>
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
                        value={editingStudent?.notice}
                        onChange={(e) => {
                            setEditingStudent((pre) => {
                                return { ...pre, notice: e.target.value };
                            });
                        }}
                    />
                </Modal>
            </header>
        <Footer />
        </div>
    );
}

export default App;