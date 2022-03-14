import React, { useState } from "react";
import PopupDom from '../PopupDom';
import PopupPostCode from '../PopupPostCode';
import { Link } from "react-router-dom";
import "./SignUp.css"

function App() {

    // 팝업창 상태 관리
    const [isPopupOpen, setIsPopupOpen] = useState(false)
 
	// 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    }
 
	// 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    }

    return(
        <div className="signUp">
            <Link to="/">
                <img className="login_logo" src="image/logo2.png" alt="" />
            </Link>
            <div className="signUp_form">
                <h1>회원가입</h1> <br />
                <form action="">
                    <p>아이디</p>
                    <div id="stdd_input">
                        <span className="box">
                            <input type="text" className="int" maxLength="20" placeholder="아이디"/>
                        </span>
                    </div> <br/>

                    <p>비밀번호</p>
                    <div id="stdd_input">
                        <span className="box">
                            <input type="password" className="int" maxLength="20" placeholder="비밀번호"/>
                        </span>
                    </div> <br/>
                    <p>비밀번호 확인</p>
                    <div id="stdd_input">
                        <span className="box">
                            <input type="password" className="int" maxLength="20" placeholder="비밀번호 확인"/>
                        </span>
                    </div> <br/>

                    <p>이메일</p>
                    <div id="stdd_input">
                        <span className="box">
                            <input type="text" className="int" maxLength="20" placeholder="이메일"/>
                        </span>
                    </div> <br/>

                    <p>이름</p>
                    <div id="stdd_input">
                        <span className="box">
                            <input type="text" className="int" maxLength="20" placeholder="이름"/>
                        </span>
                    </div> <br/>

                    <p>생년월일</p>
                    <div id="bir_yy">
                        <span className="box"><input type="text" id="yy" className="int" maxLength="4" placeholder="년(4자)"></input></span>
                    </div> 
                    <div id="bir_mm">
                        <span className="box">
                            <select id="mm" className="int">
                                <option>월</option>
                                <option value="01">1</option>
                                <option value="02">2</option>
                                <option value="03">3</option>
                                <option value="04">4</option>
                                <option value="05">5</option>
                                <option value="06">6</option>
                                <option value="07">7</option>
                                <option value="08">8</option>
                                <option value="09">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </span>
                    </div>
                    <div id="bir_dd">
                        <span className="box">
                            <input type="text" id="dd" className="int" maxLength="2" placeholder="일"/>
                        </span>
                    </div> <br/>
                    <p>휴대폰 번호</p>
                    <div id="stdd_input">
                        <span className="box">
                            <input type="tel" className="int" maxLength="11" placeholder="전화번호"/>
                        </span>
                    </div> <br/>

                    <p>주소</p>
                    <div id="pcode_input">
                        <span className="box2">
                            <input type="text" id="postcode" className="int" placeholder="우편번호"/>
                        </span>
                    </div>
                    <div id="pcode_input">
                        <span className="box2">
                            <input type='button' className="srch_postcode" onClick={openPostCode} value="우편번호 검색"/>
                        </span>
                    </div>
                    <div id="stdd_input">
                        <span className="box">
                            <input type="text" id="address" className="int" placeholder="주소"/>
                        </span>
                    </div>
                    <div id="stdd_input">
                        <span className="box">
                            <input type="text" id="detailAddress" className="int" placeholder="상세주소"/>
                        </span>
                    </div>
                    <div id='popupDom'>
                        {isPopupOpen && (
                            <PopupDom>
                                <PopupPostCode onClose={closePostCode} />
                            </PopupDom>
                        )}
                    </div> <br />
                    <Link to="/SignUpOk">
                        <input type="submit" className="complete_signUp" value="회원가입"/>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default App;