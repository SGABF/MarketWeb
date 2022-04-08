import React, { useEffect, useState } from "react";
import "./MyMarket.css";
import { Link } from "react-router-dom";
import Footer from "components/Footer";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import axios from "axios";

function MyAuction() {
	const [myGk, setMyGk] = useState([]);
	const token = localStorage.getItem("token");
	const username = localStorage.getItem("authenticatedUser");

	useEffect(() => {
		getMyGk();
	}, []);

	const getMyGk = async () => {
		await axios({
			method: "post",
			url: "http://192.168.0.76:8080/myGK",
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
		<div>
			<div className="mypage">
				<h3>My 개꿀</h3> <br />
				<ButtonGroup
					variant="outlined"
					aria-label="outlined button group"
					className="home_buttons"
				>
					{/* <Link to="../mysale">
						<Button>판매</Button>
					</Link>
					<Link to="../myauction">
						<Button>구매</Button>
					</Link> */}
				</ButtonGroup>
				{myGk &&
					myGk.map((item) => {
						return (
							<div className="home">
								<div className="home-container">
									<div className="home_row">
										<div className="product">
											<img
												className="image_max"
												src={
													"http://192.168.0.76:8080/imagePath/" +
													item.board_profile
												}
												alt=""
												width="1000px"
												height="250px"
											/>
											<div className="product_info">{item.board_name}</div>
											<p className="product_price">
												가격 : {item.board_price}원
											</p>
											<div>
												{/* <img
                            src={
                              "http://192.168.0.76:8080/imagePath/" +
                              item.boardImageList[0].boardImage_saveName
                            }
                            alt="Third slide"
                            width="1000px"
                            height="250px"
                          /> */}

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
				>
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default MyAuction;
