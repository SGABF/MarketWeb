import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  /* 로그인 db연결 이쪽에 */

  /* example (!!history 있어야 로그인 넘어감!!) */

  const signIn = (e) => {
    e.preventDefault();
    /*
    auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/') 
            })
            .catch(error => alert(error.message))
    } */
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
        <img className="login_logo" src="image/logo2.png" alt="" />
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

          <button onClick={signIn} className="login_signInButton">
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
