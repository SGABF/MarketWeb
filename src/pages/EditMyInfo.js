import axios from "axios";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./LoginRegister.css";
import * as loginService from "../service/AuthenticationService";

function EditMyInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const password = useRef();
  const loggedInUser = loginService.getLoggedInUserName();

  // console.log(watch("username"));
  // console.log(watch("password"));
  // console.log(watch("passwordConfirm"));
  // console.log(watch("email"));

  // const checkId = (e) => {
  //   const username = document.querySelector("#username").value;
  //   if (username.length < 5) {
  //     window.alert("5자 이상이어야 합니다.");
  //     return;
  //   }
  //   axios({
  //     method: "post",
  //     url: "http://192.168.0.76:8080/notToken/idCheck",
  //     data: { user_id: username },
  //   })
  //     .then((res) => {
  //       window.alert(
  //         res.data === 0
  //           ? "사용가능한 아이디입니다."
  //           : "사용불가한 아이디입니다."
  //       );
  //       if (res.data === 1) {
  //         document.querySelector("#username").value = "";
  //         document.querySelector("#username").focus();
  //       }
  //     })
  //     .catch((error) => {
  //       window.alert(error);
  //     });
  // };

  // const onSubmit = (data) => {
  //   console.log(data);
  //   axios({
  //     method: "post",
  //     url: "http://192.168.0.76:8080/notToken/updateUser",
  //     data: {
  //       user_password: data.password,
  //       user_birth: data.birth,
  //       user_email: data.email,
  //       user_phone: data.phone,
  //     },
  //   })
  //     .then((res) => {
  //       window.alert("회원정보수정이 완료되었습니다.");
  //       window.location.href = "/editmyinfo";
  //     })
  //     .catch((error) => {
  //       window.alert("정보수정오류");
  //     });
  // };

  return (
    <div className="loginRegister">
      <Link to="/">
        <img className="login_logo" src="image/logotwo.png" alt="" />
      </Link>

      <form
        // onSubmit={handleSubmit(onSubmit)}
        className="loginRegister_box"
        autoComplete="off"
      >
        <input
          type="text"
          {...register("username", {
            required: true,
          })}
          placeholder="아이디 (영문소문자,숫자 조합 5~10자리)"
          className="loginRegister_input"
          id="username"
          readOnly="true"
        />

        <input
          type="password"
          {...register("password", {
            required: true,
            pattern:
              /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/i,
          })}
          placeholder="새 비밀번호 (영문,숫자,특수문자 최소 한 가지 조합 8~16자)"
          className="loginRegister_input"
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
            validate: (value) => value !== password.current,
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
          {...register("name", {
            required: true,
          })}
          placeholder="이름"
        />

        <input
          type="text"
          {...register("email", {
            required: true,
            pattern:
              /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
          })}
          placeholder="이메일"
        />
        {/* <p>{errors.email?.message}</p> */}
        {errors.email && errors.email.type === "required" && (
          <p>필수 입력 항목입니다.</p>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <p>이메일 양식을 지켜주세요.</p>
        )}

        <input type="text" placeholder="생년월일 (예: 19901021)" />

        <input
          type="text"
          {...register("phone", {
            required: true,
            pattern: /^01([0-9]{9})$/i,
          })}
          placeholder="휴대폰 번호 ('-'없이 예: 01012345678)"
        />
        {errors.phone && errors.phone.type === "required" && (
          <p>필수 입력 항목입니다.</p>
        )}
        {errors.phone && errors.phone.type === "pattern" && (
          <p>휴대폰 번호를 확인해주세요.</p>
        )}

        <input type="submit" value="회원가입" />
      </form>
    </div>
  );
}

export default EditMyInfo;
