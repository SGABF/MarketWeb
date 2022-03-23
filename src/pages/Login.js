import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import * as loginService from "../service/AuthenticationService.js";
import axios from "axios";


function Login() {
  const [id, setId] = useState("");
  const [posts, setPosts] = useState([]);
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

  const signIn = (e) => {
    e.preventDefault();
    console.log(id, password);
    loginService
      .executeJwtAuthenticationService(id, password)
      .then((response) => {
        console.log(response);
        setToken(response.data.token);
        loginService.registerSuccessfulLoginForJwt(id, token);
        window.alert("로그인 성공");
        // history.push("/");
      });
  };

  const register = (e) => {
    e.preventDefault();

    /*
      auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth){
          history.push('/') 
        }
      })
      .catch(error => alert(error.message)) */
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src="image/logotwo.png" alt="" />
      </Link>

      <div className="login_container">
        <h1>로그인</h1>
        <form>
          <h5>아이디</h5>
          <input value={id} onChange={(e) => setId(e.target.value)} type="id" />
          <h5>비밀번호</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />

          <header>
            <h1>게시물 목록</h1>
          </header>

          <main>
            {posts.map(({ username, user_name, user_id }) => (
              <article key={user_id}>
                <h3>
                  {user_id}. {user_name}
                </h3>
                <p>{user_id}</p>
              </article>
            ))}
          </main>

          <button onClick={signIn} className="login_signInButton" id="loginBtn">
            로그인 하기
          </button>
        </form>

        <p>아이디가 없으십니까?</p>
        <Link to="/">
          <p>아이디 찾기</p>
        </Link>
        <Link to="/">
          <p>비밀번호 찾기</p>
        </Link>
        <button onClick={register} className="login_registerButton">
          회원가입
        </button>
      </div>
    </div>
  );
}

export default Login;
