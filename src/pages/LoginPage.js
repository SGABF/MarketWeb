import React, { useState } from "react";
import "./LoginRegister.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

function LoginPage(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    // axios.post("/", data);
  };

  // const onSubmitHandler = (e) => {
  //   e.preventDefault();
  //   console.log(Username);
  //   console.log(Password);

  //   let body = {
  //     username: Username,
  //     user_password: Password,
  //   };

  //   axios
  //     .post("http://localhost:8888/user", body)
  //     .then((res) => console.log(res));
  // };

  // /* 로그인 db연결 이쪽에 */

  // /* example (!!history 있어야 로그인 넘어감!!) */

  // const signIn = (e) => {
  //   e.preventDefault();

  //   auth.signInWithEmailAndPassword(Username, Password)
  //           .then(auth => {
  //               history.push('/')
  //           })
  //           .catch(error => alert(error.message))
  //   }
  // };

  // const register = (e) => {
  //   e.preventDefault();
  //   /*
  //   auth.createUserWithEmailAndPassword(email, password)
  //           .then((auth) => {
  //               if (auth){
  //                   history.push('/')
  //               }
  //           })
  //           .catch(error => alert(error.message)) */
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
          type="password"
          {...register("password", {
            required: true,
          })}
          placeholder="비밀번호"
          className="loginRegister_input"
        />
        {errors.password && errors.password.type === "required" && (
          <p>비밀번호를 입력해주세요.</p>
        )}

        <Link to="/idinquiry">
          <span className="find">아이디 찾기</span>
        </Link>

        <Link to="/pwinquiry">
          <span className="find">비밀번호 찾기</span>
        </Link>
        <br />
        <input type="submit" value="로그인" />
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

export default withRouter(LoginPage);
