import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import "./LoginRegister.css";

function IDInquiry() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios({
      method: "post",
      url: "http://192.168.0.76:8080/notToken/findId",
      data: {
        user_name: data.name,
        user_email: data.email,
      },
    })
      .then((res) => {
        if (res.data !== "") {
          window.alert("고객님의 아이디는 " + res.data + "입니다.");
        } else {
          window.alert("아이디가 존재하지 않습니다.");
        }
      })
      .catch((error) => {
        window.alert("서버 통신 에러");
      });
  };

  return (
    <div className="loginRegister">
      <Link to="/">
        <img className="login_logo" src="image/logotwo.png" alt="" />
      </Link>
      <form onSubmit={handleSubmit(onSubmit)} className="loginRegister_box">
        <input
          type="text"
          {...register("name", {
            required: true,
          })}
          placeholder="이름"
          className="loginRegister_input"
        />
        {errors.name && errors.name.type === "required" && (
          <p>이름을 입력해주세요.</p>
        )}
        <input
          type="text"
          {...register("email", {
            required: true,
            pattern:
              /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
          })}
          placeholder="이메일"
        />
        {errors.email && errors.email.type === "required" && (
          <p>이메일을 입력해주세요.</p>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <p>이메일 양식을 확인해주세요.</p>
        )}
        <br />
        <input type="submit" value="아이디 찾기" />
        <Link to="/pwinquiry">
          <span className="find">비밀번호 찾기</span>
        </Link>
        <Link to="/agreement">
          <Button
            variant="outline-dark"
            type="submit"
            className="loginRegister_button"
          >
            회원가입
          </Button>
          {/* <button className="loginRegister_button">회원가입</button> */}
        </Link>
      </form>
    </div>
  );
}

export default IDInquiry;
