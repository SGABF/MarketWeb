import React from "react";
import Button from "@mui/material/Button";
import "./Post.css";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

function Post(props) {
  return (
    <>
      <div className="Post_container">
        <div className="blue_button">
          <Button variant="contained" size="large">
            배송이 대체 언제오죠?? 참나 ㅡㅡ 배송이 안되요 아직도 안왔어요
            ㅠㅠㅠㅠㅠㅠ
          </Button>
          <br />
          <br />
          <br />
          <br />
          <br />

          <Button variant="contained" size="large">
            3월 15일 까지 꼭 보내주세요 ㅡㅡ
          </Button>
        </div>
        <br />
        <br />
        <br />

        <div className="white_button">
          <Button variant="outlined" size="large">
            네 3일 후 배송 예정입니다.
          </Button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Button variant="outlined" size="large" className="white_buttontwo">
            네. 고객님 알겠습니다.
          </Button>
        </div>
      </div>
      <br />

      <div></div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button href="Write">수정</Button>
      <Button href="Notice">목록</Button>
    </>
  );
}

export default Post;
