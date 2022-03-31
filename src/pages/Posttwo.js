import React from "react";
import Button from "@mui/material/Button";
import "./Post.css";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { ConsoleSqlOutlined } from "@ant-design/icons";
import Table from 'react-bootstrap/Table'

function Post(props) {

  const [ detail, setDetail ] = useState([]);
  const location = useLocation();
  const id_data = location.id_value;

  useEffect(() => {
    console.log(id_data);
    getNoticeDetail(id_data);
  }, []);
  
  const getNoticeDetail = async (idx) => {
    await axios
      .get(
        "http://192.168.0.119:8080/MainView/noticeDetail",
        {
          params: { notice_Idx: idx },
        }
      )
      .then((res) => {
        console.log("가져온값 : " + res.data.length);
        console.log("가져온값 : " + JSON.stringify(res.data));
        setDetail(res.data);
      })
      .catch((error) => {
        console.log(`getNoticeDetail 에러 :  ${error.message}`);
      });
    
  };

  return (
    <>
      <div className="Post_container">
        <div className="notice_detail">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>{detail.back_Notice_Idx}</th>
                <th colSpan={3}> 제목 : {detail.back_Notice_Subject}</th>
                <th>{detail.back_Notice_RegDate}</th>
              </tr>
            </thead>
            <tr>
              <td colSpan={5}>
                {detail.back_Notice_Content}
              </td>
            </tr>
          </Table>
          <br />
          <br />
          <Button href="Write" >수정</Button>
          <Button href="Notice">목록</Button>
        </div>
      </div>
    </>
  );
}

export default Post;

