import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <h1>
        로그인이 완료되었습니다. 메인페이지로 이동하려면
        <Link to="/">
          <span style={{ color: "red", fontSize: "30pt" }}>클릭</span>
        </Link>
        하세요
      </h1>
    </>
  );
}
export default Profile;
