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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    loginService.registerSuccessfulLoginForJwt(id, token);
  });

  const signIn = (data) => {
    // e.preventDefault();
    console.log(data.username, data.password);

    loginService
      .executeJwtAuthenticationService(data.username, data.password)
      .then((response) => {
        setToken(response.data.token);
        window.alert("로그인 성공");
        console.log(token);
        history.push("/");
        window.location.reload();
      })
      .catch((error) => {
        alert('로그인 에러: 입력하신 정보를 다시 확인해주세요.');
        setPassword('');
        setId('');
      });
  };

  return (
    <div className="loginRegister">
      <Link to="/">
        <img className="login_logo" src="image/logotwo.png" alt="" />
      </Link>

      <form onSubmit={handleSubmit(signIn)} className="loginRegister_box" autoComplete="off">
        <input
          type="id"
          {...register("username", {
            required: true,
          })}
          value={id}
          onChange={(e) => setId(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
          className="loginRegister_input"
        />
        {errors.password && errors.password.type === "required" && (
          <p>비밀번호를 입력해주세요.</p>
        )}
        <input type="submit" value="로그인" />

        <Link to="/idinquiry">
          <span className="find">아이디 찾기</span>
        </Link>
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
