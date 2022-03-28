import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";
import * as loginService from "../service/AuthenticationService.js";
import Button from "react-bootstrap/Button";
import "./LoginRegister.css";

function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  let history = useHistory();

  // POST 요청 전송

  const checkPw = (e) => {
    const username = document.querySelector("#username").value;
    if (username.length < 5) {
      window.alert("5자 이상이어야 합니다.");
      return;
    }
    axios({
      method: "post",
      url: "http://192.168.0.76:8080/notToken//checkPassword",
      data: { user_password: password },
    })
      .then((res) => {
        if (res.data === 1) {
          window.location.href = "/editmyinfo";
        } else {
          window.alert("비밀번호를 다시 확인해주세요.");
          document.querySelector("#password").value = "";
          document.querySelector("#password").focus();
        }
      })
      .catch((error) => {
        window.alert("서버통신에러 - 잠시 후 다시 시도해주세요.");
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => signIn(data);

  // const registerPage = (e) => {
  //   e.preventDefault();
  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((auth) => {
  //       if (auth) {
  //         history.push("/");
  //       }
  //     })
  //     .catch((error) => alert(error.message));
  // };

  return (
    <div className="loginRegister">
      <Link to="/">
        <img className="login_logo" src="image/logotwo.png" alt="" />
      </Link>

      <form onSubmit={handleSubmit(onSubmit)} className="loginRegister_box">
        <h2>
          고객님의 소중한 정보 보호를 위해 비밀번호를 다시 입력해주시기
          바랍니다.
        </h2>
        <input
          type="password"
          {...register("password", {
            required: true,
          })}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
          className="loginRegister_input"
        />
        {errors.password && errors.password.type === "required" && (
          <p>비밀번호를 입력해주세요.</p>
        )}
        <input type="submit" value="회원정보변경" />
        <Link to="/pwinquiry">
          <span className="find">비밀번호 찾기</span>
        </Link>
        <br />
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

export default LoginPage;
