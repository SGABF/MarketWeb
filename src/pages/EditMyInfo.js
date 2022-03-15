import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginRegister.css"

function EditMyinfo() {
    
    const [phoneNo, setPhoneNo] = useState("");

    const onPhoneNoHandler = (event) => {
        setPhoneNo(event.currentTarget.value);
    };

    return(
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
              value={id}
              onChange={onIdHandler}
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              className="loginRegister_input"
              value={password}
              onChange={onPasswordHandler}
            />
            <br />
            <input
              type="password"
              name="confirmPassword"
              placeholder="비밀번호 확인"
              className="loginRegister_input"
              value={confirmPassword}
              onChange={onConfirmPasswordHandler}
            />
            <br />
            <input
              type="text"
              name="user_name"
              placeholder="이름"
              className="loginRegister_input"
              value={name}
              onChange={onNameHandler}
            />{" "}
            <br />
            <input
              type="text"
              name="user_birth"
              placeholder="생년월일(예:19901022)"
              className="loginRegister_input"
              value={birth}
              onChange={onBirthHandler}
            />{" "}
            <br />
            <input
              type="text"
              name="user_email"
              placeholder="이메일"
              className="loginRegister_input"
              value={email}
              onChange={onEmailHandler}
            />{" "}
            <br />
            <input
              type="text"
              name="user_phone"
              placeholder="전화번호('-'없이)"
              className="loginRegister_input"
              value={phoneNo}
              onChange={onPhoneNoHandler}
            />{" "}
            <br />
            <Link to="/regok">
              <button
                type="submit"
                onSubmit={onSubmit}
                className="loginRegister_button"
              >
                수정
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
}

export default EditMyinfo;