import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import "./Post.css";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import axios from "axios";
import Footer from "components/Footer";

function Post(props) {
  const [notice, setNotice] = useState([]);

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
        console.log(`getNotice 에러 :  ${error.message}`);
      });
  };

  const imageList =
    notice.back_Noticefile_OriName &&
    notice.back_Noticefile_OriName.map((item) => (
      <img
        className="d-block w-100"
        src={
          "http://192.168.0.150:8080/imagePath/" + item.back_Noticefile_OriName
        }
        alt="First slide"
      />
    ));

  return (
    <>
      <div className="Post_container">
        <div className="blue_button">
          <Button variant="contained" size="large">
            {notice.back_Notice_Subject}
            {notice.back_Notice_Content}
            {notice.back_Notice_RegDate}
          </Button>
          <br />
          <br />
          <Button href="Write">수정</Button>
          <Button href="Notice">목록</Button>
        </div>
      </div>

      <br />
    </>
  );
}

export default Post;
