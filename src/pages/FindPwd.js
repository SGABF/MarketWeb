import React from "react";
import { Link } from "react-router-dom";
import "./FindMyID.css"

function App() {

    return(
        <div className="find_myID">
            <Link to="/">
                <img className="login_logo" src="image/logo2.png" alt="" />
            </Link>
            <div className="input_form">
                <h1>비밀번호 찾기</h1>
                <form action="">
                    <p>이름</p>
                    <div id="stdd_input">
                        <span className="box">
                            <input type="text" className="int" maxLength="20" placeholder="이름"/>
                        </span>
                    </div> <br/>
                    <p>이메일</p>
                    <div id="stdd_input">
                        <span className="box">
                            <input type="text" className="int" maxLength="20" placeholder="이메일"/>
                        </span>
                    </div> <br/>
                    <p>아이디</p>
                    <div id="stdd_input">
                        <span className="box">
                            <input type="text" className="int" maxLength="20" placeholder="아이디"/>
                        </span>
                    </div> <br/>
                        <button className="find_pwd_btn">
                            확인
                        </button>
                    <br /><br />
                    <Link to="/FindPwd">
                        <button className="find_pwd_btn">
                            비밀번호 찾기
                        </button>
                    <br /><br />
                    </Link>
                    <Link to="/Login">
                        <button className="login_btn">
                            로그인
                        </button>
                    </Link>
                </form>
            </div>
        </div>        
    );
}

export default App;