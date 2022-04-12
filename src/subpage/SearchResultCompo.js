import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
import axios from "axios";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import "bootstrap/dist/css/bootstrap.min.css";

function SearchResultCompo(props) {
	const [searchResult, setSearchResult] = useState([]);
	const location = useLocation();
	const keyword_data = location.state;

	useEffect(() => {
		getSearchResult(keyword_data);
	}, []);

	const getSearchResult = async (keyword) => {
		await axios
			.get("http://192.168.0.151:8080/home/searchBoardList", {
				params: { keyword: keyword },
			})
			.then((res) => {
				console.log("가져온값 : " + JSON.stringify(res.data));
				setSearchResult(res.data);
			})
			.catch((error) => {
				console.log(`getSearchResult 에러 :  ${error.message}`);
			});
	};

	return (
		<div>
			<h4>
				&nbsp;&nbsp;&nbsp;"{keyword_data}"으로 검색한 결과 총{" "}
				{searchResult.length}건
			</h4>
			<div>
				{searchResult &&
					searchResult.map((item) => {
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

export default SearchResultCompo;
