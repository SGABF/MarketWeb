import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
import axios from "axios";
import Carousel from "home/Carousel";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchResultCompo from "./SearchResultCompo";

function SearchResult(props) {
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
		<div style={{ justifyContent: "center", alignItems: "center" }}>
			<br />
			<Carousel />
			<br />
			<div
				style={{
					backgroundColor: "rgb(243, 243, 239)",
					marginLeft: "10%",
					marginRight: "10%",
					minHeight: "100vh",
				}}
			>
				<div
					style={{
						paddingLeft: "10px",
						paddingRight: "10px",
						height: "100%",
						marginBottom: "20px",
					}}
				>
					<SearchResultCompo />
				</div>
			</div>
		</div>
	);
}

export default SearchResult;
