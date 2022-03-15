import React, { useState }from "react";
import { Link } from "react-router-dom";
import "./LoginRegister.css"

function IDInquiry() {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");

    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    };
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    };
    
    // const onSubmit = (event) => {
    //     event.preventDefault();
    //     if () {
    //     alert("존재하지 않는 정보입니다.");
    //     }
    // };
    
    return (
        <div className="loginRegister">
        <Link to="/">
            <img className="login_logo" src="image/logo2.png" alt="" />
        </Link>
        <form action="">
            <div className="loginRegister_box">
            <input
                type="text"
                name="user_name"
                placeholder="이름"
                className="loginRegister_input"
                value={Name}
                onChange={onNameHandler}
            />{" "}
            <br />
            <input
                type="text"
                name="user_email"
                placeholder="이메일"
                className="loginRegister_input"
                value={Email}
                onChange={onEmailHandler}
            />{" "}
            <br />
            <button
                type="submit"
                // onSubmit={onSubmit}
                className="loginRegister_button"
            >
                확인
            </button>
            </div>
        </form>
        </div>   
    );
}

export default IDInquiry;