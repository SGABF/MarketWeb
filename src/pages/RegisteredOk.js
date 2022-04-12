import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./RegisteredOk.css";

function RegisteredOk() {
	return (
		<div className="loginRegister">
			<Link to="/">
				<img className="login_logo" src="image/logotwo.png" alt="" />
			</Link>
			<div className="reg_box">
				<p className="reg_msg">
					개꿀마켓에 가입해주셔서 감사합니다. <br />
					이제 전국 어디에서나 원하는 물품을 거래하실 수 있습니다.
					<br />
				</p>
				<Link to="/login">
					<Button
						variant="outline-dark"
						type="submit"
						className="loginRegister_button"
					>
						로그인
					</Button>
				</Link>
			</div>
		</div>
	);
}

export default RegisteredOk;
