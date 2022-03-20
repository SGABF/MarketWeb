import axios from "axios";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./LoginRegister.css";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef();

  console.log(watch("username"));
  console.log(watch("password"));
  console.log(watch("passwordConfirm"));
  console.log(watch("email"));

  const checkId = (e) => {
    alert("아이디 중복체크입니다.");
  };

  const onSubmit = (data) => console.log(data);

  // const onSubmit = (username, password) => {
  //   return function (dispatch, getState, { history }) {
  //     axios({
  //       method: "post",
  //       url: "http://192.168.0.76:8080/",
  //       data: {
  //         username: this.state.username,
  //         password: password,
  //         nickname: nickname,
  //       },
  //     })
  //       .then((res) => {
  //         window.alert(res.data.result);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  // };

  // const checkId = (e) => {
  //   const data = {username:username.value}
  //   axios.post('http://192.168.0.76:8080/', data)


  // }

  return (
    <div className="loginRegister">
      <Link to="/">
        <img className="login_logo" src="image/logo2.png" alt="" />
      </Link>

      <form onSubmit={handleSubmit(onSubmit)} className="loginRegister_box">
        <input
          type="text"
          {...register("username", {
            required: true,
            pattern: /^[a-z0-9]+[a-z0-9]{5,10}$/i,
          })}
          placeholder="아이디"
          className="loginRegister_input"
        />
        <button className="idCheck" onClick={checkId}>
          중복확인
        </button>
        {errors.username && errors.username.type === "required" && (
          <p>필수 입력 항목입니다.</p>
        )}
        {errors.username && errors.username.type === "pattern" && (
          <p>영문(소문),숫자 혼합 5~10자리로 입력해주세요.</p>
        )}

        <input
          type="password"
          {...register("password", {
            required: true,
            pattern:
              /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/i,
          })}
          placeholder="비밀번호"
          className="loginRegister_input"
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
          placeholder="비밀번호 확인"
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
          {...register("name", { required: true, maxLength: 10 })}
          placeholder="이름"
        />
        {errors.name && errors.name.type === "required" && (
          <p>필수 입력 항목입니다.</p>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <p>이름을 10자 이내로 작성해주세요.</p>
        )}

        <input
          type="text"
          {...register("email", {
            required: true,
            pattern:
              /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
          })}
          placeholder="이메일"
        />
        {errors.email && errors.email.type === "required" && (
          <p>필수 입력 항목입니다.</p>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <p>이메일 양식을 지켜주세요.</p>
        )}

        <input
          type="text"
          {...register("birth", { required: true })}
          placeholder="생년월일"
        />
        {errors.birth && <p>필수 입력 항목입니다.</p>}

        <input
          type="text"
          {...register("phone", {
            required: true,
            pattern: /^01([0-9]{9})$/i,
          })}
          placeholder="휴대폰 번호"
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

export default RegisterPage;
