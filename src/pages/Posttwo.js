import React from "react";
import Button from "@mui/material/Button";
import "./Post.css";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import axios from "axios";

function Post(props) {
  return (
    <>
      <div className="Post_container">
        <div className="blue_button">
          <Button variant="contained" size="large">
            15일 배송건에 대해서 공지사항 드립니다. 배송이 늦어져서 죄송합니다.
            19일까지 배송 완료 될 예정입니다
          </Button>
          <br />
          <br />

          <Button href="Write">수정</Button>
          <Button href="Notice">목록</Button>
        </div>
      </div>
    </>
  );
}

export default Post;
