import React, { useEffect, useState } from "react";
import "./Buy.css";
import Product from "components/Product";
import { Carousel, className, DropdownButton, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "components/Footer";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { NoBackpackSharp } from "@mui/icons-material";

function Buy() {
	const [home, setHome] = useState([]);

	useEffect(() => {
		getHome();
	}, []);

	const getHome = async () => {
		const token = localStorage.getItem("token");
		await axios
			.post("http://192.168.0.151:8080/home/buyBoard", {
				headers: { Authorization: "Bearer " + token },
			})
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
			<h1>&nbsp;&nbsp;&nbsp;구매게시판</h1>
			<br />
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
		</div>
	);
}

export default Buy;
