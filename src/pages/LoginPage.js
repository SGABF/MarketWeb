import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
import * as loginService from "../service/AuthenticationService.js";
import Button from "react-bootstrap/Button";
import "./LoginRegister.css";

function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const history = useHistory();

  /* 로그인 db연결 이쪽에 */

  //example (!!history 있어야 로그인 넘어감!!) */
  // useEffect(() => {
  //   fetch("http://192.168.0.76:8080/authenticate/login")
  //     .then((res) => res.json())
  //     .then((data) => setPosts(data));
  // }, []);

  // POST 요청 전송

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signIn = (data) => {
    // e.preventDefault();
    console.log(data.username, data.password);

    loginService
      .executeJwtAuthenticationService(id, password)
      .then((response) => {
        setToken(response.data.token);
        loginService.registerSuccessfulLoginForJwt(id, token);
        window.alert("로그인 성공");
        // history.push("/");
      });
  };

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
        <img className="login_logo" src="image/logo2.png" alt="" />
      </Link>

      <form onSubmit={handleSubmit(onSubmit)} className="loginRegister_box">
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
