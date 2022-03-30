import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./RegisteredOk.css";
function DeleteOk() {

  const handleClick = () => {
    window.location.reload();  // recommended
  };

  return (
    <div className="loginRegister">
      <div className="reg_box">
        <p className="reg_msg">
          회원탈퇴가 완료되었습니다. <br />
          그동안 이용해 주셔서 감사합니다.         
          <br />
        </p>
        <Link to="/">
          <Button
            variant="outline-dark"
            type="submit"
            className="loginRegister_button"
          >
            홈으로
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default DeleteOk;