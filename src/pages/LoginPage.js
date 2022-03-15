import React, { useState } from "react";
import "./LoginRegister.css";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

function LoginPage(props) {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  // const history = useHistory();

  const onUsernameHandler = (event) => {
    setUsername(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(Username);
    console.log(Password);

    let body = {
      username : Username,
      user_password : Password
    };

    axios
      .post("http://localhost:8888/user", body)
      .then((res) => console.log(res));
  };


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
      <form 
        onSubmit={submitHandler}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="loginRegister_box">
          <input
            type="text"
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
          <Link to="/idinquiry">
            <span className="find">아이디 찾기</span>
          </Link>

          <Link to="/pwinquiry">
            <span className="find">비밀번호 찾기</span>
          </Link>
          <br />
          <Link to="/">
            <button type="submit" /*onClick={signIn}*/ className="loginRegister_button">
              로그인
            </button>
          </Link>
          <Link to="/agreement">
            <button className="loginRegister_button">회원가입</button>
          </Link>
        </div>
      </form>
    </div>
  );

  //   <div className="login">
  //     <Link to="/">
  //       <img className="login_logo" src="image/logo2.png" alt="" />
  //     </Link>
  //     <div className="login_container">
  //       <h1>로그인</h1> <br />
  //       <form action="">
  //         <p>아이디</p>
  //           <div id="stdd_input">
  //               <span className="box">
  //                   <input type="id" className="int" maxLength="20" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)}/>
  //               </span>
  //           </div> <br/>

  //         <p>비밀번호</p>
  //           <div id="stdd_input">
  //               <span className="box">
  //                   <input type="password" className="int" maxLength="20" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)}/>
  //               </span>
  //           </div> <br/>
  //         <button onClick={signIn} className="login_signInButton">
  //           로그인
  //         </button> <br/><br/>
  //       </form>
  //       <Link to="/FindMyID">
  //         <p id="find" >아이디 찾기</p>
  //       </Link>
  //       <Link to="/FindPwd">
  //         <p>비밀번호 찾기</p>
  //       </Link>
  //         <p>아이디가 없으십니까?</p>
  //       <Link to="/Agreement">
  //         {/* '회원가입' 버튼 작동이 안되어 주석처리 후 onClick={register} 삭제 */}
  //         {/* <button onClick={register} className="login_registerButton"> */}
  //         <button className="login_registerButton">
  //           회원가입
  //         </button>
  //       </Link>
  //     </div>
  //   </div>
  // );
}

export default withRouter(LoginPage);
