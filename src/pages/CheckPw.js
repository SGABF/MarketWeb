import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";
import "./LoginRegister.css";
import axios from "axios";

function LoginPage() {
	const [password, setPassword] = useState("");
	let history = useHistory();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const checkPw = (data) => {
		const token = localStorage.getItem("token");
		const username = localStorage.getItem("authenticatedUser");
		axios({
			method: "post",
			url: "http://192.168.0.151:8080/checkPassword",
			headers: { Authorization: "Bearer " + token, user_id: username },
			data: { user_password: password },
		})
			.then((res) => {
				if (res.data === 1) {
					history.push("/editmyinfo");
				} else {
					window.alert("비밀번호를 다시 확인해주세요.");
					document.querySelector("#password").value = "";
					document.querySelector("#password").focus();
				}
			})
			.catch((err) => {
				window.alert("서버통신에러 - 잠시 후 다시 시도해주세요.");
			});
	};

	const onCheckEnter = (e) => {
		if (e.key === "Enter") {
			handleSubmit(checkPw)();
		}
	};

	return (
		<div className="loginRegister">
			<Link to="/">
				<img className="login_logo" src="image/logotwo.png" alt="" />
			</Link>

			<form
				onSubmit={handleSubmit(checkPw)}
				className="loginRegister_box"
				autoComplete="off"
			>
				<h2>
					고객님의 소중한 정보 보호를 위해 비밀번호를 다시 입력해주시기
					바랍니다.
				</h2>
				<input
					type="password"
					{...register("password", {
						// required: true,
					})}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="비밀번호"
					className="loginRegister_input"
					onKeyPress={onCheckEnter}
				/>
				{/* {errors.password && errors.password.type === "required" && (
					<p>비밀번호를 입력해주세요.</p>
				)} */}
				<input type="submit" value="회원정보변경" />
				<br />
			</form>
		</div>
	);
}

export default LoginPage;
