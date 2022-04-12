import React, { useEffect, useState } from "react";
// import "./MyMarket.css";
import { Link } from "react-router-dom";
import Footer from "components/Footer";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import axios from "axios";

function MyGk() {
	const [myGk, setMyGk] = useState([]);
	const token = localStorage.getItem("token");
	const username = localStorage.getItem("authenticatedUser");

	useEffect(() => {
		getMyGk();
	}, []);

	const getMyGk = async () => {
		await axios({
			method: "post",
			url: "http://192.168.0.151:8080/myGK",
			headers: { Authorization: "Bearer " + token, user_id: username },
		})
			.then((res) => {
				console.log("가져온값 : " + JSON.stringify(res.data));
				setMyGk(res.data);
			})
			.catch((error) => {
				console.log(`getMyauction 에러 :  ${error.message}`);
			});
	};

	return (
		<div
			style={{
				backgroundColor: "rgb(243, 243, 239)",
				marginLeft: "10%",
				marginRight: "10%",
			}}
		>
			<div style={{ backgroundColor: "rgb(243, 243, 239)" }}>
				<br />
				<br />
				<h3>My 개꿀</h3>
				<h4>내가 댓글 단 게시글 모아보기</h4>
				<br />
				{myGk &&
					myGk.map((item) => {
						return (
							<div className="home">
								<div className="home-container">
									<div className="home_row">
										<div className="product">
											<Link
												to={{
													pathname: "/subpagelogin",
													state: item.board_idx,
												}}
											>
												{item.board_profile === null ? (
													<img
														src="image/noimage.png"
														alt=""
														width="264px"
														height="229px"
													/>
												) : (
													<img
														// className="image_max"
														src={
															"http://192.168.0.151:8080/imagePath/" +
															item.board_profile
														}
														alt=""
														width="264px"
														height="229px"
													/>
												)}
											</Link>
											<div className="product_info">{item.board_name}</div>
											<p className="product_price">
												가격 : {item.board_price}원
											</p>
											<div>
												<Link
													to={{
														pathname: "/subpagelogin",
														state: item.board_idx,
													}}
												>
													<button className="icon_buttons">
														<ZoomInIcon />
													</button>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				<div
					style={{
						clear: "both",
					}}
				></div>
				<br />
				<br />
			</div>
		</div>
	);
}

export default MyGk;
