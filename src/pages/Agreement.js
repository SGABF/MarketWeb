import React, { useState, useEffect } from "react";
import "./Agreement.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import privacy from "!!raw-loader!./privacy.html";
import terms from "!!raw-loader!./terms.html";

function Agreement() {
  window.onload = function () {
    const agreeChkAll = document.querySelector("input[name=agree_all]");
    agreeChkAll.addEventListener("change", (e) => {
      let agreeChk = document.querySelectorAll("input[name=agree1]");
      for (let i = 0; i < agreeChk.length; i++) {
        agreeChk[i].checked = e.target.checked;
      }

      let agreeChk2 = document.querySelectorAll("input[name=agree2]");
      for (let i = 0; i < agreeChk2.length; i++) {
        agreeChk2[i].checked = e.target.checked;
      }
    });

    function CheckForm(Join) {
      var chk1 = document.querySelector("input[name=agree1]").checked;
      var chk2 = document.querySelector("input[name=agree2]").checked;
      if (chk1 == "") {
        alert("약관에 동의 해 주세요");
        return false;
      }
      if (chk2 == "") {
        alert("약관에 동의 해 주세요");
        return false;
      }
    }
  };

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
        <label for="agree1">
          <input type="checkbox" name="agree1" id="agree1" value="1" />
          이용약관에 동의합니다.
        </label>
        <br />
        <br />
        <h2>[필수] 개인정보 수집 및 이용 동의</h2>
        <div
          className="agreement_content"
          dangerouslySetInnerHTML={{ __html: privacy }}
        ></div>
        <br />
        <label for="agree2">
          <input type="checkbox" name="agree2" id="agree2" value="1" />
          개인정보 수집 및 이용약관에 동의합니다.
        </label>
        <br />
        <br />
        <label for="agree_all">
          <input type="checkbox" name="agree_all" id="agree_all" />
          <strong>전체 필수 항목에 동의합니다.</strong>
        </label>
        <br />
        <br />
        <Link to="/register">
          <Button
            variant="outline-dark"
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