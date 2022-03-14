import React from "react";
import { Link } from "react-router-dom";
import "./SignUpOk.css"

function App() {

    return(
        <div className="thx_signUp">
            <div className="thx_msg">
                <h1>개꿀마켓에 가입해주셔서 감사합니다.</h1> <br />
                <p>이제 개꿀마켓에서 원하는 물품을 찾고, 경매에 도전하세요.<br />
                또는, 필요 없는 물건을 개꿀마켓에 등록해보세요.<br />
                </p>
                <Link to="/">
                <button className="moveToHome">
                    홈으로
                </button>
                </Link>
            </div>  
        </div>
    );
}

export default App;