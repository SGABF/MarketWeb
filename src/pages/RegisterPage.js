import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginRegister.css";

function RegisterPage() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Name, setName] = useState("");
  const [Birth, setBirth] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNo, setPhoneNo] = useState("");

  const onUsernameHandler = (event) => {
    setUsername(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onBirthHandler = (event) => {
    setBirth(event.currentTarget.value);
  };
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPhoneNoHandler = (event) => {
    setPhoneNo(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (Password !== ConfirmPassword) {
      alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }
  };

  return (
    <div className="loginRegister">
      <Link to="/">
        <img className="login_logo" src="image/logo2.png" alt="" />
      </Link>
      <form action="">
        <div className="loginRegister_box">
          <input
            type="text"
            name="username"
            placeholder="아이디"
            className="loginRegister_input"
            value={Username}
            onChange={onUsernameHandler}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            className="loginRegister_input"
            value={Password}
            onChange={onPasswordHandler}
          />
          <br />
          <input
            type="password"
            name="confirmPassword"
            placeholder="비밀번호 확인"
            className="loginRegister_input"
            value={ConfirmPassword}
            onChange={onConfirmPasswordHandler}
          />
          <br />
          <input
            type="text"
            name="user_name"
            placeholder="이름"
            className="loginRegister_input"
            value={Name}
            onChange={onNameHandler}
          />{" "}
          <br />
          <input
            type="text"
            name="user_birth"
            placeholder="생년월일(예:19901022)"
            className="loginRegister_input"
            value={Birth}
            onChange={onBirthHandler}
          />{" "}
          <br />
          <input
            type="text"
            name="user_email"
            placeholder="이메일"
            className="loginRegister_input"
            value={Email}
            onChange={onEmailHandler}
          />{" "}
          <br />
          <input
            type="text"
            name="user_phone"
            placeholder="전화번호('-'없이)"
            className="loginRegister_input"
            value={PhoneNo}
            onChange={onPhoneNoHandler}
          />{" "}
          <br />
          <Link to="/regok">
            <button
              type="submit"
              onSubmit={onSubmit}
              className="loginRegister_button"
            >
              회원가입
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
