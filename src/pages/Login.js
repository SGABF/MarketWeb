import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { textAlign } from "@mui/system";
import { CenterFocusStrong } from "@material-ui/icons";

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
        <h1>로그인</h1> <br />
        <form action="">
          <p>아이디</p>
            <div id="stdd_input">
                <span className="box">
                    <input type="id" className="int" maxLength="20" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)}/>
                </span>
            </div> <br/>

          <p>비밀번호</p>
            <div id="stdd_input">
                <span className="box">
                    <input type="password" className="int" maxLength="20" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </span>
            </div> <br/>
          <button onClick={signIn} className="login_signInButton">
            로그인
          </button> <br/><br/>
        </form>
        <Link to="/FindMyID">
          <p id="find" >아이디 찾기</p>
        </Link>
        <Link to="/FindPwd">
          <p>비밀번호 찾기</p>
        </Link>
          <p>아이디가 없으십니까?</p>
        <Link to="/Agreement">
          {/* '회원가입' 버튼 작동이 안되어 주석처리 후 onClick={register} 삭제 */}
          {/* <button onClick={register} className="login_registerButton"> */} 
          <button className="login_registerButton">
            회원가입
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
