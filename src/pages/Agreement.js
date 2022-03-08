import React, { useState, useEffect } from "react";
import { Checkbox } from 'antd';
import "./Agreement.css"
// npm install --save axios 설치 우선 처리
import axios from 'axios';
import 'antd/dist/antd.css';

function App() {

    axios.get('terms.html')
    .then(function (response) {
        document.getElementById('terms').innerHTML =response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

    axios.get('privacy.html')
    .then(function (response) {
        document.getElementById('privacy').innerHTML =response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
    
    // const [isAllChecked, setIsAllChecked] = useState(false)
    // const [checkedItems, setCheckedItems] = useState([])

    // const allAgreeHandler = (checked) => {
    //     setIsAllChecked(!isAllChecked)
    //     if (checked) {
    //       setCheckedItems([...checkedItems, 'check1', 'check2'])
    //     } else if ((!checked && checkedItems.includes('check1')) || (!checked && checkedItems.includes('check2'))) {
    //       setCheckedItems([])
    //     }
    //   }
    // const agreeHandler = (checked, value) => {
    //     if (checked) {
    //         setCheckedItems([...checkedItems, value])
    //     } else if (!checked && checkedItems.includes(value)) {
    //         setCheckedItems(checkedItems.filter((el) => el !== value))
    //     }

    // useEffect(() => {
    //     if (checkedItems.length >= 2) {
    //         setIsAllChecked(true)
    //     } else {
    //         setIsAllChecked(false)
    //     }
    //     }, [checkedItems])

    return(
        <div className="agreement">
            <div className="agreement_box">
                <h2>[필수] 이용약관 동의</h2>
                <div id="terms" className="agreement_content"></div><br />
                <Checkbox id="check1">이용약관에 동의합니다.</Checkbox>
                <br /><br />
                <h2>[필수] 개인정보 수집 및 이용 동의</h2>
                <div id="privacy" className="agreement_content"></div><br />
                <Checkbox id="check2">개인정보 수집 및 이용약관에 동의합니다.</Checkbox><br /><br />
                <Checkbox id="checkAll"><strong>전체 필수 항목에 동의합니다.</strong></Checkbox>
                {/* <Link to="/RegisterForm"> */}
                <button className="moveToRegisterBtn">
                    회원가입
                </button>
                {/* </Link> */}
            </div>        
        </div>
    );
}

export default App;