import "antd/dist/antd.css";
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
        },]  /* <--기호 수정 필요 밑에는 Actions 란 필요시 주석해제*/
    //     {
    //         key: "5",
    //         title: "Actions",
    //         render: (record) => {
    //             return (
    //                 <>
    //                     <EditOutlined
    //                         onClick={() => {
    //                             onEditStudent(record);
    //                         }}
    //                     />
    //                     <DeleteOutlined
    //                         onClick={() => {
    //                             onDeleteStudent(record);
    //                         }}
    //                         style={{ color: "red", marginLeft: 12 }}
    //                     />
    //                 </>
    //             );
    //         },
    //     },
    // ];

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
                    <div className="input-style">

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
                    </div>
                </Modal>
            </header>
        </div>
    );
}

export default Tables;