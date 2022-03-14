import React from 'react';
import DaumPostcode from "react-daum-postcode";
import { FaDove } from 'react-icons/fa';
 
const PopupPostCode = (props) => {
	  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
    const handlePostCode = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(fullAddress)
        console.log(data.zonecode)
        document.getElementById("postcode").value = data.zonecode;
        document.getElementById("address").value = fullAddress;
        props.onClose()
    }
 
    const postCodeStyle = {
        display: "block",
        position: "absolute",
        top: "70%",
        width: "500px",
        height: "600px",
        padding: "7px",
      };
      const buttonStyle = {
        position: "absolute",
        display: "block",
        top: "133.5%",
        width:"500px",
        height: "35px",
        border: "1px solid",
        borderRadius: "2px",
        backgroundColor: "#61dafb",
        borderColor: "#b6c3e2",      
      }
      const boxStyle = {
        border: "2px solid",
        backgroundColor : "red"
      }
 
    return(
        <>
          <div style={boxStyle}>
              <button type='button' onClick={() => {props.onClose()}} className='postCode_btn' style={buttonStyle}>닫기</button>
              <DaumPostcode onComplete={handlePostCode} style={postCodeStyle}/>
          </div>
        </>
    );
}
 
export default PopupPostCode;