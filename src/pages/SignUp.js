import React, { useState } from "react";
import PopupDom from "PopupDom";
import PopupPostCode from "PopupPostCode";
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
            <div className="signUp_form">
                <h1>회원가입</h1>
                <form action="">
                    <p>아이디<br/>
                    <input type="text" name="id" /></p>
                    <p>비밀번호<br/>
                    <input type="password" name="pwd"/></p>
                    <p>비밀번호 확인<br/>
                    <input type="password" name="pwd"/></p>
                    <p>이메일<br/>
                    <input type="text" name="email"/></p>
                    <p>이메일 인증<br/>
                    <input type="text" name="email"/></p>
                    <p>이름<br/>
                    <input type="text" name="name"/></p>
                    <p>생년월일<br/></p>
                    <div id="bir_yy">
                        <span className="box"><input type="text" id="yy" className="int" maxLength="4" placeholder="년(4자)"></input></span>
                    </div> 
                    <div id="bir_mm">
                        <span className="box">
                            <select id="mm" className="sel">
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
                        <span class="box">
                            <input type="text" id="dd" className="int" maxLength="2" placeholder="일"/>
                        </span>
                    </div>
                    <p>휴대폰 번호<br/>
                    <input type="tel" /> </p>
                    <p>주소<br/>
                    <input type="text"/>
                    <button type='button' onClick={openPostCode}>우편번호 검색</button>
                    <div id='popupDom'>
                        {isPopupOpen && (
                            <PopupDom>
                                <PopupPostCode onClose={closePostCode} />
                            </PopupDom>
                        )}
                    </div>
                    </p>
                    <p><input type="submit" /></p>

                </form>
            </div>
        </div>
    );
}

export default App;