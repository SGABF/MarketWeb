import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import "./LoginRegister.css";

function PWInquiry() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    // axios.post("/", data);
  };

  // const onSubmit = (event) => {
  //     event.preventDefault();
  //     if () {
  //     alert("존재하지 않는 정보입니다.");
  //     }
  // };

  return (
    <div className="loginRegister">
      <Link to="/">
        <img className="login_logo" src="image/logo2.png" alt="" />
      </Link>
      <form onSubmit={handleSubmit(onSubmit)} className="loginRegister_box">
        <input
          type="text"
          {...register("username", {
            required: true,
          })}
          placeholder="아이디"
          className="loginRegister_input"
        />
        {errors.username && errors.username.type === "required" && (
          <p>아이디를 입력해주세요.</p>
        )}

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
        <input type="submit" value="비밀번호 찾기" />
        <Link to="/idinquiry">
          <span className="find">아이디 찾기</span>
        </Link>
        <Link to="/agreement">
          <Button
            variant="outline-dark"
            type="submit"
            className="loginRegister_button"
          >
            회원가입
          </Button>
        </Link>
      </form>
    </div>
  );
}

export default PWInquiry;