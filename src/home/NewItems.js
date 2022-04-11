import React, { useEffect, useState } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import axios from "axios";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

function NewItems() {
	const [home, setHome] = useState([]);

	useEffect(() => {
		getHome();
	}, []);

	const getHome = async () => {
		await axios
			.post("http://192.168.0.151:8080/home/main")
			.then((res) => {
				// console.log("가져온값 : " + res.data.length);
				// console.log("가져온값 : " + JSON.stringify(res.data));
				setHome(res.data);
			})
			.catch((error) => {
				console.log(`getHome 에러 :  ${error.message}`);
			});
	};

	return (
		<div>
			<h1>최근 등록된 상품</h1>
			<div>
				{home &&
					home.map((item) => {
						return (
							<div className="home">
								<div className="home-container">
									<div className="home_row">
										<div className="product">
											<Link
												to={{
													pathname: "subpage/Subpage",
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
											{item.board_soldout === 1 ? (
												<strong>
													<p style={{ color: "red" }}>Sold Out</p>
												</strong>
											) : (
												<p></p>
											)}
											{item.user_id}
											<div>
												<Link
													to={{
														pathname: "subpage/Subpage",
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
			</div>
			<div
				style={{
					clear: "both",
				}}
			></div>
		</div>
	);
}

export default NewItems;
