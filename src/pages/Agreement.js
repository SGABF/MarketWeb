import React, { useState } from "react";
import "./Agreement.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import privacy from "!!raw-loader!./privacy.html";
import terms from "!!raw-loader!./terms.html";
import { useHistory } from "react-router-dom";
import { offset } from "@popperjs/core";

function Agreement() {
  // const agreeChkAll = document.querySelector("input[name=checkAll]");
  // agreeChkAll.addEventListener((e) => {
  //   let agreeChk = document.querySelectorAll("input[name=check]");
  //   for (let i = 0; i < agreeChk.length; i++) {
  //     agreeChk[i].checked = e.target.checked;
  //   }

  //   let agreeChk2 = document.querySelectorAll("input[name=check2]");
  //   for (let i = 0; i < agreeChk2.length; i++) {
  //     agreeChk2[i].checked = e.target.checked;
  //   }
  // });

  // function CheckForm(Join) {
  //   var chk1 = document.querySelector("input[name=check]").checked;
  //   var chk2 = document.querySelector("input[name=check2]").checked;
  //   if (chk1 == "") {
  //     alert("약관에 동의 해 주세요");
  //     return false;
  //   }
  //   if (chk2 == "") {
  //     alert("약관에 동의 해 주세요");
  //     return false;
  //   }
  // }
  let history = useHistory();
  const [checkedBtns, setCheckedBtns] = useState([]);
  const changeHandler = (checked, id) => {
    if (checked) {
      setCheckedBtns([...checkedBtns, id]);
      console.log("체크반영완료");
    } else {
      setCheckedBtns(checkedBtns.filter((button) => button !== id));
      console.log("체크해제반영완료");
    }
  };

  const isAllChecked = checkedBtns.length === 2;
  const disabled = !isAllChecked;

  return (
    <div className="agreement">
      <div className="agreement_box">
        <h1>개꿀마켓에 오신 것을 환영합니다.</h1>

        <br />
        <h2>[필수] 이용약관 동의</h2>
        <div
          className="agreement_content"
          dangerouslySetInnerHTML={{ __html: terms }}
        ></div>
        <br />
        <label htmlFor="check">
          <input
            type="checkbox"
            onChange={(e) => {
              changeHandler(e.currentTarget.checked, "check");
            }}
            checked={checkedBtns.includes("check") ? true : false}
            id="check"
          />
          <span className="agreeStatement">이용약관에 동의합니다.</span>
        </label>
        <br />
        <br />
        <br />
        <h2>[필수] 개인정보 수집 및 이용 동의</h2>
        <div
          className="agreement_content"
          dangerouslySetInnerHTML={{ __html: privacy }}
        ></div>
        <br />
        <label htmlFor="check2">
          <input
            type="checkbox"
            onChange={(e) => {
              changeHandler(e.currentTarget.checked, "check2");
            }}
            checked={checkedBtns.includes("check2") ? true : false}
            id="check2"
          />
          <span className="agreeStatement">
            개인정보 수집 및 이용약관에 동의합니다.
          </span>
        </label>
        <br />
        <br />
        {/* <label htmlFor="checkAll">
          <input type="checkbox" id="checkAll"/>
          <strong>전체 필수 항목에 동의합니다.</strong>
        </label>
        <br />
        <br /> */}
        <Link to="/register" className="disabled-link">
          <Button
            disabled={disabled}
            onClick={() => history.push("/register")}
            style={
              disabled
                ? { backgroundColor: "#bbb7b2" }
                : { backgroundColor: "#febd69" }
            }
            type="submit"
            className="loginRegister_button"
          >
            회원가입
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Agreement;
