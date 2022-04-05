import axios from "axios";
import React, { useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import "./LoginRegister.css";
import * as loginService from "../service/AuthenticationService";
import { Hidden } from "@material-ui/core";

function EditMyInfo() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();

	const password = useRef();
	password.current = watch("password");
	const [userInfo, setUserInfo] = useState([]);
	const token = localStorage.getItem("token");
	const username = localStorage.getItem("authenticatedUser");
	let history = useHistory();

	useEffect(() => {
		getUserInfo();
	}, []);

	const getUserInfo = async () => {
		await axios({
			method: "post",
			url: "http://192.168.0.76:8080/updateUserPage",
			headers: { Authorization: "Bearer " + token, user_id: username },
		})
			.then((res) => {
				console.log("가져온값 : " + JSON.stringify(res.data));
				setUserInfo(res.data);
			})
			.catch((error) => {
				console.log(`getUserInfo 에러 :  ${error.message}`);
				window.location.href("/login");
			});
	};

	const onSubmit = (data) => {
		// const token = localStorage.getItem("token");
		console.log(data);
		axios({
			method: "post",
			url: "http://192.168.0.76:8080/updateUser",
			headers: { Authorization: "Bearer " + token },
			data: {
				user_id: data.username,
				user_password: data.password,
				user_name: data.name,
				user_email: data.email,
				user_birth: data.birth,
				user_phone: data.phone,
			},
		})
			.then((res) => {
				if (res.data === 1) {
					console.log(res.data);
					window.alert("회원정보수정이 완료되었습니다.");
					history.push("/editmyinfo");
				} else {
					window.alert("정보수정실패");
				}
			})
			.catch((error) => {
				window.alert("정보수정오류");
			});
	};

	const reloadPage = () => {
		window.location.reload();
	};

	const deleteAccount = () => {
		if (
			window.confirm(
				"회원탈퇴를 하시면 회원님의 모든 정보, 거래내역이 모두 삭제되며 되돌릴 수 없습니다. 그래도 삭제하시겠습니까?"
			)
		) {
			axios({
				method: "post",
				url: "http://192.168.0.76:8080/deleteUser",
				headers: { Authorization: "Bearer " + token, user_id: username },
			});
			localStorage.removeItem("authenticatedUser");
			localStorage.removeItem("token");
			reloadPage();
		}
	};

	return (
		<div className="loginRegister">
			<Link to="/">
				<img className="login_logo" src="image/logotwo.png" alt="" />
			</Link>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="loginRegister_box"
				autoComplete="off"
			>
				<input
					type="text"
					{...register("username", { required: true })}
					value={userInfo.user_id}
					readOnly={true}
					name="username"
					id="username"
				/>

				<input
					type="password"
					{...register("password", {
						required: true,
						pattern:
							/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/i,
					})}
					placeholder="새 비밀번호 (영문,숫자,특수문자 최소 한 가지 조합 8~16자)"
					id="password"
				/>
				{errors.password && errors.password.type === "required" && (
					<p>필수 입력 항목입니다.</p>
				)}
				{errors.password && errors.password.type === "pattern" && (
					<p>
						영문,숫자,특수문자를 최소 한 가지씩 조합하여 8~16자로 입력해주세요.
					</p>
				)}

				<input
					type="password"
					{...register("passwordConfirm", {
						required: true,
						pattern:
							/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/i,
						validate: (value) => value === password.current,
					})}
					placeholder="새 비밀번호 확인"
				/>
				{errors.passwordConfirm &&
					errors.passwordConfirm.type === "required" && (
						<p>필수 입력 항목입니다.</p>
					)}
				{errors.passwordConfirm &&
					errors.passwordConfirm.type === "pattern" && (
						<p>
							영문,숫자,특수문자를 최소 한 가지씩 조합하여 8~16자로
							입력해주세요.
						</p>
					)}
				{errors.passwordConfirm &&
					errors.passwordConfirm.type === "validate" && (
						<p>비밀번호와 동일해야 합니다.</p>
					)}

				<input
					type="text"
					{...register("name", { required: true })}
					value={userInfo.user_name}
					readOnly={true}
					name="name"
					id="name"
				/>

				<input
					type="text"
					{...register("email", {
						required: true,
						pattern:
							/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
					})}
					placeholder="이메일"
					id="email"
					defaultValue={userInfo.user_email}
				/>
				{errors.email && errors.email.type === "required" && (
					<p>필수 입력 항목입니다.</p>
				)}
				{errors.email && errors.email.type === "pattern" && (
					<p>이메일 양식을 지켜주세요.</p>
				)}

				<input
					type="text"
					{...register("birth", {
						required: true,
					})}
					value={userInfo.user_birth}
					readOnly={true}
					name="birth"
					id="birth"
				/>

				<input
					type="text"
					{...register("phone", {
						required: true,
						pattern: /^01([0-9]{9})$/i,
					})}
					placeholder="휴대폰 번호 (예: 01012345678)"
					id="phone"
					name="phone"
					defaultValue={userInfo.user_phone}
				/>
				{errors.phone && errors.phone.type === "required" && (
					<p>필수 입력 항목입니다.</p>
				)}
				{errors.phone && errors.phone.type === "pattern" && (
					<p>휴대폰 번호를 확인해주세요.</p>
				)}

				<input type="submit" value="회원정보수정" />
				<span className="delete_account" onClick={deleteAccount}>
					회원탈퇴
				</span>
			</form>
		</div>
	);
}

export default EditMyInfo;
